import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ESliceNames from './store.types';
import { useDispatch } from 'react-redux';
import categoriesReducer from './slices/categories/categories.slice'



const rootReducer = combineReducers({
    [ESliceNames.CATEGORIES_SLICE_NAME]: categoriesReducer,
});

const setupStore = () => configureStore({
    reducer: rootReducer,
});

const store = setupStore();

export default store;

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = () => useDispatch<AppDispatch>();