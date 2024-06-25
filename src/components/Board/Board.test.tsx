import { screen } from '@testing-library/react';
import { test } from 'vitest';
import Board from './Board';
import { ICategory } from '../Category/Category.types';
import { render } from '../../tests/Render';

describe('Board tests', () => {

  test('board should render specified categories', () => {
    const categories: Array<ICategory> = [
        {
            id: 0,
            title: 'Category 1',
            cards: [],
        },
        {
            id: 1,
            title: 'Category 2',
            cards: [],
        },
    ];

    render(<Board categories={categories} />);

    expect(screen.getByTestId('board')).toBeInTheDocument();
    expect(screen.getByText('Category 1')).toBeInTheDocument();
    expect(screen.getByText('Category 2')).toBeInTheDocument();
  });
});
