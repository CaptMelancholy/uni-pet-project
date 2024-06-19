import styled from 'styled-components';

export const CategoryListContainer = styled.div`
  display: grid;
  grid-gap: 16px;
  padding: 16px;
  grid-template-columns: repeat(auto-fill, minmax(425px, 1fr));
  grid-auto-flow: column;
  grid-auto-columns: minmax(425px, 1fr);
  overflow-x: auto;
  align-items: start;
  justify-items: center;
  max-height: 100%;
`;
