import * as S from './AddCategoryForm.styles';
import * as C from '../../styles/components';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { maxCategoryIdCategoriesSelector } from '../../store/slices/categories/categories.selectors';
import { ICategory } from '../Category/Category.types';
import { pushNewCategory } from '../../store/slices/categories/categories.slice';

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
    formState: { errors },
  } = useForm<ICategoryInput>();

  const submitOptions = {
    title: {
      required: 'Title is required',
    },
  };

  const handleAddSubmit = (data: ICategoryInput) => {
    console.log(data);
    const newCategory : ICategory = {
        id: maxId + 1,
        title: data.title,
        cards: []
    }
    dispatch(pushNewCategory(newCategory));
    setShowAddCategory(false);
  }

  return (
    <S.AddCategoryContainer onSubmit={handleSubmit(handleAddSubmit)}>
      <S.FormText
        $weight={700}
        $size={16}
      >
        Adding Category
      </S.FormText>
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
