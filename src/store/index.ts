import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ESliceNames from './store.types';
import { useDispatch } from 'react-redux';
import boardsReducer from './slices/categories/boards.slice';
import screenReducer from './slices/screen/screen.slice';

const rootReducer = combineReducers({
  [ESliceNames.BOARDS_SLICE_NAME]: boardsReducer,
  [ESliceNames.BACKGROUND_SCREEN_SLICE_NAME]: screenReducer,
});

const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

const store = setupStore();

export default store;

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = () => useDispatch<AppDispatch>();
