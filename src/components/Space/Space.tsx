import { useSelector } from 'react-redux';
import BoardCard from '../SpaceCard/BoardCard';
import * as S from './Space.styles';
import { boardsSelector } from '../../store/slices/categories/boards.selectors';
import { useState } from 'react';
import AddBoardForm from '../AddBoardForm/AddBoardForm';

export default function Space() {
  const space = useSelector(boardsSelector);
  const [showAddBoard, setShowAddBoard] = useState<boolean>(false);
  const handleOnOpen = () => {
    setShowAddBoard(true);
  }
  return (
    <S.SpaceContainer>
      {
        space.map(el => <BoardCard board={el} key={el.id} />)
      }
      {
        showAddBoard ? <AddBoardForm setShowAddBoard={setShowAddBoard} /> : <S.AddingButton onClick={handleOnOpen}>Add board</S.AddingButton>
      }
    </S.SpaceContainer>
  );
}
