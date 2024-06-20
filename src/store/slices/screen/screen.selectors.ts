import { RootState } from '../..';
import ESliceNames from '../../store.types';

export const screenShowSelector = (state : RootState) => state[ESliceNames.BACKGROUND_SCREEN_SLICE_NAME].show;