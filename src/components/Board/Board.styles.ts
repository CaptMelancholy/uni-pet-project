import styled from 'styled-components';
import { Button } from '../../styles/components';

export const BoardContainer = styled.div`
  display: flex;
  gap: 50px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 30px;
  padding-bottom: 16px;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: thin;
  flex: 1 1;
  min-height: 0;
`;

export const ButtonOnField = styled(Button)`
  min-width: 425px;
`;