import * as S from './MarksObject.styles';
import * as C from '../../../styles/components';
import { IMark } from '../../AddMarkForm/AddMarkForm';
import IconButton from '../../IconButtons/IconButton';
import { EType } from '../../IconButtons/IconButton.types';
import API from '../../../API/api';

interface IProps {
  mark: IMark;
  fetchAllMarks: () => Promise<void>;
}

export default function MarksObject({ mark, fetchAllMarks }: IProps) {
  const deleteMark = async () => {
    try {
      await API.delete(`marks/all/${mark.id}`);
      await fetchAllMarks();
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <S.Mark $bgColor={mark.bgColor}>
      <C.Text
        $size={14}
        $weight={600}
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
    </S.Mark>
  );
}
