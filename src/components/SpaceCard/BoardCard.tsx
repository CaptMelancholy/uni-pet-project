import * as S from './BoardCard.styles';
import * as C from '../../styles/components';
import { FaArrowRightLong } from 'react-icons/fa6';
import IconButton from '../IconButtons/IconButton';
import { EType } from '../IconButtons/IconButton.types';
import IBoard from '../Board/Board.types';
import { generatePath } from 'react-router-dom';
import DefaultRoutes from '../../Routes/Routes';
import { useDispatch } from 'react-redux';
import { popSpace } from '../../store/slices/categories/boards.slice';

interface IProps {
  board: IBoard;
}

export default function BoardCard({ board }: IProps) {
  const dispatch = useDispatch();
  const handleOnDelete = () => {
    dispatch(popSpace(board));
  };
  const handleOnEdit = () => {};
  return (
    <S.BoardCardContainer $color={board.color}>
      <C.Text
        $size={18}
        $weight={700}
        $color='black'
      >
        {board.title}
      </C.Text>
      {board.desc && (
        <C.Text
          $size={14}
          $weight={400}
          $color='grey'
        >
          {board.desc}
        </C.Text>
      )}
      <S.BoardCardNav>
        <S.SettingBoardCardNav>
          <IconButton
            buttonType={EType.edit}
            $size={16}
            onActionDoNext={handleOnEdit}
          />
          <IconButton
            buttonType={EType.delete}
            $size={16}
            onActionDoNext={handleOnDelete}
          />
        </S.SettingBoardCardNav>
        <S.BoardCardNavLink $size={16} to={generatePath(DefaultRoutes.board, {
          id: board.id,
        })}>
          <FaArrowRightLong />
        </S.BoardCardNavLink>
      </S.BoardCardNav>
    </S.BoardCardContainer>
  );
}
