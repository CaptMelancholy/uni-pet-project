import styled from 'styled-components';
import { Text } from '../../../../styles/components';

export const ProfileFormContainer = styled.form`
  display: grid;
  gap: 20px;
  grid-template-rows: 1fr auto auto auto 1fr;
  grid-template-columns: repeat(3, 1fr);
`;

export const FormText = styled(Text)`
  color: ${({ theme }) => theme.colors.text_on_bright};
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: space-between;
`;

export const TopBlock = styled(InfoContainer)`
  grid-column: 1 / 4;
`;

export const MiddleBlocks = styled(InfoContainer)<{ $gridColumn: string }>`
  grid-column: ${({ $gridColumn }) => $gridColumn};
`;

export const BottomBlock = styled(InfoContainer)`
  grid-column: 1 / 4;
`;
