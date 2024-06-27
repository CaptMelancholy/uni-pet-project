import { screen } from '@testing-library/react';
import { test } from 'vitest';
import Board from './Board';
import { render } from '../../tests/Render';
import IBoard from './Board.types';
import EColors from '../../styles/badge-colors';

describe('Board tests', () => {
  test('board should render specified categories', () => {
    const board: IBoard = {
      id: 0,
      title: '',
      color: EColors.red,
      categories: [
        {
          id: 0,
          title: 'Category 1',
          spaceId: 0,
          cards: [],
        },
        {
          id: 1,
          title: 'Category 2',
          spaceId: 0,
          cards: [],
        },
      ]
    };

    render(<Board board={board} />);

    expect(screen.getByTestId('board')).toBeInTheDocument();
    expect(screen.getByText('Category 1')).toBeInTheDocument();
    expect(screen.getByText('Category 2')).toBeInTheDocument();
  });
});
