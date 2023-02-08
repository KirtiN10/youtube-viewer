import { all, fork } from "redux-saga/effects";

import videoSaga from "./videos/sagas";
import commentsSaga from "./comments/sagas";

export function* rootSaga() {
  yield all([fork(videoSaga), fork(commentsSaga)]);
}