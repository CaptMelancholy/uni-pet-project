import { ICard } from './../../../components/Card/Card.types';
import { ICategory } from '../../../components/Category/Category.types';
import { CategoryData } from '../../../temp/data';
import CategoriesUtils from '../../../utils/Categories/CategoriesUtils';

export interface IStorageCategories {
  categories: Array<ICategory>;
  maxCardId: number;
  maxCategoryId: number;
}

export interface INewCard {
  card: ICard;
  parentId: number;
}

export const storageCategoriesDefaultState: IStorageCategories = {
  categories: CategoryData,
  maxCardId: CategoriesUtils.findMaxCardId(CategoryData),
  maxCategoryId: CategoriesUtils.findMaxCategoryId(CategoryData),
};
