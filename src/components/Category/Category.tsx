import { useState } from 'react';
import Card from '../Card/Card';
import * as S from './Category.styles';
import { ICategory } from './Category.types';
import AddCardForm from '../AddCardForm/AddCardForm';

interface IProps {
  category: ICategory;
}

export default function Category({ category }: IProps) {
  const [showAddCard, setShowAddCard] = useState<boolean>(false);

  const handleAddClick = () => {
    setShowAddCard(true);
  }

  return (
    <S.CategoryContainer>
      <S.CategoryTitle>{category.title}</S.CategoryTitle>
      <S.CardsList data-testid='cards-list'>
        {category.cards.length !== 0 &&
          category.cards.map((card) => (
            <Card
              key={card.id}
              card={card}
            />
          ))}
      </S.CardsList>
      {showAddCard ? (
        <AddCardForm categoryId={category.id} setShowAddingCard={setShowAddCard} />
      ) : (
        <S.AddCardButton onClick={handleAddClick}>Add card</S.AddCardButton>
      )}
    </S.CategoryContainer>
  );
}
