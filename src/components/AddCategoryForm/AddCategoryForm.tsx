import * as S from './AddCategoryForm.styles';
import * as C from '../../styles/components';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { ICategory } from '../Category/Category.types';
import IconButton from '../IconButtons/IconButton';
import { EType } from '../IconButtons/IconButton.types';
import { EButtonType, EInputFieldTypes } from '../../utils/DesignType.types';
import { AppDispatch } from '../../store';
import { createCategory } from '../../store/thunks/boards.thunk';

interface ICategoryInput {
  title: string;
}

interface IProps {
  setShowAddCategory: (data: boolean) => void;
  spaceId: number;
}

export default function AddCategoryForm({
  setShowAddCategory,
  spaceId,
}: IProps) {
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICategoryInput>();

  const submitOptions = {
    title: {
      required: 'Title is required',
      validate: {
        trapSpacesForRequiredFields: (v: string) =>
          !!v.trim() || 'White spaces not acceptable',
      },
    },
  };

  const handleOnClose = () => {
    reset();
    setShowAddCategory(false);
  };

  const handleAddSubmit = (data: ICategoryInput) => {
    const pushNewCategory = async(category : ICategory) => {
      dispatch(createCategory({ category }));
    }
    const newCategory: ICategory = {
      id: 0,
      boardId: spaceId,
      title: data.title,
      cards: [],
    };
    pushNewCategory(newCategory);
    setShowAddCategory(false);
  };

  return (
    <S.AddCategoryContainer onSubmit={handleSubmit(handleAddSubmit)}>
      <S.InfoContainer>
        <S.FormText
          $weight={700}
          $size={18}
        >
          Adding Category
        </S.FormText>
        <IconButton
          onActionDoNext={handleOnClose}
          $size={14}
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
          $type={EInputFieldTypes.onDark}
          $size={14}
          placeholder='Enter title...'
          {...register('title', submitOptions.title)}
        />
        {errors.title && <C.Error>{errors.title.message}</C.Error>}
      </S.InputContainer>
      <C.Button
        $type={EButtonType.add}
        type='submit'
      >
        Add category
      </C.Button>
    </S.AddCategoryContainer>
  );
}
