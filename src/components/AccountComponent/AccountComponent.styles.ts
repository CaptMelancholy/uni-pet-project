import styled from 'styled-components';
import { Button, Text } from '../../styles/components';

export const ButtonOnField = styled(Button)`
  min-width: 425px;
`;

export const AccountContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  min-height: 0;
  align-items: flex-start;
`;

export const AccountTitle = styled(Text)`
    text-align: center;
`;

export const AccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 30px;
  padding-bottom: 16px;
`;
