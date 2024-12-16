import API from '../../API/api';
import IBoard from '../../components/Board/Board.types';
import { ICard, ICardDTO } from '../../components/Card/Card.types';
import { ICategory } from '../../components/Category/Category.types';
import {
  popBoard,
  popCard,
  popCategory,
  pushBoard,
  pushCard,
  pushCategory,
  putBoard,
  putCard,
  putCategory,
  setBoards,
} from '../slices/categories/boards.slice';
import { RootState } from './../index';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const createBoard = createAsyncThunk<void, { board: IBoard }>(
  'boards/post',
  async ({ board }, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await API.post('boards', board);

      dispatch(pushBoard(data.board));
    } catch (e) {
      rejectWithValue(e);
    }
  },
);

export const readBoards = createAsyncThunk<void, void, { state: RootState }>(
  'boards/get',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await API.get('boards');

      dispatch(setBoards(data));
    } catch (e) {
      rejectWithValue(e);
    }
  },
);

export const updateBoard = createAsyncThunk<void, { board: IBoard }>(
  'boards/put',
  async ({ board }, { dispatch, rejectWithValue }) => {
    try {
      await API.put(`boards/${board.id}`, board);
      dispatch(putBoard(board));
    } catch (e) {
      rejectWithValue(e);
    }
  },
);

export const deleteBoard = createAsyncThunk<void, { board: IBoard }>(
  'boards/put',
  async ({ board }, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await API.delete(`boards/${board.id}`);
      dispatch(popBoard(parseInt(data.deletedId)));
    } catch (e) {
      rejectWithValue(e);
    }
  },
);

export const createCategory = createAsyncThunk<void, { category: ICategory }>(
  'categories/post',
  async ({ category }, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await API.post('categories', category);

      dispatch(pushCategory(data.category));
    } catch (e) {
      rejectWithValue(e);
    }
  },
);

export const updateCategory = createAsyncThunk<void, { category: ICategory }>(
  'categories/put',
  async ({ category }, { dispatch, rejectWithValue }) => {
    try {
      await API.put(`categories/${category.id}`, category);
      dispatch(putCategory(category));
    } catch (e) {
      rejectWithValue(e);
    }
  },
);

export const deleteCategory = createAsyncThunk<void, { category: ICategory }>(
  'categories/delete',
  async ({ category }, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await API.delete(`categories/${category.id}`);
      dispatch(popCategory(parseInt(data.deletedId)));
    } catch (e) {
      rejectWithValue(e);
    }
  },
);

export const createCard = createAsyncThunk<void, { card: ICardDTO }>(
  'cards/post',
  async ({ card }, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await API.post('cards', card);
      dispatch(pushCard(data.card));
    } catch (e) {
      rejectWithValue(e);
    }
  },
);

export const updateCard = createAsyncThunk<void, { card: ICardDTO }>(
  'cards/put',
  async ({ card }, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await API.put(`cards/${card.id}`, card);
      dispatch(putCard(data.card));
    } catch (e) {
      rejectWithValue(e);
    }
  },
);

export const deleteCard = createAsyncThunk<void, { card: ICard }>(
  'cards/delete',
  async ({ card }, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await API.delete(`cards/${card.id}`);
      dispatch(popCard(parseInt(data.deletedId)));
    } catch (e) {
      rejectWithValue(e);
    }
  },
);
