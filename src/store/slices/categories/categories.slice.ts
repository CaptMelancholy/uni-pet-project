import { ICard } from './../../../components/Card/Card.types';
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
      state.categories = state.categories.map((el) => {
        if (el.id === action.payload.parentId) {
          el.cards.push(action.payload.card);
        }
        return el;
      });
      state.maxCardId = CategoriesUtils.findMaxCardId(state.categories);
    },
    popCard: (state, action: { payload: ICard }) => {
      state.categories = state.categories.map((el) => {
        if (el.id === action.payload.parent_id) {
          el.cards = el.cards.filter((item) => item.id !== action.payload.id);
        }
        return el;
      });
    },
    updateCard: (state, action: { payload: ICard }) => {
      state.categories = state.categories.map((el) => {
        if (el.id === action.payload.parent_id) {
          el.cards = el.cards.map((card) =>
            card.id === action.payload.id ? action.payload : card,
          );
        }
        return el;
      });
    },
    pushNewCategory: (state, action: { payload: ICategory }) => {
      state.categories.push(action.payload);
      state.maxCategoryId = CategoriesUtils.findMaxCategoryId(state.categories);
    },
    popCategory: (state, action: { payload: ICategory }) => {
      state.categories = state.categories.filter(
        (item) => item.id !== action.payload.id,
      );
    },
    updateCategory: (state, action: { payload: ICategory }) => {
      state.categories = state.categories.map((el) =>
        el.id === action.payload.id ? action.payload : el,
      );
    },
  },
});

export const {
  pushNewCard,
  pushNewCategory,
  updateCategory,
  popCard,
  popCategory,
  updateCard,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
