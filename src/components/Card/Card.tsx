import * as S from './Card.styles';
import { FaClock, FaRegCalendar } from 'react-icons/fa';
import { ICard } from './Card.types';

interface IProps {
  card: ICard;
}

export default function Card({ card }: IProps) {
  return (
    <S.CardContainer>
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
      {card.desc && <S.CardDescription data-testid='desc'>{card.desc}</S.CardDescription>}
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
  );
}
