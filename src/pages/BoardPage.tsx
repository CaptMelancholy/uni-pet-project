import { useSelector } from 'react-redux';
import Board from '../components/Board/Board';
import Template from '../components/Template/Template';
import { categoriesSelector } from '../store/slices/categories/categories.selectors';

export default function BoardPage() {
  const categories = useSelector(categoriesSelector);
  return (
    <Template title='HELLO WORLD'>
      <Board categories={categories} />
    </Template>
  );
}
