import styled from 'styled-components';

export const ContentWrapper = styled.div`
  padding: 33px;
  display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    min-height: 0;
`;

export const Content = styled.div`
  display: none;
  transition: 0.3s ease-in-out;
  &.active {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    min-height: 0;
  }
`;
