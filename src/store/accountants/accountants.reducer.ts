import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AccountantResponseType, AccountantType } from '../../types/types';

export const ACCOUNTANTS_INITIAL_STATE: AccountantResponseType = {
    results: [],
    info: {
        page: 1,
        results: 4,
    },
    isLoading: false,
    error: {} as Error
}

export const accountantsSlice = createSlice({
  name: 'accountants',
  initialState: ACCOUNTANTS_INITIAL_STATE,
  reducers: {
    loadAccountantsAction: (state: AccountantResponseType) => {
        state.isLoading = true;
        state.error = {} as Error
        state.info = {results: state.info.results, page: state.info.page + 1}
      },
    loadAccountantsSuccessAction: (state: AccountantResponseType, {payload}: PayloadAction<AccountantType[]>) => {
        state.isLoading = false;
        state.results.push(...payload);
      },
    loadAccountantsErrorAction: (state: AccountantResponseType, {payload}: PayloadAction<Error>) => {
        state.isLoading = false;
        state.error = payload;
      },
  },
});

export const { loadAccountantsAction, loadAccountantsErrorAction, loadAccountantsSuccessAction } = accountantsSlice.actions;

export const accountantsReducer = accountantsSlice.reducer;