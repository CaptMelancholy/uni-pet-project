import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex: 1 1;
`;

export const Container = styled.div`
    padding: 26px 0 40px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.secondary};
    width: 544px;
`;