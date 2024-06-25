import * as S from './AddCardForm.styles';
import * as C from '../../styles/components';
import { useForm } from 'react-hook-form';
import { EStatuses, ICard } from '../Card/Card.types';
import { INewCard } from '../../store/slices/categories/categories.types';
import { useDispatch, useSelector } from 'react-redux';
import { maxCardIdCategoriesSelector } from '../../store/slices/categories/categories.selectors';
import { pushNewCard } from '../../store/slices/categories/categories.slice';
import IconButton from '../IconButtons/IconButton';
import { EType } from '../IconButtons/IconButton.types';
import CardsUtils from '../../utils/Cards/CardsUtils';

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
    reset,
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
    time: {
      validate: {
        time_with_date: (v: string) => {
          if (v !== '' && watch('date') === '') {
            return 'You must enter date, if you want to enter time';
          }
        },
      },
    },
    desc: {
      validate: {
        trapSpacesForRequiredFields: (v: string) => {
          if (v !== '') {
            return !!v.trim() || 'White spaces not acceptable';
          }
        },
      },
    },
  };

  const handleOnClose = () => {
    reset();
    setShowAddingCard(false);
  };

  const handleAddCardSubmit = (data: ICardInput) => {
    const card: ICard = {
      id: maxId + 1,
      parent_id: categoryId,
      badges: [],
      title: data.title,
    };
    card.desc = data.desc !== '' ? data.desc : undefined;
    if (data.date !== '') {
      let status: EStatuses = EStatuses.InProgress;
      if (data.time !== '') {
        status = CardsUtils.compareDates(data.date, data.time)
          ? EStatuses.Deadline
          : EStatuses.InProgress;
      } else {
        status = CardsUtils.compareDates(data.date, undefined)
          ? EStatuses.Deadline
          : EStatuses.InProgress;
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
      <S.InfoContainer>
        <S.FormText
          $weight={700}
          $size={16}
        >
          Add card
        </S.FormText>
        <IconButton
          $size={14}
          onActionDoNext={handleOnClose}
          buttonType={EType.close}
        />
      </S.InfoContainer>
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
          {...register('desc', submitOptions.desc)}
        />
        {errors.desc && <C.Error>{errors.desc.message}</C.Error>}
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
