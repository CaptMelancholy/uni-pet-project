import * as S from './Card.styles';
import { FaClock, FaRegCalendar } from 'react-icons/fa';
import { ICard } from './Card.types';
import { useState } from 'react';
import ModalCard from '../Modal/ModalCard/ModalCard';
import { useDispatch } from 'react-redux';
import { setScreenStatus } from '../../store/slices/screen/screen.slice';
import { EType } from '../IconButtons/IconButton.types';
import IconButton from '../IconButtons/IconButton';
import {
  popCard,
  updateCard,
} from '../../store/slices/categories/categories.slice';
import CardsUtils from '../../utils/Cards/CardsUtils';
import { Draggable } from 'react-beautiful-dnd';

interface IProps {
  card: ICard;
  index: number;
}

export default function Card({ index, card }: IProps) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const handleEditCardClick = () => {
    setShowModal(true);
    dispatch(setScreenStatus(true));
    document.body.style.overflow = 'hidden';
  };
  const handleOnDelete = () => {
    dispatch(popCard(card));
  };
  const handleCheckDeadlineClick = () => {
    const updatedCard: ICard = {
      id: card.id,
      parent_id: card.parent_id,
      badges: card.badges,
      title: card.title,
      desc: card.desc,
      deadlineInfo: {
        status: CardsUtils.chooseStatus(
          card.deadlineInfo!.status,
          card.deadlineInfo!.deadline_date,
          card.deadlineInfo?.deadline_time,
        ),
        deadline_date: card.deadlineInfo!.deadline_date,
        deadline_time: card.deadlineInfo?.deadline_time,
      },
    };
    dispatch(updateCard(updatedCard));
  };
  return (
    <>
      <ModalCard
        showModal={showModal}
        setShowModal={setShowModal}
        card={card}
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
              {card.badges.length !== 0 && (
                <S.CardBadgeContainer data-testid='badge-container'>
                  {card.badges.map(({ color, text }, index) => {
                    return (
                      <S.CardBadge
                        key={index}
                        color={color}
                        data-testid='badge'
                      >
                        <S.CardBadgeText>{text}</S.CardBadgeText>
                      </S.CardBadge>
                    );
                  })}
                </S.CardBadgeContainer>
              )}
              <S.CardTitle>{card.title}</S.CardTitle>
              {card.desc && (
                <S.CardDescription data-testid='desc'>
                  {card.desc}
                </S.CardDescription>
              )}
              <S.CardFooter role='footer-of-card'>
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
            </S.CardNavButtons>
          </S.CardContainer>
        )}
      </Draggable>
    </>
  );
}
