import styled from 'styled-components';
import { Button } from '../../styles/components';

export const ButtonOnField = styled(Button)`
  min-width: 425px;
`;

export const MarksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 30px;
  padding-bottom: 16px;
  min-height: 0;
  align-items: flex-start;
`;