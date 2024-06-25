import * as S from './Board.styles';
import { ICategory } from '../Category/Category.types';
import Category from '../Category/Category';
import * as C from '../../styles/components';
import { useState } from 'react';
import AddCategoryForm from '../AddCategoryForm/AddCategoryForm';

interface IProps {
  categories: Array<ICategory>;
}

export default function Board({ categories }: IProps) {
  const [showAddCategory, setShowAddCategory] = useState<boolean>(false);

  const handleAddClick = () => {
    setShowAddCategory(true);
  };

  return (
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
  );
}
