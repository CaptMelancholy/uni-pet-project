import BoardCard from '../BoardCard/BoardCard';
import * as S from './BoardsList.styles';
import { useState } from 'react';
import AddBoardForm from '../AddBoardForm/AddBoardForm';
import { EButtonType } from '../../utils/DesignType.types';
import IBoard from '../Board/Board.types';

interface IProps {
  boards: Array<IBoard>
}

export default function BoardsList({ boards } : IProps) {
  const [showAddBoard, setShowAddBoard] = useState<boolean>(false);
  const handleOnOpen = () => {
    setShowAddBoard(true);
  };
  return (
    <S.Container>
      {boards.map((el) => (
        <BoardCard
          board={el}
          key={el.id}
        />
      ))}
      {showAddBoard ? (
        <AddBoardForm setShowAddBoard={setShowAddBoard} />
      ) : (
        <S.AddingButton
          $type={EButtonType.empty}
          onClick={handleOnOpen}
        >
          Add board
        </S.AddingButton>
      )}
    </S.Container>
  );
}
