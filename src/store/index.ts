/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AnyAction,
  combineReducers,
  configureStore,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import ESliceNames from './store.types';
import { useDispatch } from 'react-redux';
import boardsReducer from './slices/categories/boards.slice';
import { listenerMiddleware } from './middleware';

const rootReducer = combineReducers({
  [ESliceNames.BOARDS_SLICE_NAME]: boardsReducer,
});

const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([listenerMiddleware.middleware]),
  });

const store = setupStore();

export default store;

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = () => useDispatch<AppDispatch>();

export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
