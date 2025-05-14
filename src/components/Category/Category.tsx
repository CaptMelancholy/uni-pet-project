/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import * as S from './Category.styles';
import { ICategory } from './Category.types';
import AddCardForm from '../AddCardForm/AddCardForm';
import IconButton from '../IconButtons/IconButton';
import { EType } from '../IconButtons/IconButton.types';
import { useDispatch } from 'react-redux';
import ModalCategory from '../Modal/ModalCategory/ModalCategory';
import { Droppable } from 'react-beautiful-dnd';
import { useScreenBlock } from '../../context/ScreenHooks';
import { EButtonType } from '../../utils/DesignType.types';
import { deleteCategory, readBoards } from '../../store/thunks/boards.thunk';
import { AppDispatch } from '../../store';
import { useAuth } from '../../context/AuthHooks';

interface IProps {
  category: ICategory;
}

export default function Category({ category }: IProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [showModal, setShowModal] = useState(false);
  const [showAddCard, setShowAddCard] = useState<boolean>(false);
  const { setScreen } = useScreenBlock();
  const { isAuth } = useAuth();
  const handleAddClick = () => {
    setShowAddCard(true);
  };

  const handleOnDelete = () => {
    const deleteThisCategory = async() => {
      dispatch(deleteCategory({ category }));
    }
    deleteThisCategory();
  };

  const handleEditClick = () => {
    setShowModal(true);
    setScreen(true);
    document.body.style.overflow = 'hidden';
  };

  useEffect(() => {
      const setBoard = async () => {
        dispatch(readBoards());
      };
      setBoard();
    }, [category.cards.length]);
  
    useEffect(() => {
      const setBoard = async () => {
        dispatch(readBoards());
      };
      setBoard();
    }, [isAuth]);

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
                  [...category.cards].sort((a, b) => a.order > b.order ? 1 : -1).map((card) => (
                    <Card
                      key={card.id.toString()}
                      card={card}
                      index={card.order}
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
            spaceId={category.boardId}
            setShowAddingCard={setShowAddCard}
          />
        ) : (
          <S.AddCardButton
            $type={EButtonType.dashed}
            onClick={handleAddClick}
          >
            Add card
          </S.AddCardButton>
        )}
      </S.CategoryContainer>
    </>
  );
}
