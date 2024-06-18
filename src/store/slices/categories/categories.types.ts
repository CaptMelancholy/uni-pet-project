import { ICategory } from '../../../components/Category/Category.types';
import { CategoryData } from '../../../temp/data';

export interface IStorageCategories {
    categories: Array<ICategory>;
}

export const storageCategoriesDefaultState : IStorageCategories = {
    categories: CategoryData,
};