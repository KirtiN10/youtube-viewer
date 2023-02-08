import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { fetchVideoFailure, fetchVideoSuccess } from "./actions";
import { FETCH_VIDEO_REQUEST } from "./actionTypes";
// import { IVideo } from "./types";

var ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';
// var commentThreads = 'https://www.googleapis.com/youtube/v3/commentThreads';

const API_KEY = "AIzaSyDHs5nkssYDGIm41I40nj2ZyinKTJaLDgo"; //client

const getVideos = () => {
    var params = {
    part: 'snippet',
    key: API_KEY,
    q: 'livepool',
    type: 'video'
  };
  return axios.get(ROOT_URL, { params: params });
}
  

/*
  Worker Saga: Fired on FETCH_VIDEO_REQUEST action
*/
function* fetchVideoSaga(term: any) : any {
  console.log('fetchVideoSagafetchVideoSagafetchVideoSagafetchVideoSagatremtremtrem', term);
  try {
    const response = yield call(getVideos);
    console.log('response', response);
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
  console.log('FETCH_VIDEO_REQUESTFETCH_VIDEO_REQUEST')
  yield takeLatest(FETCH_VIDEO_REQUEST, fetchVideoSaga);
}

export default videoSaga;

