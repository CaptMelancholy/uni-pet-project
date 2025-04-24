import * as S from './AddCardForm.styles';
import * as C from '../../styles/components';
import { useForm } from 'react-hook-form';
import { EPriority, EStatuses, ICardDTO } from '../Card/Card.types';
import { useDispatch } from 'react-redux';
import IconButton from '../IconButtons/IconButton';
import { EType } from '../IconButtons/IconButton.types';
import CardsUtils from '../../utils/Cards/CardsUtils';
import { EButtonType, EInputFieldTypes } from '../../utils/DesignType.types';
import { AppDispatch } from '../../store';
import { createCard } from '../../store/thunks/boards.thunk';

interface ICardInput {
  title: string;
  desc: string;
  date: string;
  time: string;
  priority?: EPriority | string;
}

interface IProps {
  categoryId: number;
  spaceId: number;
  setShowAddingCard: (data: boolean) => void;
}

export default function AddCardForm({
  spaceId,
  categoryId,
  setShowAddingCard,
}: IProps) {
  const dispatch = useDispatch<AppDispatch>();
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
    priority: {},
  };

  const handleOnClose = () => {
    reset();
    setShowAddingCard(false);
  };

  const handleAddCardSubmit = (data: ICardInput) => {
    const createThisCard = async(dto : ICardDTO) => {
      dispatch(createCard({ card: dto }));
    }
    const dto : ICardDTO = {
      id: 0,
      categoryId: categoryId,
      boardId: spaceId,
      title: data.title,
      order: 0,
    }
    dto.desc = data.desc !== '' ? data.desc : undefined;
    dto.priority = data.priority !== '' ? (data.priority as EPriority) : undefined;
    dto.deadline_date = data.date !== '' ? data.date : undefined; 
    dto.deadline_time = data.time !== '' ? data.time : undefined;
    dto.status 
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
      dto.status = status;
    }
    createThisCard(dto);
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
        <C.InputField
          $type={EInputFieldTypes.onBright}
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
        <C.InputField
          $type={EInputFieldTypes.onBright}
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
          Priority
        </S.FormText>
        <C.Select
          $type={EInputFieldTypes.onBright}
          defaultValue={''}
          {...register('priority', submitOptions.priority)}
        >
          <C.Option value=''>No Priority</C.Option>
          <C.Option value={EPriority.critical}>Critical</C.Option>
          <C.Option value={EPriority.high}>High</C.Option>
          <C.Option value={EPriority.medium}>Medium</C.Option>
          <C.Option value={EPriority.low}>Low</C.Option>
        </C.Select>
      </S.InputContainer>
      <S.InputContainer>
        <S.FormText
          $weight={400}
          $size={12}
        >
          Deadline date
        </S.FormText>
        <S.DateTimeAddField
          $type={EInputFieldTypes.onBright}
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
        <S.DateTimeAddField
          $type={EInputFieldTypes.onBright}
          type='time'
          {...register('time', submitOptions.time)}
        />
        {errors.time && <C.Error>{errors.time.message}</C.Error>}
      </S.InputContainer>
      <C.Button $type={EButtonType.add}>Add card</C.Button>
    </S.AddCardForm>
  );
}
