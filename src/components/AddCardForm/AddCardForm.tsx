import * as S from './AddCardForm.styles';
import * as C from '../../styles/components';
import { useForm } from 'react-hook-form';
import { EStatuses, ICard } from '../Card/Card.types';
import { INewCard } from '../../store/slices/categories/categories.types';
import { useDispatch, useSelector } from 'react-redux';
import { maxCardIdCategoriesSelector } from '../../store/slices/categories/categories.selectors';
import { pushNewCard } from '../../store/slices/categories/categories.slice';

interface ICardInput {
  title: string;
  desc: string;
  date: string;
  time: string;
}

interface IProps {
  categoryId: number;
  setShowAddingCard: (data: boolean) => void;
}

export default function AddCardForm({ categoryId, setShowAddingCard }: IProps) {
  const dispatch = useDispatch();
  const maxId = useSelector(maxCardIdCategoriesSelector);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ICardInput>();

  const submitOptions = {
    title: {
      required: 'Title is required',
    },
    time: {
      validate: {
        time_with_date: (v: string) => {
          if (v !== '' && watch('date') === '') {
            return 'You must enter date, if you want to enter time';
          }
        },
      },
    },
  };

  const handleAddCardSubmit = (data: ICardInput) => {
    console.log(data);
    const card: ICard = {
      id: maxId + 1,
      parent_id: categoryId,
      badges: [],
      title: data.title,
    };
    card.desc = data.desc !== '' ? data.desc : undefined;
    const todayData = new Date();
    if (data.time === '' && data.date !== '') {
      todayData.setHours(0, 0, 0, 0);
      const enterData = new Date(data.date);
      let status = EStatuses.InProgress;
      if (todayData >= enterData) {
        status = EStatuses.Deadline;
      }
      card.deadlineInfo = {
        status,
        deadline_date: data.date,
      };
    } else if (data.time !== '' && data.date !== '') {
      const enterData = new Date(data.date);
      const [hours, mins] = data.time.split(':');
      enterData.setHours(parseInt(hours), parseInt(mins));
      let status = EStatuses.InProgress;
      if (todayData >= enterData) {
        status = EStatuses.Deadline;
      }
      card.deadlineInfo = {
        status,
        deadline_date: data.date,
        deadline_time: data.time,
      };
    }
    const newCard: INewCard = {
      card,
      parentId: categoryId,
    };
    dispatch(pushNewCard(newCard));
    setShowAddingCard(false);
  };

  return (
    <S.AddCardForm onSubmit={handleSubmit(handleAddCardSubmit)}>
      <S.FormText
        $weight={700}
        $size={16}
      >
        Add card
      </S.FormText>
      <S.InputContainer>
        <S.FormText
          $weight={400}
          $size={12}
        >
          Title
        </S.FormText>
        <C.InputTitle
          $size={12}
          placeholder='Enter title...'
          {...register('title', submitOptions.title)}
        />
        {errors.title && <C.Error>{errors.title.message}</C.Error>}
      </S.InputContainer>
      <S.InputContainer>
        <S.FormText
          $weight={400}
          $size={12}
        >
          Description
        </S.FormText>
        <C.InputTitle
          $size={12}
          placeholder='Enter desc...'
          {...register('desc')}
        />
      </S.InputContainer>
      <S.InputContainer>
        <S.FormText
          $weight={400}
          $size={12}
        >
          Deadline date
        </S.FormText>
        <input
          type='date'
          {...register('date')}
        />
      </S.InputContainer>
      <S.InputContainer>
        <S.FormText
          $weight={400}
          $size={12}
        >
          Deadline time
        </S.FormText>
        <input
          type='time'
          {...register('time', submitOptions.time)}
        />
        {errors.time && <C.Error>{errors.time.message}</C.Error>}
      </S.InputContainer>
      <C.SaveButton>Add card</C.SaveButton>
    </S.AddCardForm>
  );
}
