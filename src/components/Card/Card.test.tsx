import { describe, expect, test } from 'vitest';
import Card from './Card';
import { render, screen, cleanup } from '@testing-library/react';
import { EStatuses, ICard } from './Card.types';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../styles/theme';

describe('Card tests', () => {
  afterEach(() => {
    cleanup();
  });

  test('render with full parameters', () => {

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

    render(
      <ThemeProvider theme={lightTheme}>
        <Card index={0} card={cardTestingObject} />
      </ThemeProvider>,
    );

    expect(screen.getByText('123')).toBeInTheDocument();
    expect(screen.getByText('Hi')).toBeInTheDocument();
    expect(screen.getAllByTestId('badge')).not.toBeNull();
    
    const badges = screen.getAllByTestId('badge');
    expect(badges.length).toBeGreaterThanOrEqual(1);

    expect(screen.getByTestId('date-time-container')).toBeInTheDocument();
    expect(screen.getByText('22 jan 2024')).toBeInTheDocument();
    expect(screen.getByText('00:00')).toBeInTheDocument();
  });
  test('render without desc', () => {
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
      deadlineInfo: {
        status: EStatuses.Completed,
        deadline_date: '22 jan 2024',
        deadline_time: '00:00',
      },
    };

    render(
      <ThemeProvider theme={lightTheme}>
        <Card index={0} card={cardTestingObject} />
      </ThemeProvider>,
    );
    expect(screen.queryByTestId('desc')).toBeNull();
  });
  test('render without time', () => {
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
      },
    };

    render(
      <ThemeProvider theme={lightTheme}>
        <Card index={0} card={cardTestingObject} />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('date-time-container')).toBeInTheDocument();
    expect(screen.getByText('22 jan 2024')).toBeInTheDocument();

    const dateTimeContainer = screen.getByTestId('date-time-container');

    expect(dateTimeContainer.childNodes.length).toBe(1);
  });

  

  test('render with empty badges', () => {
    const cardTestingObject: ICard = {
      id: 0,
      parent_id: 0,
      badges: [],
      title: '123',
      desc: 'Hi',
      deadlineInfo: {
        status: EStatuses.Completed,
        deadline_date: '22 jan 2024',
        deadline_time: '00:00',
      }
    };

      render(
        <ThemeProvider theme={lightTheme}>
          <Card index={0} card={cardTestingObject} />
        </ThemeProvider>,
      );

      expect(screen.queryByTestId('badge-container')).toBeNull();
    });


  test('render with completed deadlines', () => {
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

    render(
      <ThemeProvider theme={lightTheme}>
        <Card index={0} card={cardTestingObject} />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('date-time-container')).toHaveStyle(
      'background-color: #93E1C0; color: #4BCE97',
    );
  });


  test('render with deadlines', () => {
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
        status: EStatuses.Deadline,
        deadline_date: '22 jan 2024',
        deadline_time: '00:00',
      },
    };
    render(
      <ThemeProvider theme={lightTheme}>
        <Card index={0} card={cardTestingObject} />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('date-time-container')).toHaveStyle(
      'background-color: #EFB4B4; color: #CC0707',
    );
  });


  test('render with in progress', () => {
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
        status: EStatuses.InProgress,
        deadline_date: '22 jan 2024',
        deadline_time: '00:00',
      },
    };
    render(
      <ThemeProvider theme={lightTheme}>
        <Card index={0} card={cardTestingObject} />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('date-time-container')).toHaveStyle(
      'background-color: #B1B3C5; color: #646570',
    );
  });

  test('render without date and time', () => {
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
    };
    render(
      <ThemeProvider theme={lightTheme}>
        <Card index={0} card={cardTestingObject} />
      </ThemeProvider>,
    );
    expect(screen.queryByTestId('date-time-container')).toBeNull();
  });
});
