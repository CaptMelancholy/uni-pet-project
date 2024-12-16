import * as S from './Board.styles';
import Category from '../Category/Category';
import { useState } from 'react';
import AddCategoryForm from '../AddCategoryForm/AddCategoryForm';
import { DragDropContext, DragUpdate } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { boardsSelector } from '../../store/slices/categories/boards.selectors';
import IBoard from './Board.types';
import { EButtonType } from '../../utils/DesignType.types';
import { ICard, ICardDTO } from '../Card/Card.types';
import { AppDispatch } from '../../store';
import { updateCard } from '../../store/thunks/boards.thunk';

interface IProps {
  board: IBoard;
}

export default function Board({ board }: IProps) {
  const [showAddCategory, setShowAddCategory] = useState<boolean>(false);
  const boards = useSelector(boardsSelector);
  const dispatch = useDispatch<AppDispatch>();
  const handleAddClick = () => {
    setShowAddCategory(true);
  };

  const onDragEnd = (result: DragUpdate) => {
    const updateThisCard = async (newCard : ICard) => {
      const dto : ICardDTO = {
        id: newCard.id,
        categoryId: newCard.categoryId,
        boardId: newCard.boardId,
        title: newCard.title,
        deadline_date: newCard.deadlineInfo?.deadline_date,
        deadline_time: newCard.deadlineInfo?.deadline_time,
        status: newCard.deadlineInfo?.status,
        priority: newCard.priority,
        desc: newCard.desc,
      }
      dispatch(updateCard({ card: dto }));
    } 
    const { destination, source, type } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const currentBoard = [...boards].find((el) => el.id === board.id);

    if (type === 'category' && currentBoard !== undefined) {
      const categoryList = currentBoard.categories;
      const sourceCategory = categoryList.find(
        (el) => el.id === parseInt(source.droppableId),
      );
      const destinationCategory = categoryList.find(
        (el) => el.id === parseInt(destination.droppableId),
      );
      const sourceIndex = source.index;
      const destinationIndex = destination.index;
      if (destination.droppableId === source.droppableId) {
        if (destinationCategory !== undefined) {
          const cards = [...destinationCategory.cards];
          const [removedItem] = cards.splice(sourceIndex, 1);
          const newCard: ICard = {
            ...removedItem,
            categoryId: parseInt(destination.droppableId),
          };
          cards.splice(destinationIndex, 0, newCard);
          updateThisCard(newCard);
        }
      } else if (
        sourceCategory !== undefined &&
        destinationCategory !== undefined
      ) {
        const sourceCards = [...sourceCategory.cards];
        const destinationCards = [...destinationCategory.cards];

        const [removedItem] = sourceCards.splice(sourceIndex, 1);
        const newCard: ICard = {
          ...removedItem,
          categoryId: parseInt(destination.droppableId),
        };
        destinationCards.splice(destinationIndex, 0, removedItem);



        updateThisCard(newCard);
      }
    }
    return;
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <S.BoardContainer data-testid='board'>
        {board.categories.length !== 0 &&
          board.categories.map((category) => (
            <Category
              key={category.id}
              category={category}
            />
          ))}
        {showAddCategory ? (
          <AddCategoryForm
            setShowAddCategory={setShowAddCategory}
            spaceId={board.id}
          />
        ) : (
          <S.ButtonOnField
            $type={EButtonType.empty}
            onClick={handleAddClick}
          >
            Add category
          </S.ButtonOnField>
        )}
      </S.BoardContainer>
    </DragDropContext>
  );
}
