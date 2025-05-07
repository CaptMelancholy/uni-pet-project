import styled from 'styled-components';

export const SubtaskContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  border-radius: 10px;
`;

export const SubtaskForm = styled.form`
  width: 100%;
  display: flex;
  gap: 20px;
`;

export const SubtaskList = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 200px;
  gap: 20px;
  overflow-y: auto;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 5px;
  border-radius: 10px;
`;
