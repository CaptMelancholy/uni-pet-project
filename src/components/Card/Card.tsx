import * as S from './Card.styles';
import { FaClock, FaRegCalendar } from 'react-icons/fa';
import { ICard } from './Card.types';
import { useState } from 'react';
import ModalCard from '../Modal/ModalCard/ModalCard';
import { useDispatch } from 'react-redux';
import { setScreenStatus } from '../../store/slices/screen/screen.slice';

interface IProps {
  card: ICard;
}

export default function Card({ card }: IProps) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const handleCardClick = () => {
    setShowModal(true);
    dispatch(setScreenStatus(true));
    document.body.style.overflow = 'hidden';
  }
  return (
    <>
      <ModalCard showModal={showModal} setShowModal={setShowModal} card={card} />
      <S.CardContainer role='button' onClick={handleCardClick}>
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
          <S.CardDescription data-testid='desc'>{card.desc}</S.CardDescription>
        )}
        <S.CardFooter role='footer-of-card'>
          {card.deadlineInfo && (
            <S.DateTimeContainer
              data-testid='date-time-container'
              $status={card.deadlineInfo.status}
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
      </S.CardContainer>
    </>
  );
}
