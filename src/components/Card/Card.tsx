import * as S from './Card.styles';
import { FaClock, FaRegCalendar } from 'react-icons/fa';
import { FaClipboardList, FaClipboardUser } from 'react-icons/fa6';
import { ICard, ICardDTO } from './Card.types';
import { useCallback, useEffect, useState } from 'react';
import ModalCard from '../Modal/ModalCard/ModalCard';
import { useDispatch } from 'react-redux';
import { EType } from '../IconButtons/IconButton.types';
import IconButton from '../IconButtons/IconButton';
import CardsUtils from '../../utils/Cards/CardsUtils';
import { Draggable } from 'react-beautiful-dnd';
import { useScreenBlock } from '../../context/ScreenHooks';
import { AppDispatch } from '../../store';
import { deleteCard, updateCard } from '../../store/thunks/boards.thunk';
import ModalCardFunctions from '../Modal/ModalCardFunctions/ModalCardFunctions';
import API from '../../API/api';
import { IUserCard } from '../Modal/ModalCardFunctions/ModalCardUsers/ModalCardUser/ModalCardUser';
import { ISubtask } from '../Modal/ModalCardFunctions/ModalCardTasks/ModalCardTask/ModalCardTask';
import { IMark } from '../AddMarkForm/AddMarkForm';

interface IProps {
  card: ICard;
  index: number;
}

export default function Card({ index, card }: IProps) {
  const [showModal, setShowModal] = useState(false);
  const [showModalFunctions, setShowModalFunctions] = useState(false);
  const [users, setUsers] = useState<Array<IUserCard>>();
  const [subTasks, setSubTasks] = useState<Array<ISubtask>>([]);
  const [marks, setMarks] = useState<Array<IMark>>([]);
  const fetchMarks = useCallback(async () => {
    try {
      const { data } = await API.get(`marks/attached/${card.id}`);
      setMarks(data);
    } catch (e) {
      console.error(e);
    }
  }, [card.id]);
  const fetchUsers = useCallback(async () => {
    try {
      const { data } = await API.get(`cards/attached/${card.id}`);
      setUsers(data);
    } catch (error) {
      console.error('Ошибка получения пользователей:', error);
    }
  }, [card.id]);
  const fetchSubtasks = useCallback(async () => {
    try {
      const { data } = await API.get(`subtasks/${card.id}`);
      setSubTasks(data);
    } catch (error) {
      console.error('Ошибка получения доступных пользователей:', error);
    }
  }, [card.id]);
  useEffect(() => {
    fetchUsers();
    fetchSubtasks();
    fetchMarks();
  }, [fetchUsers, fetchSubtasks, fetchMarks]);
  const dispatch = useDispatch<AppDispatch>();
  const { setScreen } = useScreenBlock();
  const handleFuncCardClick = () => {
    setShowModalFunctions(true);
    setScreen(true);
    document.body.style.overflow = 'hidden';
  };
  const handleEditCardClick = () => {
    setShowModal(true);
    setScreen(true);
    document.body.style.overflow = 'hidden';
  };
  const handleOnDelete = () => {
    const deleteThisCard = async (card: ICard) => {
      dispatch(deleteCard({ card }));
    };
    deleteThisCard(card);
  };
  const handleCheckDeadlineClick = () => {
    const updateThisCard = async (card: ICardDTO) => {
      dispatch(updateCard({ card }));
    };
    const updatedCard: ICardDTO = {
      id: card.id,
      categoryId: card.categoryId,
      boardId: card.boardId,
      priority: card.priority,
      title: card.title,
      desc: card.desc,
      order: card.order,
      status: CardsUtils.chooseStatus(
        card.deadlineInfo!.status,
        card.deadlineInfo!.deadline_date,
        card.deadlineInfo?.deadline_time,
      ),
      deadline_date: card.deadlineInfo!.deadline_date,
      deadline_time: card.deadlineInfo?.deadline_time,
    };
    updateThisCard(updatedCard);
  };
  return (
    <>
      <ModalCard
        showModal={showModal}
        setShowModal={setShowModal}
        card={card}
      />
      <ModalCardFunctions
        showModal={showModalFunctions}
        setShowModal={setShowModalFunctions}
        card={card}
        users={users}
        fetchUsers={fetchUsers}
        subTasks={subTasks}
        fetchSubtasks={fetchSubtasks}
        marks={marks}
        fetchMarks={fetchMarks}
      />
      <Draggable
        draggableId={card.id.toString()}
        key={card.id.toString()}
        index={index}
      >
        {(provided) => (
          <S.CardContainer
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <S.CardContentWrapper>
              {(card.priority ||
                (marks.length !== 0 && marks !== undefined)) && (
                <S.CardBadgeContainer data-testid='badge-container'>
                  {card.priority && (
                    <S.CardBadge
                      key={index}
                      $type={card.priority}
                      data-testid='badge'
                    >
                      <S.CardBadgeText>{card.priority}</S.CardBadgeText>
                    </S.CardBadge>
                  )}
                  {marks.length !== 0 &&
                    marks !== undefined &&
                    marks.map((mark) => (
                      <S.CustomCardBadge
                        key={mark.id}
                        $bgColor={mark.bgColor}
                        $titleColor={mark.titleColor}
                      >
                        <S.CardBadgeText>{mark.title}</S.CardBadgeText>
                      </S.CustomCardBadge>
                    ))}
                </S.CardBadgeContainer>
              )}
              <S.CardTitle>{card.title}</S.CardTitle>
              {card.desc && (
                <S.CardDescription data-testid='desc'>
                  {card.desc}
                </S.CardDescription>
              )}
              <S.CardFooter role='footer-of-card'>
                {users !== undefined && users.length !== 0 && (
                  <S.CardInfoUsersOrSubtasks>
                    <S.CardDescription>{users.length}</S.CardDescription>
                    <FaClipboardUser />
                  </S.CardInfoUsersOrSubtasks>
                )}
                {subTasks !== undefined && subTasks.length !== 0 && (
                  <S.CardInfoUsersOrSubtasks>
                    <S.CardDescription>{subTasks.length}</S.CardDescription>
                    <FaClipboardList />
                  </S.CardInfoUsersOrSubtasks>
                )}
                {card.deadlineInfo && (
                  <S.DateTimeContainer
                    role='button'
                    data-testid='date-time-container'
                    $status={card.deadlineInfo.status}
                    onClick={handleCheckDeadlineClick}
                  >
                    <S.DateTimeTextContainer>
                      <FaRegCalendar />
                      {card.deadlineInfo.deadline_date}
                    </S.DateTimeTextContainer>
                    {card.deadlineInfo.deadline_time && (
                      <S.DateTimeTextContainer>
                        <FaClock />
                        {card.deadlineInfo.deadline_time}
                      </S.DateTimeTextContainer>
                    )}
                  </S.DateTimeContainer>
                )}
              </S.CardFooter>
            </S.CardContentWrapper>
            <S.CardNavButtons>
              <IconButton
                $size={14}
                buttonType={EType.edit}
                onActionDoNext={handleEditCardClick}
              />
              <IconButton
                $size={14}
                buttonType={EType.delete}
                onActionDoNext={handleOnDelete}
              />
              <IconButton
                $size={14}
                buttonType={EType.custom}
                onActionDoNext={handleFuncCardClick}
              />
            </S.CardNavButtons>
          </S.CardContainer>
        )}
      </Draggable>
    </>
  );
}
