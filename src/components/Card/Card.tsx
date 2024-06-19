import * as S from './Card.styles';
import { FaClock, FaRegCalendar } from 'react-icons/fa';
import { ICard } from './Card.types';

interface IProps {
  card: ICard
}

export default function Card({ card }: IProps) {
  return (
 
      <S.CardContainer>
        <S.CardBadgeContainer>
          {card.badges.length !== 0 &&
            card.badges.map(({ color, text }, index) => {
              return (
                <S.CardBadge key={index} color={color} role='badge'>
                  <S.CardBadgeText>{text}</S.CardBadgeText>
                </S.CardBadge>
              );
            })}
        </S.CardBadgeContainer>
        <S.CardTitle role='title'>{card.title}</S.CardTitle>
        {card.desc && <S.CardDescription role='desc'>{card.desc}</S.CardDescription>}
        <S.CardFooter role='footer-of-card'>
          {card.deadlineInfo && (
            <S.DateTimeContainer role='date-time-container' $status={card.deadlineInfo.status}>
              <S.DateTimeTextContainer role='date-container'>
                <FaRegCalendar />
                {card.deadlineInfo.deadline_date}
              </S.DateTimeTextContainer>
              {card.deadlineInfo.deadline_time && (
                <S.DateTimeTextContainer role='time-container'>
                  <FaClock />
                  {card.deadlineInfo.deadline_time}
                </S.DateTimeTextContainer>
              )}
            </S.DateTimeContainer>
          )}
        </S.CardFooter>
      </S.CardContainer>
  );
}
