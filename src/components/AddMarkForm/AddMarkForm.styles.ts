import styled from 'styled-components';
import { InputField, Text } from '../../styles/components';

export const AddMarkContainer = styled.form`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  padding: 20px;
  min-width: 425px;
  display: flex;
  flex-direction: column;
  flex: 0 1;
  gap: 20px;
  max-height: 100%;
  align-self: flex-start;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const FormInput = styled(InputField)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FormText = styled(Text)`
  color: ${({ theme }) => theme.colors.text_on_bright};
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;