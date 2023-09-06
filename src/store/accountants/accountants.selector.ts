import { createSelector } from 'reselect';
import { RootState } from '../store';

const selectAccountantsReducer = (state: RootState) => state.accountants.results;

export const selectInfo = (state: RootState) => state.accountants.info;

export const selectAccountants = createSelector(
  [selectAccountantsReducer],
  (accountantsSlice) => accountantsSlice
);
