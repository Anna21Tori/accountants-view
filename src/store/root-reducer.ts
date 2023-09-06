import { combineReducers } from '@reduxjs/toolkit';

import { accountantsReducer } from './accountants/accountants.reducer';

export const rootReducer = combineReducers({
  accountants: accountantsReducer,
});