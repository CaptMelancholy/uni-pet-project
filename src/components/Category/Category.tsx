import { useState } from 'react';
import Card from '../Card/Card';
import * as S from './Category.styles';
import { ICategory } from './Category.types';
import AddCardForm from '../AddCardForm/AddCardForm';
import IconButton from '../IconButtons/IconButton';
import { EType } from '../IconButtons/IconButton.types';
import { useDispatch } from 'react-redux';
import { popCategory } from '../../store/slices/categories/categories.slice';
import ModalCategory from '../Modal/ModalCategory/ModalCategory';
import { setScreenStatus } from '../../store/slices/screen/screen.slice';
import { Droppable } from 'react-beautiful-dnd';

interface IProps {
  category: ICategory;
}

export default function Category({ category }: IProps) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [showAddCard, setShowAddCard] = useState<boolean>(false);

  const handleAddClick = () => {
    setShowAddCard(true);
  };

  const handleOnDelete = () => {
    dispatch(popCategory(category));
  };

  const handleEditClick = () => {
    setShowModal(true);
    dispatch(setScreenStatus(true));
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
      <ModalCategory
        showModal={showModal}
        setShowModal={setShowModal}
        category={category}
      />
      <S.CategoryContainer>
        <S.CategoryNav>
          <S.CategoryTitle>{category.title}</S.CategoryTitle>
          <S.CategoryNavButtons>
            <IconButton
              $size={20}
              buttonType={EType.edit}
              onActionDoNext={handleEditClick}
            />
            <IconButton
              $size={20}
              buttonType={EType.delete}
              onActionDoNext={handleOnDelete}
            />
          </S.CategoryNavButtons>
        </S.CategoryNav>
        <Droppable
          droppableId={category.id.toString()}
          type='category'
        >
          {(provided) => (
            <>
              <S.CardsList
                data-testid='cards-list'
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {category.cards.length !== 0 &&
                  category.cards.map((card, index) => (
                    <Card
                      key={card.id.toString()}
                      card={card}
                      index={index}
                    />
                  ))}
              </S.CardsList>
              {provided.placeholder}
            </>
          )}
        </Droppable>

        {showAddCard ? (
          <AddCardForm
            categoryId={category.id}
            setShowAddingCard={setShowAddCard}
          />
        ) : (
          <S.AddCardButton onClick={handleAddClick}>Add card</S.AddCardButton>
        )}
      </S.CategoryContainer>
    </>
  );
}
