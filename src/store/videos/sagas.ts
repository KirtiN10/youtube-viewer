import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchVideoFailure, fetchVideoSuccess } from "./actions";
import { FETCH_VIDEO_REQUEST } from "./actionTypes";

var ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';


// const API_KEY = "AIzaSyDHs5nkssYDGIm41I40nj2ZyinKTJaLDgo";
const API_KEY = "AIzaSyCbcQMTPqAevOao2BQsQadm5SFTZljP2dM"; //client

const getVideos = (term: any) => {
    var params = {
    part: 'snippet',
    key: API_KEY,
    q: term,
    type: 'video'
  };
  return axios.get(ROOT_URL, { params: params });
}

/*
  Worker Saga: Fired on FETCH_VIDEO_REQUEST action
*/
function* fetchVideoSaga(res: any) : any {
  try {
    const response = yield call(getVideos, res.payload);
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
};

/*
  Starts worker saga on latest dispatched `FETCH_VIDEO_REQUEST` action.
  Allows concurrent increments.
*/
function* videoSaga() {
  yield all([takeLatest(FETCH_VIDEO_REQUEST, fetchVideoSaga)]);
}

export default videoSaga;

