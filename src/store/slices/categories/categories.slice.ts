import { createSlice } from '@reduxjs/toolkit';
import ESliceNames from '../../store.types';
import { storageCategoriesDefaultState } from './categories.types';

const categoriesSlice = createSlice({
    name: ESliceNames.CATEGORIES_SLICE_NAME,
    initialState: storageCategoriesDefaultState,
    reducers: {

    }
})

export default categoriesSlice.reducer