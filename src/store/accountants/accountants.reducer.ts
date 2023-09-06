import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AccountantResponseType } from '../../interfaces/interfaces';

export const ACCOUNTANTS_INITIAL_STATE: AccountantResponseType = {
    results: [],
    info: {
        page: 1,
        results: 4,
    },
    isLoading: false,
    errors: ''
}

export const accountantsSlice = createSlice({
  name: 'accountants',
  initialState: ACCOUNTANTS_INITIAL_STATE,
  reducers: {
    loadAccountantsAction: (state: AccountantResponseType) => {
        state.isLoading = true;
        state.errors = '';
        state.info = {results: state.info.results, page: state.info.page + 1}
      },
    loadAccountantsSuccessAction: (state: AccountantResponseType, {payload}: PayloadAction<Omit<AccountantResponseType, "isLoading" | "errors">>) => {
        state.isLoading = false;
        state.results.push(...payload.results);
        state.info = payload.info;
      },
    loadAccountantsErrorAction: (state: AccountantResponseType) => {
        state.isLoading = false;
        // state.errors = "error";
      },
  },
});

export const { loadAccountantsAction, loadAccountantsErrorAction, loadAccountantsSuccessAction } = accountantsSlice.actions;

export const accountantsReducer = accountantsSlice.reducer;