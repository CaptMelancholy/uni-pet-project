import React from 'react';
import * as S from './styles';
import { useTheme } from 'styled-components';
import { FaClock, FaRegCalendar } from 'react-icons/fa';

export default function Card() {
  const theme = useTheme();

  return (
    <S.Wrapper>
      <S.CardContainer>
        <S.CardBadgeContainer>
          <S.CardBadge color={theme.colors.red}>
            <S.CardBadgeText color={theme.colors.red}>
              DEADLINE IS HERE!
            </S.CardBadgeText>
          </S.CardBadge>
          <S.CardBadge color={theme.colors.cyan}>
            <S.CardBadgeText color={theme.colors.cyan}>
              DEADLINE IS HERE!
            </S.CardBadgeText>
          </S.CardBadge>
        </S.CardBadgeContainer>
        <S.CardTitle>Something</S.CardTitle>
        <S.CardDescription>One more something</S.CardDescription>
        <S.CardFooter>
          <S.DateTimeContainer color={theme.colors.deadline_background}>
            <S.DateTimeTextContainer color={theme.colors.red_text_deadline}>
              <FaRegCalendar />
              Jan 29th, 2022
            </S.DateTimeTextContainer>
            <S.DateTimeTextContainer color={theme.colors.red_text_deadline}>
              <FaClock />
              00:00
            </S.DateTimeTextContainer>
          </S.DateTimeContainer>
        </S.CardFooter>
      </S.CardContainer>
    </S.Wrapper>
  );
}
