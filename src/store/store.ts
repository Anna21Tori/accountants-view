import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './root-reducer';
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from './root-sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({serializableCheck: false}).concat(sagaMiddleware),
  });

sagaMiddleware.run(rootSaga);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
