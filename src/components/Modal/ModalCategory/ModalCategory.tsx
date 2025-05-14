import { ICategory } from '../../Category/Category.types';
import Modal from '../Modal';
import * as S from './ModalCategory.styles';
import * as C from '../../../styles/components';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useTheme } from 'styled-components';
import { EButtonType, EInputFieldTypes } from '../../../utils/DesignType.types';
import { useScreenBlock } from '../../../context/ScreenHooks';
import { updateCategory } from '../../../store/thunks/boards.thunk';
import { AppDispatch } from '../../../store';

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
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  const { setScreen } = useScreenBlock();
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
    const updateThisCategory = async(category : ICategory) => {
      dispatch(updateCategory({ category }));
    }
    const updatedCategory: ICategory = {
      id: category.id,
      boardId: category.boardId,
      title: data.title,
      cards: category.cards,
    };
    updateThisCategory(updatedCategory);
    document.body.style.overflow = 'scroll';
    setScreen(false);
    setShowModal(false);
  };

  return (
    <Modal
      title={`Edit Category: ${category.title}`}
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <S.ModalForm onSubmit={handleSubmit(handleSaveChanges)}>
        <S.ModalContentContainer>
          <C.Text
            $size={16}
            $weight={700}
            $color={theme.colors.text_on_bright}
          >
            Title
          </C.Text>
          <C.InputField
            $type={EInputFieldTypes.onBright}
            $size={16}
            defaultValue={category.title}
            placeholder='Enter title...'
            {...register('title', submitOptions.title)}
          />
          {errors.title && <C.Error>{errors.title.message}</C.Error>}
        </S.ModalContentContainer>
        <C.Button
          $type={EButtonType.add}
          type='submit'
        >
          Save changes
        </C.Button>
      </S.ModalForm>
    </Modal>
  );
}
