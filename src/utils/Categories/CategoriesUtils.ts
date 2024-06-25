import { ICategory } from '../../components/Category/Category.types';

class CategoriesUtils {
  public static findMaxCardId(board: Array<ICategory>): number {
    return Math.max(
      ...board.map((el) => Math.max(...el.cards.map((card) => card.id))),
    );
  }
  public static findMaxCategoryId(board: Array<ICategory>) : number {
    return Math.max(...board.map((el) => el.id));
  }
}

export default CategoriesUtils;
