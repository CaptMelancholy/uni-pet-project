import styled from 'styled-components';
import { Text } from '../../styles/components';

export const AddCardForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  gap: 10px;
  border-radius: 10px;
  margin-top: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const FormText = styled(Text)`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
