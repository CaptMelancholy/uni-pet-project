import styled from 'styled-components';
import { Button } from '../../styles/components';


export const CategoryContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 2px;
  padding: 10px;
  min-width: 425px;
  display: flex;
  flex-direction: column;
  flex: 0 1;
`;

export const CategoryNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const CategoryNavButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CategoryTitle = styled.h3`
  font-weight: 700;
  text-transform: capitalize;
  font-size: 28px;
`;

export const CardsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  scrollbar-width: thin;
`;

export const AddCardButton = styled(Button)`
  margin-top: 20px;
  min-width: 100% !important;
`