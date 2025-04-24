import styled from 'styled-components';
import { Text } from '../../../styles/components';

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const ModalContentContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ModalLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

export const FieldText = styled(Text)`
  color: ${({theme}) => theme.colors.text_on_bright};
  text-align: center;
`;