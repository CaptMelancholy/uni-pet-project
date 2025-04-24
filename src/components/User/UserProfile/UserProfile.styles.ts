import styled from 'styled-components';
import { Text } from '../../../styles/components';

export const ProfileUserContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-rows: 1fr auto auto auto 1fr;
  grid-template-columns: repeat(3, 1fr);
`;

export const DescText = styled(Text)`
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