import * as S from './Board.styles';
import { ICategory } from '../Category/Category.types';
import Category from '../Category/Category';

interface IProps {
  categories: Array<ICategory>;
}

export default function CategoryList({ categories }: IProps) {
  return (
    <S.BoardContainer>
      {categories.length !== 0 &&
        categories.map((category) => (
          <Category
            key={category.id}
            category={category}
          />
        ))}
    </S.BoardContainer>
  );
}
