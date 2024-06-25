import { RootState } from '../..';
import ESliceNames from '../../store.types';

export const categoriesSelector = (state: RootState) =>
  state[ESliceNames.CATEGORIES_SLICE_NAME].categories;
export const maxCardIdCategoriesSelector = (state: RootState) =>
  state[ESliceNames.CATEGORIES_SLICE_NAME].maxCardId;
export const maxCategoryIdCategoriesSelector = (state: RootState) =>
  state[ESliceNames.CATEGORIES_SLICE_NAME].maxCategoryId;
