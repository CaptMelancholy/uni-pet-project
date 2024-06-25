import styled from 'styled-components';
import { EType } from './IconButton.types';

export const CrossContainer = styled.button<{ $size : number, $type : EType }>`
  display: flex;
  cursor: pointer;
  background: none;
  color: #000000;
  transition: .3s ease-in-out;
  &:hover > svg {
    color: ${({ theme, $type }) => {
      switch($type) {
        case(EType.close):
        case(EType.delete):
          return theme.colors.red;
        case(EType.edit):
          return theme.colors.blue;
      }
    }};
  }
  & > svg {
    width: ${ (props) => `${props.$size}px` };
    height: auto;
    transition: .3s ease-in-out;
  }
`;