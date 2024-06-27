import styled from 'styled-components';
import { InputTitle, Text } from '../../styles/components';

export const AddBoardContainer = styled.form`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 2px;
  padding: 10px;
  min-width: 362px;
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

export const FormInput = styled(InputTitle)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FormText = styled(Text)`
  color: ${({ theme }) => theme.colors.primary};
`;

export const FieldSet = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const RadioContainer = styled.div`
    display: flex;
    gap: 5px;
    padding: 10px;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;