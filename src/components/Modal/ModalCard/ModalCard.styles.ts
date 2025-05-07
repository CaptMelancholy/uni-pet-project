import styled from 'styled-components';

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const ModalCardTitleInfo = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const DescContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 100%;
`;

export const PriorityContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 100%;
`;

export const DataContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;
`;

export const InputDateTimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
`;

export const BadgesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const BadgeColor = styled.div<{ $color: string }>`
  display: flex;
  gap: 5px;
  background-color: ${(props) => props.$color};
  color: ${({ theme }) => theme.colors.primary};
`;

export const DateTimeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const PriorityDescWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
