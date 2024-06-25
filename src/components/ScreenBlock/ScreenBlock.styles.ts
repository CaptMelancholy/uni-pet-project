import styled from 'styled-components';

export const ScreenBlockContainer = styled.div<{ $show: boolean }>`
  position: absolute;
  width: 100vw;
  height: 100vh;
  opacity: 0.75;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.primary};
  display: ${(props) => (props.$show ? 'block' : 'none')};
`;
