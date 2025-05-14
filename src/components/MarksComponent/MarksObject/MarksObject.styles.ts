import styled from 'styled-components';

export const Mark = styled.div<{ $bgColor: string }>`
  min-width: 425px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $bgColor }) => $bgColor};
  border-radius: 10px;
`;

export const Settings = styled.div`
  margin-left: auto;
  display: flex;
  align-self: center;
`;
