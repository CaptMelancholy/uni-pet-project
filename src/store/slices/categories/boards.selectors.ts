import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../..';
import ESliceNames from '../../store.types';

export const boardsSelector = (state: RootState) =>
  state[ESliceNames.BOARDS_SLICE_NAME].boards;
export const maxCardIdBoardsSelector = (state: RootState) =>
  state[ESliceNames.BOARDS_SLICE_NAME].maxCardId;
export const maxCategoryIdBoardsSelector = (state: RootState) =>
  state[ESliceNames.BOARDS_SLICE_NAME].maxCategoryId;
export const maxBoardIdBoardsSelector = (state: RootState) =>
  state[ESliceNames.BOARDS_SLICE_NAME].maxBoardId;
export const getBoardById = (boardId : number) =>
  createSelector(boardsSelector, (state) =>
    state.find((el) => el.id === boardId),
  );
