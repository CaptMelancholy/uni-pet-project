import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    flex: 1 1;
    text-align: center;
`;

export const Container = styled.div`
    padding: 26px 10px 40px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.secondary};
`;