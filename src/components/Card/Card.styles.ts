import styled from 'styled-components';
import { EStatuses } from './Card.types';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  gap: 5px;
  border-radius: 10px;
`;

CardContainer.displayName = "CardContainer"

export const CardBadgeContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 3px;
`;

CardBadgeContainer.displayName = "CardBadgeContainer"

export const CardBadge = styled.div`
  background-color: ${(props) => props.color || props.theme.colors.grey};
  display: flex;
  align-items: center;
  flex-basis: 25%;
  text-align: center;
  justify-content: center;
  border-radius: 5px;
`;

CardBadge.displayName = "CardBadge"

export const CardBadgeText = styled.p`
  font-weight: 600;
  font-size: 8px;
  text-transform: uppercase;
  color: black;
`;

CardBadgeText.displayName = "CardBadgeText"

export const CardTitle = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
`;

CardTitle.displayName = "CardTitle"

export const CardDescription = styled.p`
  font-weight: 100;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
`;

CardDescription.displayName = "CardDescription"

export const CardFooter = styled.div`
  display: flex;
  // justify-content: space-around;
  flex-direction: row;
  align-items: center;
`;

CardFooter.displayName = "CardFooter"

export const DateTimeContainer = styled.div<{ $status: EStatuses }>`
  display: flex;
  padding: 2px 5px;
  gap: 5px;
  background-color: ${(props) => {
    switch(props.$status) {
      case EStatuses.Completed: {
        return props.theme.colors.comp_background;
      }
      case EStatuses.InProgress: {
        return props.theme.colors.in_progress_background;
      }
      case EStatuses.Deadline: {
        return props.theme.colors.deadline_background;
      }
      default: {
        return props.theme.colors.in_progress_background;
      }
    }
  }};
  color: ${(props) => {
    switch(props.$status) {
      case EStatuses.Completed: {
        return props.theme.colors.comp_text;
      }
      case EStatuses.InProgress: {
        return props.theme.colors.in_progress_text;
      }
      case EStatuses.Deadline: {
        return props.theme.colors.red_text_deadline;
      }
      default: {
        return props.theme.colors.in_progress_text;
      }
    }
  }};
  font-weight: 700;
  font-size: 10px;
  border-radius: 5px;
`;

DateTimeContainer.displayName = "DateTimeContainer"

export const DateTimeTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

DateTimeTextContainer.displayName = "DateTimeTextContainer";
