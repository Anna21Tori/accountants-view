import axios, { AxiosResponse } from "axios";
import { select } from 'redux-saga/effects'; 
import { put, takeLatest } from "redux-saga/effects";
import { loadAccountantsErrorAction, loadAccountantsSuccessAction } from "./accountants.reducer";
import { selectInfo } from "./accountants.selector";
import { AccountantResponseType } from "../../interfaces/interfaces";

// Generator function
function* loadAccountantsSaga(): any{
  try {
    const info = yield select(selectInfo);
    const url = `https://randomuser.me/api/?page=${info.page}&results=${info.results}`;

    const response: AxiosResponse<Omit<AccountantResponseType, "isLoading" | "errors">> = yield axios.get(url);

    yield put(loadAccountantsSuccessAction(response.data));
  } catch (error) {
    yield put(loadAccountantsErrorAction());
  }
}

// Generator function
export function* watchLoadAccountants() {
  yield takeLatest('accountants/loadAccountantsAction',loadAccountantsSaga);
}