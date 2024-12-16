import IBoard from '../../../components/Board/Board.types';

export interface IStorageCategories {
  boards: Array<IBoard>;
}

export const storageCategoriesDefaultState: IStorageCategories = {
  boards: [],
};
