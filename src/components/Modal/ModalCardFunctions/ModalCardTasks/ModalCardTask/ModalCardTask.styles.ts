import styled from 'styled-components';

export const SubtaskContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  border-radius: 10px;
`;

export const TextContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 4px 8px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.text_on_bright};
`;

export const CheckButton = styled.div<{ $isDone: boolean }>`
  padding: 2px 2px;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  cursor: pointer;
  background-color: ${({ theme, $isDone }) => {
    if($isDone) {
        return theme.colors.green;
    } else {
        return theme.colors.grey;
    }
  }};
  & > svg {
    display: ${({ $isDone }) => $isDone ? 'flex' : 'none'};
  }
`;

export const Settings = styled.div`
    display: flex;
    align-self: center;
    justify-content: center;
`;
