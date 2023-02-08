import { all, fork } from "redux-saga/effects";

import videoSaga from "./videos/sagas";

export function* rootSaga() {
  yield all([fork(videoSaga)]);
}