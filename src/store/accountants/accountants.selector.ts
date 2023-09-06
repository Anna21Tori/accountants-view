import { createSelector } from 'reselect';
import { RootState } from '../store';

const selectAccountantsReducer = (state: RootState) => state.accountants.results;
const selectIsLoadingReducer = (state: RootState) => state.accountants.isLoading;
const selectInfoResultsReducer = (state: RootState) => state.accountants.info.results;

export const selectInfo = (state: RootState) => state.accountants.info;

export const selectAccountants = createSelector(
  [selectAccountantsReducer],
  (accountantsSlice) => accountantsSlice
);

export const selectIsLoading = createSelector(
  [selectIsLoadingReducer],
  (accountantsSlice) => accountantsSlice
);

export const selectInfoResults = createSelector(
  [selectInfoResultsReducer],
  (accountantsSlice) => accountantsSlice
);