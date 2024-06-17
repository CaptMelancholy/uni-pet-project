import styled from 'styled-components';

export const Layout = styled.div`
  min-height: 100vh;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Container = styled.div`
    margin: 0 auto;
    padding: 0 20px;
    max-width: 1600px;
    min-height: 100%;
`;