import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchCommentsFailure, fetchCommentsSuccess } from "./actions";
import { FETCH_COMMENTS_REQUEST } from "./actionTypes";
import appConstants from "../../config/appConstants";

var ROOT_URL = `${appConstants.request_url}/commentThreads`;

const API_KEY = process.env.REACT_APP_API_KEY;

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

