import styled from 'styled-components';

export const PageTitle = styled.h3`
  font-weight: 500;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.text};
`;

export const InputTitle = styled.input<{ $size : number }>`
  padding: 5px;
  width: 100%;
  border: none;
  background-color: ${({ theme }) => theme.colors.secondary};
  transition: 0.3s ease-in-out;
  font-size: ${ (props) => `${props.$size}px` };
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Text = styled.p<{ $weight : number, $size: number }>`
  font-size: ${ (props) => `${props.$size}px` };
  font-weight: ${ (props) => `${props.$weight}` };
  color: ${({ theme }) => theme.colors.primary};
`;