import styled from 'styled-components';
import { Button } from '../../styles/components';

export const Container = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: thin;
  align-items: flex-start;
`;

export const AddingButton = styled(Button)`
  min-width: 362px;
  height: 100%;
`;
