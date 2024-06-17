import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CategoryContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 2px;
  padding: 10px;
  max-height: calc(100vh - 150px);
  width: 425px;
`;

export const CategoryTitle = styled.h3`
  font-weight: 700;
  text-transform: capitalize;
  font-size: 28px;
  margin-bottom: 10px;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-height: calc(100vh - 274px);
  padding-top: 2px;
  padding-bottom: 2px;
  padding-right: 8px;
  gap: 10px;
`;
