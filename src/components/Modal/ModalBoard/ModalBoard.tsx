import { useDispatch } from 'react-redux';
import { useScreenBlock } from '../../../context/ScreenHooks';
import IBoard from '../../Board/Board.types';
import { useTheme } from 'styled-components';
import { useForm } from 'react-hook-form';
import Modal from '../Modal';
import * as S from './ModalBoard.styles';
import * as C from '../../../styles/components';
import { EButtonType, EInputFieldTypes } from '../../../utils/DesignType.types';
import { AppDispatch } from '../../../store';
import { updateBoard } from '../../../store/thunks/boards.thunk';
import { useUpdate } from '../../../context/UpdateHooks';
import ModalBoardCreateLinks from './ModalBoardCreateLinks/ModalBoardCreateLinks';
import ModalBoardLinks, { ILink } from './ModalBoardLinks/ModalBoardLinks';
import { useCallback, useState } from 'react';
import API from '../../../API/api';

interface IProps {
  showModal: boolean;
  setShowModal: (flag: boolean) => void;
  board: IBoard;
}

interface IBoardInput {
  title: string;
  desc: string;
}

export default function ModalBoard({ showModal, setShowModal, board }: IProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBoardInput>();
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  const { setScreen } = useScreenBlock();
  const { setUpdate } = useUpdate();
  const [links, setLinks] = useState<Array<ILink>>([]);
  const fetchLinks = useCallback(async () => {
    try {
      const { data } = await API.get(`links/${board.id}`);
      setLinks(data.links);
    } catch (error) {
      console.error('Ошибка при получении ссылок:', error);
    }
  }, [board.id]);
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
          if (v !== '') return !!v.trim() || 'White spaces not acceptable';
        },
      },
    },
  };

  const handleSaveChanges = (data: IBoardInput) => {
    const updateThisBoard = async (board: IBoard) => {
      dispatch(updateBoard({ board }));
    };
    const desc = data.desc !== '' ? data.desc : undefined;

    const updatedBoard: IBoard = {
      id: board.id,
      title: data.title,
      desc: desc,
      categories: board.categories,
      color: board.color,
      invite_link: board.invite_link,
    };
    updateThisBoard(updatedBoard);
    document.body.style.overflow = 'scroll';
    setScreen(false);
    setShowModal(false);
    setUpdate(true);
  };

  return (
    <Modal
      title={`Edit Board: ${board.title}`}
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
            defaultValue={board.title}
            placeholder='Enter title...'
            {...register('title', submitOptions.title)}
          />
          {errors.title && <C.Error>{errors.title.message}</C.Error>}

          <C.Text
            $size={16}
            $weight={700}
            $color={theme.colors.text_on_bright}
          >
            Description
          </C.Text>
          <C.InputField
            $type={EInputFieldTypes.onBright}
            $size={16}
            defaultValue={board.desc}
            placeholder='Enter description...'
            {...register('desc', submitOptions.desc)}
          />
          {errors.desc && <C.Error>{errors.desc.message}</C.Error>}
          <C.Text
            $size={16}
            $weight={700}
            $color={theme.colors.text_on_bright}
          >
            Invite Link
          </C.Text>
          <ModalBoardLinks links={links} fetchLinks={fetchLinks} />
        </S.ModalContentContainer>
        <C.Button
          $type={EButtonType.add}
          type='submit'
        >
          Save changes
        </C.Button>
      </S.ModalForm>
      <S.ModalLinkContainer>
        <S.FieldText
          $size={24}
          $weight={600}
        >
          LINKS
        </S.FieldText>
        <ModalBoardCreateLinks
          id={board.id}
          title={board.title}
          fetchLinks={fetchLinks}
        />
      </S.ModalLinkContainer>
    </Modal>
  );
}
