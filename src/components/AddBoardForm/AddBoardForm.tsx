import IconButton from '../IconButtons/IconButton';
import { EType } from '../IconButtons/IconButton.types';
import * as S from './AddBoardForm.styles';
import * as C from '../../styles/components';
import EColors from '../../styles/badge-colors';
import { useDispatch, useSelector } from 'react-redux';
import { maxBoardIdBoardsSelector } from '../../store/slices/categories/boards.selectors';
import { useForm } from 'react-hook-form';
import IBoard from '../Board/Board.types';
import { pushNewSpace } from '../../store/slices/categories/boards.slice';

interface IBoardInput {
  title: string;
  desc: string;
  color: string;
}

interface IProps {
  setShowAddBoard: (data: boolean) => void;
}

export default function AddBoardForm({ setShowAddBoard }: IProps) {
  const handleOnClose = () => {
    reset();
    setShowAddBoard(false);
  };
  const dispatch = useDispatch();
  const maxId = useSelector(maxBoardIdBoardsSelector);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IBoardInput>();

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
          if (v !== '') {
            return !!v.trim() || 'White spaces not acceptable';
          }
        },
      },
    },
    color: {
      required: 'Color is required',
    },
  };

  const handleAddSubmit = (data: IBoardInput) => {
    const newBoard : IBoard = {
        id: maxId + 1,
        title: data.title,
        color: EColors[data.color as keyof typeof EColors],
        categories: []
    }
    if(data.desc !== '') {
        newBoard.desc = data.desc;
    }
    dispatch(pushNewSpace(newBoard));
  };

  return (
    <S.AddBoardContainer onSubmit={handleSubmit(handleAddSubmit)}>
      <S.InfoContainer>
        <S.FormText
          $weight={700}
          $size={16}
        >
          Add board
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
          $size={14}
        >
          Title
        </S.FormText>
        <S.FormInput
          $size={14}
          placeholder='Enter title...'
          {...register('title', submitOptions.title)}
        />
        {errors.title && <C.Error>{errors.title.message}</C.Error>}
        <S.FormText
          $weight={400}
          $size={14}
        >
          Subtitle
        </S.FormText>
        <S.FormInput
          $size={14}
          placeholder='Enter subtitle...'
          {...register('desc', submitOptions.desc)}
        />
        {errors.desc && <C.Error>{errors.desc.message}</C.Error>}
        <S.FieldSet>
          <C.Legend>Select color</C.Legend>
          {Object.entries(EColors).map((el) => (
            <S.RadioContainer>
              <input
                type='radio'
                id={el[0]}
                {...register('color', submitOptions.color)}
                value={el[0]}
              />
              <C.Label
                $size={12}
                $weight={400}
                $color={el[1]}
                htmlFor={el[0]}
              >
                {el[0]}
              </C.Label>
              {errors.color && <C.Error>{errors.color.message}</C.Error>}
            </S.RadioContainer>
          ))}
        </S.FieldSet>
        {/* */}
      </S.InputContainer>
      <C.SaveButton type='submit'>Add board</C.SaveButton>
    </S.AddBoardContainer>
  );
}
