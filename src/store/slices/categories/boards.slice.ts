import { ICategory } from '../../../components/Category/Category.types';
import { createSlice } from '@reduxjs/toolkit';
import ESliceNames from '../../store.types';
import { storageCategoriesDefaultState } from './boards.types';
import SpaceUtils from '../../../utils/Categories/SpaceUtils';
import IBoard from '../../../components/Board/Board.types';
import { ICard } from '../../../components/Card/Card.types';

const categoriesSlice = createSlice({
  name: ESliceNames.BOARDS_SLICE_NAME,
  initialState: storageCategoriesDefaultState,
  reducers: {
    pushNewSpace: (state, action: { payload: IBoard }) => {
      state.boards.push(action.payload);
      state.maxBoardId = SpaceUtils.findMaxSpaceId(state.boards);
    },
    popSpace: (state, action: { payload: IBoard }) => {
      state.boards = state.boards.filter(
        (space) => space.id !== action.payload.id,
      );
      state.maxBoardId = SpaceUtils.findMaxSpaceId(state.boards);
    },
    updateSpace: (state, action: { payload: IBoard }) => {
      state.boards = state.boards.map((space) =>
        space.id === action.payload.id ? action.payload : space,
      );
    },

    pushNewCategory: (state, action: { payload: ICategory }) => {
      state.boards = state.boards.map((space) => {
        if (space.id === action.payload.spaceId)
          space.categories.push(action.payload);
        return space;
      });
      state.maxCategoryId = SpaceUtils.findMaxCategoryId(state.boards);
    },
    popCategory: (state, action: { payload: ICategory }) => {
      state.boards = state.boards.map((space) => {
        if (space.id === action.payload.spaceId) {
          space.categories = space.categories.filter(
            (category) => category.id !== action.payload.id,
          );
        }
        return space;
      });
    },
    updateCategory: (state, action: { payload: ICategory }) => {
      state.boards = state.boards.map((space) => {
        if (space.id === action.payload.spaceId) {
          space.categories = space.categories.map((category) =>
            category.id === action.payload.id ? action.payload : category,
          );
        }
        return space;
      });
    },

    pushNewCard: (state, action: { payload: ICard }) => {
      state.boards = state.boards.map((space) => {
        if (space.id === action.payload.spaceId) {
          space.categories = space.categories.map((category) => {
            if (category.id === action.payload.categoryId) {
              category.cards.push(action.payload);
            }
            return category;
          });
        }
        return space;
      });
      state.maxCardId = SpaceUtils.findMaxCardId(state.boards);
    },

    popCard: (state, action: { payload: ICard }) => {
      state.boards = state.boards.map((space) => {
        if (space.id === action.payload.spaceId) {
          space.categories = space.categories.map((category) => {
            if (category.id === action.payload.categoryId) {
              category.cards = category.cards.filter(
                (card) => card.id !== action.payload.id,
              );
            }
            return category;
          });
        }
        return space;
      });
    },
    updateCard: (state, action: { payload: ICard }) => {
      state.boards = state.boards.map((space) => {
        if (space.id === action.payload.spaceId) {
          space.categories = space.categories.map((category) => {
            if (category.id === action.payload.categoryId) {
              category.cards = category.cards.map((card) =>
                card.id === action.payload.id ? action.payload : card,
              );
            }
            return category;
          });
        }
        return space;
      });
    },
  },
});

export const {
  pushNewSpace,
  popSpace,
  updateSpace,
  pushNewCard,
  pushNewCategory,
  updateCategory,
  popCard,
  popCategory,
  updateCard,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
