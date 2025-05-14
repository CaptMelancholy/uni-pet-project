import styled from 'styled-components';
import { EPriority } from '../../Card/Card.types';


export const Container = styled.div<{$color : string}>`
    background-color: ${({$color}) => $color};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px;
    margin-bottom: 10px;
`;

export const CardBadge = styled.div<{ $type: EPriority }>`
  background-color: ${({theme, $type}) => {
    switch ($type) {
      case EPriority.critical:
        return theme.colors.red;
      case EPriority.high:
        return theme.colors.orange;
      case EPriority.medium:
        return theme.colors.yellow;
      case EPriority.low:
        return theme.colors.green;
    }
  }};
  color: ${({theme}) => theme.colors.text_on_bright};
  display: flex;
  align-items: center;
  flex-basis: 25%;
  text-align: center;
  justify-content: center;
  border-radius: 5px;
`;

export const CardTitle = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text_on_dark};
`;

export const CardDescription = styled.p`
  font-weight: 100;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text_on_dark};
`;