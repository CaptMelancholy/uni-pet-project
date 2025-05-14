import { ICard } from '../../Card/Card.types';
import Modal from '../Modal';
import { ISubtask } from './ModalCardTasks/ModalCardTask/ModalCardTask';
import ModalCardTasks from './ModalCardTasks/ModalCardTasks';
import { IUserCard } from './ModalCardUsers/ModalCardUser/ModalCardUser';
import ModalCardUsers from './ModalCardUsers/ModalCardUsers';
import * as C from '../../../styles/components';
import * as S from './ModalCardFunctions.styles';
import { useTheme } from 'styled-components';
import { IMark } from '../../AddMarkForm/AddMarkForm';
import ModalCardMarks from './ModalCardMarks/ModalCardMarks';

interface IProps {
  showModal: boolean;
  setShowModal: (flag: boolean) => void;
  card: ICard;
  users: Array<IUserCard> | undefined;
  fetchUsers: () => Promise<void>;
  subTasks: Array<ISubtask> | undefined;
  fetchSubtasks: () => Promise<void>;
  marks: Array<IMark> | undefined;
  fetchMarks: () => Promise<void>;
}

export default function ModalCardFunctions({
  showModal,
  setShowModal,
  card,
  users,
  fetchUsers,
  subTasks,
  fetchSubtasks,
  marks,
  fetchMarks,
}: IProps) {
  const theme = useTheme();
  return (
    <Modal
      title={`Card functions: ${card.title}`}
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <S.FunctionsWrapper>
        <C.Text
          $color={theme.colors.text_on_bright}
          $size={20}
          $weight={600}
        >
          Subtasks:
        </C.Text>
        <ModalCardTasks
          cardId={card.id}
          subTasks={subTasks}
          fetchSubtasks={fetchSubtasks}
        />
      </S.FunctionsWrapper>
      <S.FunctionsWrapper>
        <C.Text
          $color={theme.colors.text_on_bright}
          $size={20}
          $weight={600}
        >
          Users attachment:
        </C.Text>
        <ModalCardUsers
          cardId={card.id}
          boardId={card.boardId}
          users={users}
          fetchUsers={fetchUsers}
          setShowModalFunctions={setShowModal}
        />
      </S.FunctionsWrapper>
      <S.FunctionsWrapper>
        <C.Text
          $color={theme.colors.text_on_bright}
          $size={20}
          $weight={600}
        >
          Marks attachment:
        </C.Text>
        <ModalCardMarks
          cardId={card.id}
          boardId={card.boardId}
          marks={marks}
          fetchMarks={fetchMarks}
        />
      </S.FunctionsWrapper>
    </Modal>
  );
}
