import axios, { AxiosResponse } from "axios";
import { select } from 'redux-saga/effects'; 
import { put, takeLatest } from "redux-saga/effects";
import { loadAccountantsErrorAction, loadAccountantsSuccessAction } from "./accountants.reducer";
import { selectInfo } from "./accountants.selector";
import { AccountantResponseType } from "../../types/types";

// Generator function
function* loadAccountantsSaga() {
  try {

    const info: {page: number, results: number} = yield select(selectInfo);

    const url = `https://randomuser.me/api/?page=${info.page}&results=${info.results}&gender=female`;

    const response: AxiosResponse<Omit<AccountantResponseType, "isLoading" | "errors">> = yield axios.get(url, {headers:  {"Content-Type": "application/json"}});

    yield put(loadAccountantsSuccessAction(response.data.results));

  } catch (error) {
    yield put(loadAccountantsErrorAction(error as Error));
  }
}

// Generator function
export function* watchLoadAccountants() {
  yield takeLatest('accountants/loadAccountantsAction',loadAccountantsSaga);
}