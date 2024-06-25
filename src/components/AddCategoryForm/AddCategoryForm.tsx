import * as S from './AddCategoryForm.styles';
import * as C from '../../styles/components';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { maxCategoryIdCategoriesSelector } from '../../store/slices/categories/categories.selectors';
import { ICategory } from '../Category/Category.types';
import { pushNewCategory } from '../../store/slices/categories/categories.slice';
import IconButton from '../IconButtons/IconButton';
import { EType } from '../IconButtons/IconButton.types';

interface ICategoryInput {
  title: string;
}

interface IProps {
  setShowAddCategory: (data: boolean) => void;
}

export default function AddCategoryForm({ setShowAddCategory }: IProps) {
  const dispatch = useDispatch();
  const maxId = useSelector(maxCategoryIdCategoriesSelector);
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
    const newCategory: ICategory = {
      id: maxId + 1,
      title: data.title,
      cards: [],
    };
    dispatch(pushNewCategory(newCategory));
    setShowAddCategory(false);
  };

  return (
    <S.AddCategoryContainer onSubmit={handleSubmit(handleAddSubmit)}>
      <S.InfoContainer>
        <S.FormText
          $weight={700}
          $size={16}
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
        <S.FormInput
          $size={14}
          placeholder='Enter title...'
          {...register('title', submitOptions.title)}
        />
        {errors.title && <C.Error>{errors.title.message}</C.Error>}
      </S.InputContainer>
      <C.SaveButton type='submit'>Add category</C.SaveButton>
    </S.AddCategoryContainer>
  );
}
