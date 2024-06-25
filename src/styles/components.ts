import styled from 'styled-components';

export const PageTitle = styled.h3`
  font-weight: 500;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.text};
`;

export const InputTitle = styled.input<{ $size: number }>`
  padding: 5px;
  width: 100%;
  border: none;
  background-color: ${({ theme }) => theme.colors.secondary};
  transition: 0.3s ease-in-out;
  font-size: ${(props) => `${props.$size}px`};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Text = styled.p<{
  $weight: number;
  $size: number;
  $color?: string;
}>`
  font-size: ${(props) => `${props.$size}px`};
  font-weight: ${(props) => `${props.$weight}`};
  color: ${(props) =>
    props.$color ? props.$color : props.theme.colors.primary};
`;

export const Label = styled.label<{
  $weight: number;
  $size: number;
  $color?: string;
}>`
  font-size: ${(props) => `${props.$size}px`};
  font-weight: ${(props) => `${props.$weight}`};
  color: ${(props) =>
    props.$color ? props.$color : props.theme.colors.primary};
`;

export const Legend = styled.legend`
  background-color: ${ ({ theme }) => theme.colors.primary };
`;

export const Error = styled.label`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.red};
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  border: 1px dashed ${({ theme }) => theme.colors.secondary};
  text-align: center;
  min-width: 425px;
  padding: 10px 0;
  height: 15%;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: #d5d5d5;
  }

  &:active {
    box-shadow: 0px 0px 50px 10px rgba(213, 213, 213, 1);
  }
`;

export const SaveButton = styled.button`
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  transition: 0.3s ease-in-out;
  background-color: #33b249;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #5dbea3;
  }

  &:active {
    box-shadow: 0px 0px 50px 10px #5adbb5;
  }
`;
