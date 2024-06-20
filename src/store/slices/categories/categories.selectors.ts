
import { RootState } from '../..';
import ESliceNames from '../../store.types';

export const categoriesSelector = (state: RootState) => state[ESliceNames.CATEGORIES_SLICE_NAME].categories;