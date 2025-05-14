import { IMark } from '../../../../AddMarkForm/AddMarkForm';
import * as S from './ModalCard.styles';
import * as C from '../../../../../styles/components';
import IconButton from '../../../../IconButtons/IconButton';
import { EType } from '../../../../IconButtons/IconButton.types';
import API from '../../../../../API/api';

interface IProps {
  mark: IMark;
  cardId: number;
  fetchMarks: () => Promise<void>;
  fetchAvailableMarks: () => Promise<void>;
}

export default function ModalCardMark({
  mark,
  cardId,
  fetchMarks,
  fetchAvailableMarks,
}: IProps) {
  const deleteMark = async () => {
    try {
      await API.delete(`marks/attached/${mark.id}/${cardId}`);
      await fetchMarks();
      await fetchAvailableMarks();
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <S.MarkBadge $bgColor={mark.bgColor}>
      <C.Text
        $size={10}
        $weight={700}
        $color={mark.titleColor}
      >
        {mark.title}
      </C.Text>
      <S.Settings>
        <IconButton
          onActionDoNext={deleteMark}
          $size={15}
          buttonType={EType.delete}
        />
      </S.Settings>
    </S.MarkBadge>
  );
}
