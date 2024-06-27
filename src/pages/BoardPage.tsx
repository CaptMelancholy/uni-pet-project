import { useSelector } from 'react-redux';
import Board from '../components/Board/Board';
import Template from '../components/Template/Template';
import { getBoardById } from '../store/slices/categories/boards.selectors';
import { useParams } from 'react-router-dom';
import { Text } from '../styles/components';

export default function BoardPage() {
  const { id } = useParams();
  const board = useSelector(getBoardById(parseInt(id!)));
  return (
    <Template title={board ? board.title : 'Error'}>
      {board ? <Board board={board} /> : <Text $size={24} $weight={700}>Something went wrong. Error</Text> }
    </Template>
  );
}
