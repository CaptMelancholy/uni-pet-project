import { EButtonType } from './../utils/DesignType.types';
import styled from 'styled-components';
import { EInputFieldTypes } from '../utils/DesignType.types';

export const PageTitle = styled.h3`
  font-weight: 500;
  font-size: 36px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

export const InputFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

export const InputTextarea = styled.textarea<{
  $size: number;
  $type: EInputFieldTypes;
}>`
  width: 100%;
  border-radius: 10px;
  border: 2px solid
    ${({ theme, $type }) =>
      $type == EInputFieldTypes.onDark
        ? theme.colors.secondary
        : theme.colors.primary};
  background-color: ${({ theme, $type }) =>
    $type == EInputFieldTypes.onDark
      ? theme.colors.primary
      : theme.colors.secondary};
  transition: 0.3s ease-in-out;
  font-size: 16px;
  font-weight: 400;
  font-family: inherit;
  padding: 10px 15px;
  color: ${({ theme }) => theme.colors.text_on_bright};
  &::placeholder {
    font-family: inherit;
    opacity: 0.5;
    color: ${({ theme }) => theme.colors.text_on_bright};
  }
  &:focus {
    background-color: ${({ theme, $type }) =>
      $type == EInputFieldTypes.onDark
        ? theme.colors.secondary
        : theme.colors.primary};
  }
`;

export const TextField = styled.div<{
  $size: number;
  $type: EInputFieldTypes;
}>`
  width: 100%;
  border-radius: 10px;
  border: 2px solid
    ${({ theme, $type }) =>
      $type == EInputFieldTypes.onDark
        ? theme.colors.secondary
        : theme.colors.primary};
  background-color: ${({ theme, $type }) =>
    $type == EInputFieldTypes.onDark
      ? theme.colors.primary
      : theme.colors.secondary};
  transition: 0.3s ease-in-out;
  font-size: ${({ $size }) => `${$size}px`};
  font-weight: 400;
  font-family: inherit;
  padding: 10px 15px;
  color: ${({ theme }) => theme.colors.text_on_bright};
`;

export const InputField = styled.input<{
  $size: number;
  $type: EInputFieldTypes;
}>`
  width: 100%;
  border-radius: 10px;
  border: 2px solid
    ${({ theme, $type }) =>
      $type == EInputFieldTypes.onDark
        ? theme.colors.secondary
        : theme.colors.primary};
  background-color: ${({ theme, $type }) =>
    $type == EInputFieldTypes.onDark
      ? theme.colors.primary
      : theme.colors.secondary};
  transition: 0.3s ease-in-out;
  font-size: 16px;
  font-weight: 400;
  font-family: inherit;
  padding: 10px 15px;
  color: ${({ theme }) => theme.colors.text_on_bright};
  &::placeholder {
    font-family: inherit;
    opacity: 0.5;
    color: ${({ theme }) => theme.colors.text_on_bright};
  }
  &:focus {
    background-color: ${({ theme, $type }) =>
      $type == EInputFieldTypes.onDark
        ? theme.colors.secondary
        : theme.colors.primary};
  }
`;

export const DateTimeField = styled.input<{ $type: EInputFieldTypes }>`
  border-radius: 10px;
  text-align: center;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme, $type }) =>
    $type == EInputFieldTypes.onDark
      ? theme.colors.secondary
      : theme.colors.primary};
  transition: 0.3s ease-in-out;
  font-size: 16px;
  font-weight: 400;
  width: 200px;
  font-family: inherit;
  padding: 10px;
  color: ${({ theme }) => theme.colors.text_on_bright};
  &:disabled {
    color: ${({ theme }) => theme.colors.grey};
    background-color: ${({ theme, $type }) =>
      $type == EInputFieldTypes.onDark
        ? theme.colors.primary
        : theme.colors.secondary};
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Checkbox = styled.input`
  position: absolute;
  left: -999px;
  z-index: -1;
  opacity: 0;
  & + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
    background: none;
  }

  & + label::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    flex-shrink: 0;
    flex-grow: 0;
    border: 3px solid ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.secondary};
    margin-right: 20px;
  }
  &:checked + label::before {
    background: ${({ theme }) => theme.colors.primary};
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

export const CheckboxLabel = styled.label`
  color: ${({ theme }) => theme.colors.text_on_bright};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
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

export const Error = styled.label`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.red};
`;

export const SuccessLabel = styled(Error)`
  color: ${({ theme }) => theme.colors.green};
`;

export const Button = styled.button<{ $type: EButtonType }>`
  border-radius: 10px;
  padding: 10px;
  text-transform: uppercase;
  transition: 0.3s ease-in-out;
  text-align: center;
  flex: 0 1;
  align-self: ${({ $type }) =>
    $type == EButtonType.add ? 'normal' : 'flex-start'};
  font-size: 16px;
  color: ${({ theme, $type }) =>
    $type == EButtonType.add
      ? theme.colors.text_on_dark
      : theme.colors.text_on_bright};
  border: ${({ theme, $type }) => {
    switch ($type) {
      case EButtonType.dashed:
        return `2px dashed ${theme.colors.secondary}`;
      case EButtonType.add:
        return `none`;
      case EButtonType.empty:
        return `2px solid ${theme.colors.primary}`;
    }
  }};
  background-color: ${({ theme, $type }) => {
    switch ($type) {
      case EButtonType.dashed:
        return theme.colors.primary;
      case EButtonType.add:
        return '#33b249';
      case EButtonType.empty:
        return theme.colors.secondary;
    }
  }};

  &:hover {
    border: none;
    background-color: ${({ theme, $type }) => {
      switch ($type) {
        case EButtonType.dashed:
          return theme.colors.secondary;
        case EButtonType.add:
          return '#5dbea3';
        case EButtonType.empty:
          return theme.colors.primary;
      }
    }};
  }

  &:active {
    box-shadow: 0px 0px 10px 10px
      ${({ theme, $type }) =>
        $type == EButtonType.add
          ? '#5adbb5'
          : $type == EButtonType.dashed
            ? theme.colors.secondary
            : theme.colors.primary};
  }
`;

export const Select = styled.select<{ $type: EInputFieldTypes }>`
  width: 100%;
  border-radius: 10px;
  border: 2px solid
    ${({ theme, $type }) =>
      $type == EInputFieldTypes.onDark
        ? theme.colors.secondary
        : theme.colors.primary};
  background-color: ${({ theme, $type }) =>
    $type == EInputFieldTypes.onDark
      ? theme.colors.primary
      : theme.colors.secondary};
  transition: 0.3s ease-in-out;
  font-size: 16px;
  font-weight: 400;
  font-family: inherit;
  padding: 10px 15px;
  color: ${({ theme }) => theme.colors.text_on_bright};
  cursor: pointer;
  &::placeholder {
    font-family: inherit;
    opacity: 0.5;
    color: ${({ theme }) => theme.colors.text_on_bright};
  }
  &:focus {
    background-color: ${({ theme, $type }) =>
      $type == EInputFieldTypes.onDark
        ? theme.colors.secondary
        : theme.colors.primary};
  }
  & > option {
    border: 2px solid
      ${({ theme, $type }) =>
        $type == EInputFieldTypes.onDark
          ? theme.colors.secondary
          : theme.colors.primary};
  }
`;

export const Option = styled.option`
  border-radius: 10px;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.text_on_bright};
  font-weight: 400;
  font-size: 16px;
`;
