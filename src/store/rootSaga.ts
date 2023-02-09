import { all, fork } from "redux-saga/effects";

import videoSaga from "./videos/sagas";
import commentsSaga from "./comments/sagas";

export function* rootSaga() {
  //combine all the saga functions
  yield all([fork(videoSaga), fork(commentsSaga)]);
}