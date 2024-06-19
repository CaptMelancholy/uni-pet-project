import Card from '../Card/Card';
import * as S from './Category.styles';
import { ICategory } from './Category.types';

interface IProps {
  category: ICategory;
}

export default function Category({ category }: IProps) {
  return (
      <S.CategoryContainer>
        <S.CategoryTitle>{category.title}</S.CategoryTitle>
        <S.CardsList>
          {category.cards.length !== 0 &&
            category.cards.map((card) => (
              <Card
                key={card.id}
                card={card}
              />
            ))}
        </S.CardsList>
      </S.CategoryContainer>
  );
}
