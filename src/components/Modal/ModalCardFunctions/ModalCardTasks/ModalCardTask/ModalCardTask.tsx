import IconButton from '../../../../IconButtons/IconButton';
import { EType } from '../../../../IconButtons/IconButton.types';
import { FaCheck } from 'react-icons/fa6';
import * as S from './ModalCardTask.styles';
import API from '../../../../../API/api';

export interface ISubtask {
  id: number;
  cardId: number;
  text: string;
  isDone: boolean;
}

interface IProps {
  subtask: ISubtask;
  fetchSubtasks: () => Promise<void>;
}

export default function ModalCardTask({ subtask, fetchSubtasks }: IProps) {
  const onCheckSubtask = () => {
    const updateSubtask = async () => {
        try {
            await API.put(`subtasks/${subtask.id}`, { isDone: !subtask.isDone });
            await fetchSubtasks();
        } catch (e) {
            console.error(e);
        }
    };
    updateSubtask();
    
  };

  const onDeleteSubtask = () => {
    const deleteSubtask = async () => {
        try {
            await API.delete(`subtasks/${subtask.id}`); 
            await fetchSubtasks(); 
        } catch (e) {
            console.error(e);
        }
    };
    deleteSubtask();
  };
  return (
    <S.SubtaskContainer>
      <S.CheckButton $isDone={subtask.isDone} onClick={onCheckSubtask}>
        <FaCheck />
      </S.CheckButton>
      <S.TextContainer>{subtask.text}</S.TextContainer>
      <S.Settings>
        <IconButton
          $size={14}
          buttonType={EType.delete}
          onActionDoNext={onDeleteSubtask}
        />
      </S.Settings>
    </S.SubtaskContainer>
  );
}
