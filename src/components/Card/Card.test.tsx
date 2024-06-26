import { describe, expect, test } from 'vitest';
import Card from './Card';
import { screen } from '@testing-library/react';
import { EStatuses, ICard } from './Card.types';
import { specifiedCardRender } from '../../tests/Render';

describe('Cards tests', () => {
  test('render card with title, description, badges and deadline info with status, date and time', () => {
    const cardTestingObject: ICard = {
      id: 0,
      categoryId: 0,
      spaceId: 0,
      badges: [
        {
          color: '#000000',
          text: 'Badge 1',
        },
      ],
      title: 'Card Title',
      desc: 'Card Description',
      deadlineInfo: {
        status: EStatuses.Completed,
        deadline_date: '22 jan 2024',
        deadline_time: '00:00',
      },
    };

    specifiedCardRender(
      <Card
        index={0}
        card={cardTestingObject}
      />,
    );

    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByText('Card Description')).toBeInTheDocument();
    expect(screen.getByText('Badge 1')).toBeInTheDocument();
    expect(screen.getByText('22 jan 2024')).toBeInTheDocument();
    expect(screen.getByText('00:00')).toBeInTheDocument();
  });
  test('render card with title, badges and deadline info with status, date and time, but without description', () => {
    const cardTestingObject: ICard = {
      id: 0,
      categoryId: 0,
      spaceId: 0,
      badges: [
        {
          color: '#000000',
          text: 'Badge 1',
        },
      ],
      title: 'Card Title',
      deadlineInfo: {
        status: EStatuses.Completed,
        deadline_date: '22 jan 2024',
        deadline_time: '00:00',
      },
    };

    specifiedCardRender(
      <Card
        index={0}
        card={cardTestingObject}
      />,
    );

    expect(screen.queryByTestId('desc')).toBeNull();
  });
  test('render card with title, badges, but without time of deadline info', () => {
    const cardTestingObject: ICard = {
      id: 0,
      categoryId: 0,
      spaceId: 0,
      badges: [
        {
          color: '#000000',
          text: 'Badge 1',
        },
      ],
      title: 'Card Title',
      deadlineInfo: {
        status: EStatuses.Completed,
        deadline_date: '22 jan 2024',
      },
    };

    specifiedCardRender(
      <Card
        index={0}
        card={cardTestingObject}
      />,
    );

    expect(screen.getByTestId('date-time-container')).toBeInTheDocument();
    expect(screen.getByText('22 jan 2024')).toBeInTheDocument();
  });

  test('render card but with empty badges', () => {
    const cardTestingObject: ICard = {
      id: 0,
      categoryId: 0,
      spaceId: 0,
      badges: [],
      title: 'Card Title',
      deadlineInfo: {
        status: EStatuses.Completed,
        deadline_date: '22 jan 2024',
      },
    };

    specifiedCardRender(
      <Card
        index={0}
        card={cardTestingObject}
      />,
    );

    expect(screen.queryByTestId('badge-container')).toBeNull();
  });

  test('render card with status completed deadlines', () => {
    const cardTestingObject: ICard = {
      id: 0,
      categoryId: 0,
      spaceId: 0,
      badges: [],
      title: 'Card Title',
      deadlineInfo: {
        status: EStatuses.Completed,
        deadline_date: '22 jan 2024',
      },
    };

    specifiedCardRender(
      <Card
        index={0}
        card={cardTestingObject}
      />,
    );
    expect(screen.getByTestId('date-time-container')).toHaveStyle(
      'background-color: #93E1C0; color: #4BCE97',
    );
  });

  test('render card with status deadline', () => {
    const cardTestingObject: ICard = {
      id: 0,
      categoryId: 0,
      spaceId: 0,
      badges: [],
      title: 'Card Title',
      deadlineInfo: {
        status: EStatuses.Deadline,
        deadline_date: '22 jan 2024',
      },
    };
    specifiedCardRender(
      <Card
        index={0}
        card={cardTestingObject}
      />,
    );
    expect(screen.getByTestId('date-time-container')).toHaveStyle(
      'background-color: #EFB4B4; color: #CC0707',
    );
  });

  test('render card with status in progress', () => {
    const cardTestingObject: ICard = {
      id: 0,
      categoryId: 0,
      spaceId: 0,
      badges: [],
      title: 'Card Title',
      deadlineInfo: {
        status: EStatuses.InProgress,
        deadline_date: '22 jan 2024',
      },
    };
    specifiedCardRender(
      <Card
        index={0}
        card={cardTestingObject}
      />,
    );
    expect(screen.getByTestId('date-time-container')).toHaveStyle(
      'background-color: #B1B3C5; color: #646570',
    );
  });

  test('render without date and time', () => {
    const cardTestingObject: ICard = {
      id: 0,
      categoryId: 0,
      spaceId: 0,
      badges: [],
      title: 'Card Title',
    };
    specifiedCardRender(
      <Card
        index={0}
        card={cardTestingObject}
      />,
    );
    expect(screen.queryByTestId('date-time-container')).toBeNull();
  });
});
