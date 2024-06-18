import { describe, expect, test } from 'vitest';
import Card from './Card';
import { render, screen, cleanup } from '@testing-library/react';
import { EStatuses, ICard } from './Card.types';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../styles/theme';

const cardTestingObject: ICard = {
  id: 0,
  parent_id: 0,
  badges: [
    {
      color: '#000000',
      text: 'something',
    },
  ],
  title: '123',
  desc: 'Hi',
  deadlineInfo: {
    status: EStatuses.Completed,
    deadline_date: '22 jan 2024',
    deadline_time: '00:00',
  },
};

describe('Card tests', () => {
  afterEach(() => {
    cleanup();
  });

  test('render with full parameters', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Card card={cardTestingObject} />
      </ThemeProvider>,
    );

    expect(screen.getByRole('title')).toBeInTheDocument();
    expect(screen.getByRole('desc')).toBeInTheDocument();
    expect(screen.getAllByRole('badge')).not.toBeNull();
    const badges = screen.getAllByRole('badge');
    expect(badges.length).toBeGreaterThanOrEqual(1);

    expect(screen.getByRole('date-time-container')).toBeInTheDocument();
    expect(screen.getByRole('date-container')).toBeInTheDocument();
    expect(screen.getByRole('time-container')).toBeInTheDocument();
  });
  test('render without desc', () => {
    cardTestingObject.desc = undefined;
    render(
      <ThemeProvider theme={lightTheme}>
        <Card card={cardTestingObject} />
      </ThemeProvider>,
    );
    expect(screen.queryByRole('desc')).toBeNull();
  });
  test('render without time', () => {
    cardTestingObject.deadlineInfo!.deadline_time = undefined;
    render(
      <ThemeProvider theme={lightTheme}>
        <Card card={cardTestingObject} />
      </ThemeProvider>,
    );
    expect(screen.getByRole('date-time-container')).toBeInTheDocument();
    expect(screen.getByRole('date-container')).toBeInTheDocument();
    expect(screen.queryByRole('time-container')).toBeNull();
  });

  

  test('render with empty badges', () => {});

  test('render with completed deadlines', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Card card={cardTestingObject} />
      </ThemeProvider>,
    );
    expect(screen.getByRole('date-time-container')).toHaveAttribute(
      'status',
      EStatuses.Completed,
    );
    expect(screen.getByRole('date-time-container')).toHaveStyle(
      'background-color: #93E1C0; color: #4BCE97',
    );
  });
  test('render with deadlines', () => {
    cardTestingObject.deadlineInfo!.status = EStatuses.Deadline;
    render(
      <ThemeProvider theme={lightTheme}>
        <Card card={cardTestingObject} />
      </ThemeProvider>,
    );
    expect(screen.getByRole('date-time-container')).toHaveAttribute(
      'status',
      EStatuses.Deadline,
    );
    expect(screen.getByRole('date-time-container')).toHaveStyle(
      'background-color: #EFB4B4; color: #CC0707',
    );
  });
  test('render with in progress', () => {
    cardTestingObject.deadlineInfo!.status = EStatuses.InProgress;
    render(
      <ThemeProvider theme={lightTheme}>
        <Card card={cardTestingObject} />
      </ThemeProvider>,
    );
    expect(screen.getByRole('date-time-container')).toHaveAttribute(
      'status',
      EStatuses.InProgress,
    );
    expect(screen.getByRole('date-time-container')).toHaveStyle(
      'background-color: #B1B3C5; color: #646570',
    );
  });

  test('render without date and time', () => {
    cardTestingObject.deadlineInfo = undefined;
    render(
      <ThemeProvider theme={lightTheme}>
        <Card card={cardTestingObject} />
      </ThemeProvider>,
    );
    expect(screen.queryByRole('date-time-container')).toBeNull();
    expect(screen.queryByRole('date-container')).toBeNull();
    expect(screen.queryByRole('time-container')).toBeNull();
  });
});
