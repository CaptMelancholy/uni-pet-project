import styled from 'styled-components';

export const ModalCardTitleInfo = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const DescContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const DataContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const BadgesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const BadgeColor = styled.div<{ $color : string }>`
  display: flex;
  gap: 5px;
  background-color: ${ (props) => props.$color };
  color: ${ ({ theme }) => theme.colors.primary };
`