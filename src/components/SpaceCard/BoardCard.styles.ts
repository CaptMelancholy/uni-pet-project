import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BoardCardContainer = styled.div<{ $color: string }>`
  background-color: ${(props) => props.$color};
  border-radius: 10px;
  min-width: 362px;
  display: flex;
  flex-direction: column;
  flex: 0 1;
  align-self: flex-start;
  padding: 20px;
  justify-content: space-between;
  height: 100%;
`;

export const BoardCardNav = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const SettingBoardCardNav = styled.div`
  display: flex;
  gap: 10px;
`;

export const BoardCardNavLink = styled(Link)<{ $size: number }>`
  display: flex;
  cursor: pointer;
  background: none;
  color: #000000;
  transition: 0.3s ease-in-out;
  &:hover > svg {
    color: ${({ theme }) => theme.colors.blue};
  }
  & > svg {
    width: ${(props) => `${props.$size}px`};
    height: auto;
    transition: 0.3s ease-in-out;
  }
`;
