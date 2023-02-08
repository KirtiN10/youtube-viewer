import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchVideoFailure, fetchVideoSuccess } from "./actions";
import { FETCH_VIDEO_REQUEST } from "./actionTypes";
import { FetchVideoRequest } from "./types";

var ROOT_URL = "https://www.googleapis.com/youtube/v3/search";


const API_KEY = "AIzaSyA9O7H_oo4F_Ju5o8I02RCG8WF1yxpu2eE";
// const API_KEY = "AIzaSyCbcQMTPqAevOao2BQsQadm5SFTZljP2dM"; //client

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
        error: e.message,
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

