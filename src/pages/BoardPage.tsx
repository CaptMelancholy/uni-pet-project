/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux';
import Board from '../components/Board/Board';
import Template from '../components/Template/Template';
import { useParams } from 'react-router-dom';
import { Text } from '../styles/components';
import { boardsSelector } from '../store/slices/categories/boards.selectors';
import { AppDispatch } from '../store';
import { useEffect } from 'react';
import { useAuth } from '../context/AuthHooks';
import { readBoards } from '../store/thunks/boards.thunk';
import { PrivateRoute } from '../components/Routes/PrivateRoute';

export default function BoardPage() {
  const { id } = useParams();
  const boards = useSelector(boardsSelector);
  const dispatch = useDispatch<AppDispatch>();
  const board = id ? boards.find((el) => el.id === parseInt(id)) : undefined;
  const { isAuth } = useAuth();

  useEffect(() => {
    const setBoard = async () => {
      dispatch(readBoards());
    };
    setBoard();
  }, [board?.categories.length]);

  useEffect(() => {
    const setBoard = async () => {
      dispatch(readBoards());
    };
    setBoard();
  }, [isAuth]);
  return (
    <PrivateRoute>
      <Template title={board ? board.title : 'Error'}>
      {board ? (
        <Board board={board} />
      ) : (
        <Text
          $size={24}
          $weight={700}
        >
          Something went wrong. Error
        </Text>
      )}
    </Template>
    </PrivateRoute>
  );
}
