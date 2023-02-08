import { all, fork } from "redux-saga/effects";

import videoSaga from "./video/sagas";

export function* rootSaga() {
  yield all([fork(videoSaga)]);
}