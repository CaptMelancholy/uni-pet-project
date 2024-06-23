import { ICategory } from '../../Category/Category.types';
import Modal from '../Modal';
import * as S from './ModalCategory.styles';
import * as C from '../../../styles/components';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setScreenStatus } from '../../../store/slices/screen/screen.slice';
import { updateCategory } from '../../../store/slices/categories/categories.slice';

interface IProps {
  showModal: boolean;
  setShowModal: (flag: boolean) => void;
  category: ICategory;
}

interface ICategoryInput {
  title: string;
}

export default function ModalCategory({
  showModal,
  setShowModal,
  category,
}: IProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICategoryInput>();
  const dispatch = useDispatch();

  const submitOptions = {
    title: {
      required: 'Title is required',
      validate: {
        trapSpacesForRequiredFields: (v: string) =>
          !!v.trim() || 'White spaces not acceptable',
      },
    },
  };

  const handleSaveChanges = (data: ICategoryInput) => {
    const updatedCategory: ICategory = {
      id: category.id,
      title: data.title,
      cards: category.cards,
    };
    dispatch(updateCategory(updatedCategory));
    document.body.style.overflow = 'scroll';
    dispatch(setScreenStatus(false));
    setShowModal(false);
  };

  return (
    <Modal
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <S.ModalForm onSubmit={handleSubmit(handleSaveChanges)}>
        <S.ModalContentContainer>
          <C.Text
            $size={16}
            $weight={700}
          >
            Title
          </C.Text>
          <C.InputTitle
            $size={16}
            defaultValue={category.title}
            placeholder='Enter title...'
            {...register('title', submitOptions.title)}
          />
          {errors.title && <C.Error>{errors.title.message}</C.Error>}
        </S.ModalContentContainer>
        <C.SaveButton type='submit'>Save changes</C.SaveButton>
      </S.ModalForm>
    </Modal>
  );
}
