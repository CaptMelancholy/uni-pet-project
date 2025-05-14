import IconButton from '../IconButtons/IconButton';
import { EType } from '../IconButtons/IconButton.types';
import * as S from './AddBoardForm.styles';
import * as C from '../../styles/components';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import IBoard from '../Board/Board.types';
import { EButtonType, EInputFieldTypes } from '../../utils/DesignType.types';
import { getRandomColor } from '../../styles/badge-colors';
import { createBoard } from '../../store/thunks/boards.thunk';
import { AppDispatch } from '../../store';

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
  const dispatch = useDispatch<AppDispatch>();
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
  };

  const handleAddSubmit = (data: IBoardInput) => {
    const postNewBoard = async (board: IBoard) => {
      dispatch(createBoard({ board }));
    };
    const newBoard: IBoard = {
      id: 0,
      title: data.title,
      categories: [],
      color: getRandomColor(),
      invite_link: '',
    };
    if (data.desc !== '') {
      newBoard.desc = data.desc;
    }
    postNewBoard(newBoard);
    setShowAddBoard(false);
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
        <C.InputField
          $size={14}
          $type={EInputFieldTypes.onDark}
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
        <C.InputField
          $type={EInputFieldTypes.onDark}
          $size={14}
          placeholder='Enter subtitle...'
          {...register('desc', submitOptions.desc)}
        />
        {errors.desc && <C.Error>{errors.desc.message}</C.Error>}
      </S.InputContainer>
      <C.Button
        type='submit'
        $type={EButtonType.add}
      >
        Add board
      </C.Button>
    </S.AddBoardContainer>
  );
}
