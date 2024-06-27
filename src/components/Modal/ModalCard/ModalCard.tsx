/* eslint-disable react-hooks/exhaustive-deps */
import { EStatuses, ICard } from '../../Card/Card.types';
import Modal from '../Modal';
import * as S from './ModalCard.styles';
import * as C from '../../../styles/components';
import { useDispatch, useSelector } from 'react-redux';
import { boardsSelector } from '../../../store/slices/categories/boards.selectors';
import { useEffect, useState } from 'react';
import CardsUtils from '../../../utils/Cards/CardsUtils';
import { useForm } from 'react-hook-form';
import { updateCard } from '../../../store/slices/categories/boards.slice';
import { setScreenStatus } from '../../../store/slices/screen/screen.slice';

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
}

export default function ModalCard({ showModal, setShowModal, card }: IProps) {
  const boards = useSelector(boardsSelector);
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>('');
  const [time, setTime] = useState<boolean>(
    card.deadlineInfo?.deadline_time ? false : true,
  );
  const [date, setDate] = useState<boolean>(
    card.deadlineInfo?.deadline_date ? false : true,
  );

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
        trapSpacesForRequiredFields: (v: string) =>
          !!v.trim() || 'White spaces not acceptable',
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
  };

  const onSaveChanges = (data: ICardInput) => {
    const updatedCard: ICard = {
      id: card.id,
      spaceId: card.spaceId,
      categoryId: card.categoryId,
      badges: card.badges,
      title: data.title,
    };
    if (data.desc !== '') {
      updatedCard.desc = data.desc;
    }
    if (data.date !== undefined) {
      const todayDate = new Date();
      const currentDate = new Date(data.date);
      if (data.time !== undefined) {
        const [hours, mins] = data.time.split(':');
        currentDate.setHours(parseInt(hours), parseInt(mins));
        const status =
          todayDate >= currentDate ? EStatuses.Deadline : EStatuses.InProgress;
        updatedCard.deadlineInfo = {
          deadline_date: data.date,
          status,
          deadline_time: data.time,
        };
      } else {
        todayDate.setHours(0, 0, 0, 0);
        const status =
          todayDate >= currentDate ? EStatuses.Deadline : EStatuses.InProgress;
        updatedCard.deadlineInfo = {
          deadline_date: data.date,
          status,
        };
      }
    }
    dispatch(updateCard(updatedCard));
    document.body.style.overflow = 'scroll';
    dispatch(setScreenStatus(false));
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
      const currentBoard = boards.find((el) => el.id === card.spaceId);
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
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <S.ModalForm onSubmit={handleSubmit(onSaveChanges)}>
        <S.ModalCardTitleInfo>
          <C.Text
            $size={16}
            $weight={700}
          >
            Title
          </C.Text>
          <C.InputTitle
            $size={16}
            defaultValue={card.title}
            placeholder='Enter title...'
            {...register('title', submitOptions.title)}
          />
          {errors.title && <C.Error>{errors.title.message}</C.Error>}
          <C.Text
            $size={14}
            $weight={700}
          >
            From category:{' '}
            <C.Text
              $size={12}
              $weight={400}
            >
              {title}
            </C.Text>
          </C.Text>
        </S.ModalCardTitleInfo>
        <S.DescContainer>
          <C.Text
            $size={14}
            $weight={500}
          >
            Description:
          </C.Text>
          <C.InputTitle
            $size={12}
            defaultValue={card.desc}
            placeholder='Enter description...'
            {...register('desc', submitOptions.desc)}
          />
          {errors.desc && <C.Error>{errors.desc.message}</C.Error>}
        </S.DescContainer>
        <S.DataContainer>
          <S.InputDateTimeContainer>
            <input
              type='checkbox'
              defaultChecked={!date}
              onClick={onClickDate}
            />
            <input
              type='date'
              defaultValue={card.deadlineInfo?.deadline_date}
              {...register('date', submitOptions.date)}
            />
            {errors.date && <C.Error>{errors.date.message}</C.Error>}
          </S.InputDateTimeContainer>
          <S.InputDateTimeContainer>
            <input
              type='checkbox'
              defaultChecked={!(date || time)}
              onClick={onClickTime}
            />
            <input
              type='time'
              defaultValue={card.deadlineInfo?.deadline_time}
              {...register('time', submitOptions.time)}
            />
            {errors.time && <C.Error>{errors.time.message}</C.Error>}
          </S.InputDateTimeContainer>
        </S.DataContainer>
        <C.SaveButton type='submit'>Save changes</C.SaveButton>
      </S.ModalForm>
    </Modal>
  );
}
