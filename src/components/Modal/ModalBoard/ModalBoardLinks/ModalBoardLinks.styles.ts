import styled from 'styled-components';

export const Container = styled.div`
  max-height: 300px;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const LinkItem = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  padding: 12px;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
