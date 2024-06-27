import { SpaceData } from '../../../temp/data';
import SpaceUtils from '../../../utils/Categories/SpaceUtils';
import IBoard from '../../../components/Board/Board.types';

export interface IStorageCategories {
  boards: Array<IBoard>;
  maxCardId: number;
  maxCategoryId: number;
  maxBoardId: number;
}

export const storageCategoriesDefaultState: IStorageCategories = {
  boards: SpaceData,
  maxCardId: SpaceUtils.findMaxCardId(SpaceData),
  maxCategoryId: SpaceUtils.findMaxCategoryId(SpaceData),
  maxBoardId: SpaceUtils.findMaxSpaceId(SpaceData),
};
