import * as S from './Board.styles';
import { ICategory } from '../Category/Category.types';
import Category from '../Category/Category';
import * as C from '../../styles/components';
import { useState } from 'react';
import AddCategoryForm from '../AddCategoryForm/AddCategoryForm';
import { DragDropContext, DragUpdate } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesSelector } from '../../store/slices/categories/categories.selectors';
import { updateCategory } from '../../store/slices/categories/categories.slice';

interface IProps {
  categories: Array<ICategory>;
}

export default function Board({ categories }: IProps) {
  const [showAddCategory, setShowAddCategory] = useState<boolean>(false);
  const board = useSelector(categoriesSelector);
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

    if (type === 'category') {
      const categoryList = [...board];
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
          cards: sourceCards,
          title: sourceCategory.title,
        };

        const updatedCategory: ICategory = {
          id: destinationCategory.id,
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
        {categories.length !== 0 &&
          categories.map((category) => (
            <Category
              key={category.id}
              category={category}
            />
          ))}
        {showAddCategory ? (
          <AddCategoryForm setShowAddCategory={setShowAddCategory} />
        ) : (
          <C.Button onClick={handleAddClick}>Add category</C.Button>
        )}
      </S.BoardContainer>
    </DragDropContext>
  );
}
