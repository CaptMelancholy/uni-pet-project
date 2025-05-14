import styled from 'styled-components';

export const Container = styled.div`
  .rbc-calendar {
    color: ${({ theme }) => theme.colors.text};
    height: 60vh;
  }
  .rbc-header.rbc-today {
    background-color: ${({ theme }) => theme.colors.primary};
  }
  .rbc-toolbar-label {
    color: ${({ theme }) => theme.colors.text};
  }
  .rbc-toolbar button {
    background-color: ${({ theme }) => theme.colors.categories};
    border: 0;
    &:hover {
      background-color: ${({ theme }) => theme.colors.in_progress_background};
    }
  }
  .rbc-day-bg.rbc-today {
    background-color: ${({ theme }) => theme.colors.primary};
  }
  .rbc-toolbar button.rbc-active {
    background-color: ${({ theme }) => theme.colors.in_progress_background};
  }
  .rbc-day-bg.rbc-off-range-bg {
    background-color: ${({ theme }) => theme.colors.disabled};
  }
`;
