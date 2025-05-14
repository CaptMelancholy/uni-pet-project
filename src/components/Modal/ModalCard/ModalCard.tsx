/* eslint-disable react-hooks/exhaustive-deps */
import { EPriority, EStatuses, ICard, ICardDTO } from '../../Card/Card.types';
import Modal from '../Modal';
import * as S from './ModalCard.styles';
import * as C from '../../../styles/components';
import { useDispatch, useSelector } from 'react-redux';
import { boardsSelector } from '../../../store/slices/categories/boards.selectors';
import { useEffect, useState } from 'react';
import CardsUtils from '../../../utils/Cards/CardsUtils';
import { useForm } from 'react-hook-form';
import { useTheme } from 'styled-components';
import { EButtonType, EInputFieldTypes } from '../../../utils/DesignType.types';
import { useScreenBlock } from '../../../context/ScreenHooks';
import { updateCard } from '../../../store/thunks/boards.thunk';
import { AppDispatch } from '../../../store';
import IBoard from '../../Board/Board.types';

interface IProps {
  showModal: boolean;
  setShowModal: (flag: boolean) => void;
  card: ICard;
}

interface ICardInput {
  title: string;
  desc: string;
  date: string;
  time: string;
  priority?: EPriority | string;
}

export default function ModalCard({ showModal, setShowModal, card }: IProps) {
  const boards = useSelector(boardsSelector);
  const dispatch = useDispatch<AppDispatch>();
  const { setScreen } = useScreenBlock();
  const [title, setTitle] = useState<string>('');
  const [time, setTime] = useState<boolean>(
    card.deadlineInfo?.deadline_time ? false : true,
  );
  const [date, setDate] = useState<boolean>(
    card.deadlineInfo?.deadline_date ? false : true,
  );

  const theme = useTheme();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ICardInput>();

  const submitOptions = {
    title: {
      required: 'Title is required',
      validate: {
        trapSpacesForRequiredFields: (v: string) =>
          !!v.trim() || 'White spaces not acceptable',
      },
    },
    desc: {
      validate: {
        trapSpacesForRequiredFields: (v: string) => {
          if (v !== '') return !!v.trim() || 'White spaces not acceptable';
        },
      },
    },
    time: {
      disabled: time,
      validate: {
        time_only_with_date: (v: string) => {
          if (v !== undefined && watch('date') === undefined) {
            return 'Time can be enter only with a date';
          }
        },
        if_enter_not_empty: (v: string) => {
          if (v !== undefined && v === '') {
            return 'You must enter the time';
          }
        },
      },
    },
    date: {
      disabled: date,
      validate: {
        if_enter_not_empty: (v: string) => {
          if (v !== undefined && v === '') {
            return 'You must enter the date';
          }
        },
      },
    },
    priority: {},
  };

  const onSaveChanges = (data: ICardInput) => {
    const updateThisCard = async (card: ICardDTO) => {
      dispatch(updateCard({ card }));
    };
    const updatedCard: ICardDTO = {
      id: card.id,
      boardId: card.boardId,
      categoryId: card.categoryId,
      title: data.title,
      order: card.order,
    };
    if (data.priority !== '') {
      updatedCard.priority = data.priority as EPriority;
    }
    if (data.desc !== '') {
      updatedCard.desc = data.desc;
    }
    updatedCard.deadline_date = data.date !== '' ? data.date : undefined;
    updatedCard.deadline_time = data.time !== '' ? data.time : undefined;
    if (data.date !== undefined) {
      const todayDate = new Date();
      const currentDate = new Date(data.date);
      if (data.time !== undefined) {
        const [hours, mins] = data.time.split(':');
        currentDate.setHours(parseInt(hours), parseInt(mins));
        const status =
          todayDate >= currentDate ? EStatuses.Deadline : EStatuses.InProgress;
        updatedCard.status = status;
      } else {
        todayDate.setHours(0, 0, 0, 0);
        const status =
          todayDate >= currentDate ? EStatuses.Deadline : EStatuses.InProgress;
        updatedCard.status = status;
      }
    }
    updateThisCard(updatedCard);
    document.body.style.overflow = 'scroll';
    setScreen(false);
    setShowModal(false);
  };

  const onClickTime = () => {
    setTime(!time);
  };

  const onClickDate = () => {
    setDate(!date);
  };

  useEffect(() => {
    if (boards !== undefined) {
      const currentBoard = boards.find((el : IBoard) => el.id === card.boardId);
      if (currentBoard !== undefined) {
        setTitle(
          CardsUtils.findByParentIdCategory(
            currentBoard.categories,
            card.categoryId,
          ),
        );
      }
    }
  }, []);

  return (
    <Modal
      title={`Edit Card: ${card.title}`}
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <S.ModalForm onSubmit={handleSubmit(onSaveChanges)}>
        <S.ModalCardTitleInfo>
          <C.Text
            $size={18}
            $weight={700}
            $color={theme.colors.text_on_bright}
          >
            Title
          </C.Text>
          <C.InputField
            $size={16}
            $type={EInputFieldTypes.onBright}
            defaultValue={card.title}
            placeholder='Enter title...'
            {...register('title', submitOptions.title)}
          />
          {errors.title && <C.Error>{errors.title.message}</C.Error>}
          <C.Text
            $size={16}
            $weight={700}
            $color={theme.colors.text_on_bright}
          >
            From category:{' '}
            <C.Text
              $size={14}
              $weight={400}
              $color={theme.colors.text_on_bright}
            >
              {title}
            </C.Text>
          </C.Text>
        </S.ModalCardTitleInfo>
        <S.PriorityDescWrapper>
          <S.DescContainer>
            <C.Text
              $size={16}
              $weight={700}
              $color={theme.colors.text_on_bright}
            >
              Description:
            </C.Text>
            <C.InputField
              $size={12}
              $type={EInputFieldTypes.onBright}
              defaultValue={card.desc}
              placeholder='Enter description...'
              {...register('desc', submitOptions.desc)}
            />
            {errors.desc && <C.Error>{errors.desc.message}</C.Error>}
          </S.DescContainer>
          
          <S.PriorityContainer>
            <C.Text
              $size={16}
              $weight={700}
              $color={theme.colors.text_on_bright}
            >
              Priority:
            </C.Text>
            <C.Select
              $type={EInputFieldTypes.onBright}
              defaultValue={card.priority}
              {...register('priority', submitOptions.priority)}
            >
              <C.Option value=''>No Priority</C.Option>
              <C.Option value={EPriority.critical}>Critical</C.Option>
              <C.Option value={EPriority.high}>High</C.Option>
              <C.Option value={EPriority.medium}>Medium</C.Option>
              <C.Option value={EPriority.low}>Low</C.Option>
            </C.Select>
          </S.PriorityContainer>
        </S.PriorityDescWrapper>
        <S.DataContainer>
          <S.InputDateTimeContainer>
            <C.CheckboxContainer>
              <C.Checkbox
                type='checkbox'
                defaultChecked={!date}
                onClick={onClickDate}
                id='1'
              />
              <C.CheckboxLabel htmlFor='1'>DEADLINE DATE</C.CheckboxLabel>
            </C.CheckboxContainer>
            <C.DateTimeField
              $type={EInputFieldTypes.onBright}
              type='date'
              defaultValue={card.deadlineInfo?.deadline_date}
              {...register('date', submitOptions.date)}
            />
            {errors.date && <C.Error>{errors.date.message}</C.Error>}
          </S.InputDateTimeContainer>
          <S.InputDateTimeContainer>
            <C.CheckboxContainer>
              <C.Checkbox
                type='checkbox'
                defaultChecked={!(date || time)}
                onClick={onClickTime}
                id='2'
              />
              <C.CheckboxLabel htmlFor='2'>DEADLINE TIME</C.CheckboxLabel>
            </C.CheckboxContainer>
            <C.DateTimeField
              $type={EInputFieldTypes.onBright}
              type='time'
              defaultValue={card.deadlineInfo?.deadline_time}
              {...register('time', submitOptions.time)}
            />
            {errors.time && <C.Error>{errors.time.message}</C.Error>}
          </S.InputDateTimeContainer>
        </S.DataContainer>
        <C.Button
          $type={EButtonType.add}
          type='submit'
        >
          Save changes
        </C.Button>
      </S.ModalForm>
    </Modal>
  );
}
