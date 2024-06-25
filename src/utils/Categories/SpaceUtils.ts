import IBoard from '../../components/Board/Board.types';

class SpaceUtils {
  public static findMaxCardId(space: Array<IBoard>): number {
    return Math.max(
      ...space.map((el) =>
        Math.max(
          ...el.categories.map((category) =>
            Math.max(...category.cards.map((card) => card.id)),
          ),
        ),
      ),
    );
  }
  public static findMaxCategoryId(space: Array<IBoard>): number {
    return Math.max(
      ...space.map((el) =>
        Math.max(...el.categories.map((category) => category.id)),
      ),
    );
  }
  public static findMaxSpaceId(space: Array<IBoard>): number {
    return Math.max(...space.map((el) => el.id));
  }
}

export default SpaceUtils;
