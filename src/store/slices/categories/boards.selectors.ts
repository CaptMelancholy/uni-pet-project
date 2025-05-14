import { RootState } from '../..';
import ESliceNames from '../../store.types';

export const boardsSelector = (state: RootState) =>
  state[ESliceNames.BOARDS_SLICE_NAME].boards;
