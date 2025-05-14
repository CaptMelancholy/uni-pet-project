/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ICategory,
} from '../../../components/Category/Category.types';
import { createSlice } from '@reduxjs/toolkit';
import ESliceNames from '../../store.types';
import { storageCategoriesDefaultState } from './boards.types';
import IBoard from '../../../components/Board/Board.types';
import { ICard } from '../../../components/Card/Card.types';

const categoriesSlice = createSlice({
  name: ESliceNames.BOARDS_SLICE_NAME,
  initialState: storageCategoriesDefaultState,
  reducers: {
    setBoards: (state, action: { payload: Array<IBoard> }) => ({
      ...state,
      boards: action.payload,
    }),
    pushBoard: (state, action: { payload: IBoard }) => {
      state.boards.push(action.payload);
    },
    popBoard: (state, action: { payload: number }) => ({
      ...state,
      boards: state.boards.filter(({ id }) => id !== action.payload),
    }),
    putBoard: (state, action: { payload: IBoard }) => {
      state.boards = state.boards.map((board) =>
        board.id === action.payload.id ? action.payload : board,
      );
    },

    pushCategory: (state, action: { payload: ICategory }) => {
      state.boards = state.boards.map((board) => {
        if (board.id === action.payload.boardId) {
          board.categories.push(action.payload);
        }
        return board;
      });
    },
    popCategory: (state, action: { payload: number }) => {
      state.boards = state.boards.map((board) => {
        board.categories = board.categories.filter(
          (category) => category.id !== action.payload,
        );
        return board;
      });
    },
    putCategory: (state, action: { payload: ICategory }) => {
      state.boards = state.boards.map((board) => {
        if (board.id === action.payload.boardId) {
          board.categories = board.categories.map((category) => {
            if (category.id === action.payload.id) {
              return { ...category, ...action.payload };
            }
            return category;
          });
        }
        return board;
      });
    },
    pushCard: (state, action: { payload: ICard }) => {
      state.boards = state.boards.map((board) => {
        if (board.id === action.payload.boardId) {
          board.categories = board.categories.map((category) => {
            if (category.id === action.payload.categoryId) {
              category.cards.push(action.payload);
            }
            return category;
          });
        }
        return board;
      });
    },
    popCard: (state, action: { payload: number }) => {
      state.boards = state.boards.map((board) => {
        board.categories = board.categories.map((category) => {
          category.cards = category.cards.filter(
            (card) => card.id !== action.payload,
          );
          return category;
        });
        return board;
      });
    },
    putCard: (state, action: { payload: ICard }) => {
      const { id, boardId, categoryId, ...updatedCardData } = action.payload;
    
      // Обновляем карточку
      state.boards = state.boards.map((board) => {
        if (board.id === boardId) {
          let movedCard : ICard | undefined = undefined; // Для хранения перемещаемой карточки
    
          board.categories = board.categories.map((category) => {
            // Проверяем, находится ли карточка в текущей категории
            if (category.cards.some((card) => card.id === id)) {
              // Если categoryId изменился, удаляем карточку из текущей категории
              if (category.id !== categoryId) {
                movedCard = category.cards.find((card) => card.id === id);
                category.cards = category.cards.filter((card) => card.id !== id);
              } else {
                // Если categoryId не изменился, обновляем карточку
                category.cards = category.cards.map((card) =>
                  card.id === id ? { ...card, ...updatedCardData } : card
                );
              }
            }
            return category;
          });
    
          if (movedCard !== undefined) {
            board.categories = board.categories.map((category) => {
              if (category.id === categoryId) {
                category.cards.push(action.payload);
              }
              return category;
            });
          }
        }
        return board;
      });
    },
    putAllCards: (state, action: { payload: Array<ICard> }) => {
      const boardId = action.payload[0].boardId;
      const updatedCards = action.payload;
      const board = state.boards.find((b) => b.id === boardId);
      if(!board) return;

      const cardsByCategory: Record<number, ICard[]> = {};
      updatedCards.forEach((card) => {
        if (!cardsByCategory[card.categoryId]) {
          cardsByCategory[card.categoryId] = [];
        }
        cardsByCategory[card.categoryId].push(card);
      });

      board.categories.forEach((category) => {
        if (cardsByCategory[category.id]) {
          category.cards = cardsByCategory[category.id].sort((a, b) => a.order - b.order);
        }
      });
    },
  },
});

export const {
  setBoards,
  pushBoard,
  popBoard,
  putBoard,
  pushCard,
  pushCategory,
  putCategory,
  popCard,
  popCategory,
  putCard,
  putAllCards
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
