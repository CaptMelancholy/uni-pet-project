import { ICard } from '../../Card/Card.types';
import Modal from '../Modal';
import * as S from './ModalCardFunctions.styles';
import ModalCardTasks from './ModalCardTasks/ModalCardTasks';
import ModalCardUsers from './ModalCardUsers/ModalCardUsers';

interface IProps {
  showModal: boolean;
  setShowModal: (flag: boolean) => void;
  card: ICard;
}

export default function ModalCardFunctions({
  showModal,
  setShowModal,
  card,
}: IProps) {
  return (
    <Modal
      title={`Card functions: ${card.title}`}
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <ModalCardTasks cardId={card.id} />
      <ModalCardUsers cardId={card.id} boardId={card.boardId} />
    </Modal>
  );
}
