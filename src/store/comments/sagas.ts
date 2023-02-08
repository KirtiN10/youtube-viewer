import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchCommentsFailure, fetchCommentsSuccess } from "./actions";
import { FETCH_COMMENTS_REQUEST } from "./actionTypes";

var ROOT_URL = 'https://www.googleapis.com/youtube/v3/commentThreads';


// const API_KEY = "AIzaSyDHs5nkssYDGIm41I40nj2ZyinKTJaLDgo";
const API_KEY = "AIzaSyCbcQMTPqAevOao2BQsQadm5SFTZljP2dM"; //client

const getComments = (videoId: any) => {
  var params = {
    part: 'id, snippet, replies',
    key: API_KEY,
    videoId: videoId,
  }
  return axios.get(ROOT_URL, { params: params });
}

/*
  Worker Saga: Fired on FETCH_COMMENTS_REQUEST action
*/
function* fetchCommentsSaga(res: any) : any {
  try {
    const response = yield call(getComments, res.payload);
    console.log('response', response);
    yield put(
      fetchCommentsSuccess({
        comments: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchCommentsFailure({
        error: e.message,
      })
    );
  }
};

/*
  Starts worker saga on latest dispatched `FETCH_COMMENTS_REQUEST` action.
  Allows concurrent increments.
*/
function* CommentsSaga() {
  yield all([takeLatest(FETCH_COMMENTS_REQUEST, fetchCommentsSaga)]);
}

export default CommentsSaga;

