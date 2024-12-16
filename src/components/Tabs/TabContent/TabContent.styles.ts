import styled from 'styled-components';

export const ContentWrapper = styled.div`
  padding: 33px;
`;

export const Content = styled.div`
  display: none;
  transition: 0.3s ease-in-out;
  &.active {
    display: flex;
    flex-direction: column;
  }
`;
