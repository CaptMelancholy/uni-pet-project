import styled from 'styled-components';

export const MarkBadge = styled.div<{ $bgColor : string }>`
  display: flex;
  width: 100px;
  gap: 5px;
  border-radius: 10px;
  align-items: center;
  padding: 5px;
  background-color: ${({ $bgColor }) => $bgColor};
`;

export const Settings = styled.div`
  margin-left: auto;
  display: flex;
  align-self: center;
`;