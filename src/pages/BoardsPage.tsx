/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux';
import BoardsList from '../components/BoardsList/BoardsList';
import Template from '../components/Template/Template';
import { boardsSelector } from '../store/slices/categories/boards.selectors';
import { AppDispatch } from '../store';
import { useAuth } from '../context/AuthHooks';
import { useEffect } from 'react';
import { readBoards } from '../store/thunks/boards.thunk';

export default function BoardsPage() {
  const boards = useSelector(boardsSelector);
  const dispatch = useDispatch<AppDispatch>();
  const { isAuth } = useAuth();

  useEffect(() => {
    const setBoard = async () => {
      dispatch(readBoards());
    }
    setBoard();
  }, [boards.length])
  
  useEffect(() => {
    const setBoard = async () => {
      dispatch(readBoards());
    }
    setBoard();
  }, [isAuth])

  return (
    <Template title='Boards'>
      <BoardsList boards={boards} />
    </Template>
  );
}
