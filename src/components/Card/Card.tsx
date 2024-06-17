import * as S from './Card.styles';
import { FaClock, FaRegCalendar } from 'react-icons/fa';
import { ICard } from './Card.types';
import { ReactNode } from 'react';

interface IProps {
  card: ICard
}

export default function Card({ card }: IProps) {
  return (
    <S.Wrapper>
      <S.CardContainer>
        <S.CardBadgeContainer>
          {card.badges.length !== 0 &&
            card.badges.map(({ color, text }): ReactNode => {
              return (
                <S.CardBadge color={color}>
                  <S.CardBadgeText>{text}</S.CardBadgeText>
                </S.CardBadge>
              );
            })}
        </S.CardBadgeContainer>
        <S.CardTitle>{card.title}</S.CardTitle>
        {card.desc && <S.CardDescription>{card.desc}</S.CardDescription>}
        <S.CardFooter>
          {card.deadlineInfo && (
            <S.DateTimeContainer status={card.deadlineInfo.status}>
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
    </S.Wrapper>
  );
}
