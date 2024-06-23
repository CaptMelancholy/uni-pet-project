import { ICategory } from './../../../components/Category/Category.types';
import { createSlice } from '@reduxjs/toolkit';
import ESliceNames from '../../store.types';
import { INewCard, storageCategoriesDefaultState } from './categories.types';
import CategoriesUtils from '../../../utils/Categories/CategoriesUtils';

const categoriesSlice = createSlice({
  name: ESliceNames.CATEGORIES_SLICE_NAME,
  initialState: storageCategoriesDefaultState,
  reducers: {
    pushNewCard: (state, action: { payload: INewCard }) => {
      state.categories[action.payload.parentId].cards.push(action.payload.card);
      state.maxCardId = CategoriesUtils.findMaxCardId(state.categories);
    },
    pushNewCategory: (state, action: { payload: ICategory }) => {
      state.categories.push(action.payload);
    }
  },
});

export const { pushNewCard, pushNewCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
