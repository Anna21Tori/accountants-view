import { all, fork } from "redux-saga/effects";
import { watchLoadAccountants } from "./accountants/accountants.saga";

const rootSaga = function* () {
  yield all([
    fork(watchLoadAccountants),
    // Other forks
  ]);
};

export default rootSaga;