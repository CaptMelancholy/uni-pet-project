import * as S from './Board.styles';
import { ICategory } from '../Category/Category.types';
import Category from '../Category/Category';
import * as C from '../../styles/components';
import { useState } from 'react';
import AddCategoryForm from '../AddCategoryForm/AddCategoryForm';
import { DragDropContext, DragUpdate } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { boardsSelector } from '../../store/slices/categories/boards.selectors';
import { updateCategory } from '../../store/slices/categories/boards.slice';
import IBoard from './Board.types';

interface IProps {
  board: IBoard;
}

export default function Board({ board }: IProps) {
  const [showAddCategory, setShowAddCategory] = useState<boolean>(false);
  const boards = useSelector(boardsSelector);
  const dispatch = useDispatch();
  const handleAddClick = () => {
    setShowAddCategory(true);
  };

  const onDragEnd = (result: DragUpdate) => {
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
          cards.splice(destinationIndex, 0, removedItem);
          const newCategory: ICategory = {
            id: destinationCategory.id,
            spaceId: destinationCategory.spaceId,
            cards: cards,
            title: destinationCategory.title,
          };
          dispatch(updateCategory(newCategory));
        }
      } else if (
        sourceCategory !== undefined &&
        destinationCategory !== undefined
      ) {
        const sourceCards = [...sourceCategory.cards];
        const destinationCards = [...destinationCategory.cards];

        const [removedItem] = sourceCards.splice(sourceIndex, 1);
        destinationCards.splice(destinationIndex, 0, removedItem);

        const oldCategory: ICategory = {
          id: sourceCategory.id,
          spaceId: sourceCategory.spaceId,
          cards: sourceCards,
          title: sourceCategory.title,
        };

        const updatedCategory: ICategory = {
          id: destinationCategory.id,
          spaceId: destinationCategory.spaceId,
          cards: destinationCards,
          title: destinationCategory.title,
        };

        dispatch(updateCategory(updatedCategory));
        dispatch(updateCategory(oldCategory));
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
          <C.Button onClick={handleAddClick}>Add category</C.Button>
        )}
      </S.BoardContainer>
    </DragDropContext>
  );
}
