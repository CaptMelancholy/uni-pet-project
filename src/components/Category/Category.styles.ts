import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CategoryContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 2px;
  padding: 10px;
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
  flex: 1 1 auto;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  row-gap: 8px;
  scrollbar-width: thin;
  max-height: 100%;
`;
