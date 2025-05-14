import { Text } from '../../../styles/components';
import { ETypeBoardAccount } from './../../AddAccountBoardForm/AddAccountBoardForm.types';
import styled from 'styled-components';

export const BoardAccount = styled.div<{ $type: ETypeBoardAccount }>`
  min-width: 425px;
  padding: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: ${({ $type, theme }) =>
    ($type === ETypeBoardAccount.Crediting
      ? theme.colors.green
      : theme.colors.red)};
  border-radius: 10px;
`;

export const InfoContainer = styled.div`
    color: ${({theme}) => theme.colors.text_on_bright};
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const TextInfo = styled(Text)`
    color: inherit;
`;  

export const Settings = styled.div`
  margin-left: auto;
  display: flex;
`;
