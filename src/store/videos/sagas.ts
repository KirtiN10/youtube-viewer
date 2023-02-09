import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchVideoFailure, fetchVideoSuccess } from "./actions";
import { FETCH_VIDEO_REQUEST } from "./actionTypes";
import { FetchVideoRequest } from "./types";
import appConstants from "../../config/appConstants";

var ROOT_URL = `${appConstants.request_url}/search`;

const API_KEY = process.env.REACT_APP_API_KEY;

const getVideos = (term: string) => {
  var params = {
    part: "snippet",
    key: API_KEY,
    q: term,
    type: "video",
  };
  return axios.get(ROOT_URL, { params: params });
};

/*
  Worker Saga: Fired on FETCH_VIDEO_REQUEST action
*/

function* fetchVideoSaga(res: FetchVideoRequest): Generator {
  try {
    const response: {
      data: {};
    } = (yield call(getVideos, res.payload)) as { data: {} };
    yield put(
      fetchVideoSuccess({
        videos: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchVideoFailure({
        error: e.response?.data.error.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_VIDEO_REQUEST` action.
  Allows concurrent increments.
*/
function* videoSaga() {
  yield all([takeLatest(FETCH_VIDEO_REQUEST, fetchVideoSaga)]);
}

export default videoSaga;

