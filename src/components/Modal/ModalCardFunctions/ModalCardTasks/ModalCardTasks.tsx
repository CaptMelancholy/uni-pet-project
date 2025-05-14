import { useForm } from 'react-hook-form';
import * as C from '../../../../styles/components';
import {
  EButtonType,
  EInputFieldTypes,
} from '../../../../utils/DesignType.types';
import ModalCardTask, { ISubtask } from './ModalCardTask/ModalCardTask';
import * as S from './ModalCardTasks.styles';
import API from '../../../../API/api';
import { useEffect } from 'react';

interface ISubtaskInput {
  text: string;
}

interface IProps {
  cardId: number;
  subTasks: Array<ISubtask> | undefined;
  fetchSubtasks: () => Promise<void>;
}

export default function ModalCardTasks({
  cardId,
  subTasks,
  fetchSubtasks,
}: IProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ISubtaskInput>();

  const submitOptions = {
    text: {
      required: 'Title is required',
      validate: {
        trapSpacesForRequiredFields: (v: string) =>
          !!v.trim() || 'White spaces not acceptable',
      },
    },
  };

  const handleSubmitAddSubtask = (data: ISubtaskInput) => {
    const addThisSubtask = async (subtask: ISubtask) => {
      try {
        await API.post('subtasks', subtask);
        await fetchSubtasks();
      } catch (e) {
        console.error(e);
      }
    };

    const subtask: ISubtask = {
      id: 0,
      cardId,
      text: data.text,
      isDone: false,
    };

    addThisSubtask(subtask);
    reset();
  };

  useEffect(() => {
    fetchSubtasks();
  }, [fetchSubtasks]);

  return (
    <S.SubtaskContainer>
      <S.SubtaskForm onSubmit={handleSubmit(handleSubmitAddSubtask)}>
        <C.InputField
          $size={12}
          $type={EInputFieldTypes.onBright}
          placeholder='Enter subtask...'
          {...register('text', submitOptions.text)}
        />
        <C.Button
          $type={EButtonType.add}
          type='submit'
        >
          ADD
        </C.Button>
      </S.SubtaskForm>
      {errors.text && <C.Error>{errors.text.message}</C.Error>}
      <S.SubtaskList>
        {subTasks !== undefined &&
          subTasks.length !== 0 &&
          subTasks.map((task) => (
            <ModalCardTask
              key={task.id}
              subtask={task}
              fetchSubtasks={fetchSubtasks}
            />
          ))}
      </S.SubtaskList>
    </S.SubtaskContainer>
  );
}
