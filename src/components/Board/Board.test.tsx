import { cleanup, render, screen } from '@testing-library/react';
import { test } from 'vitest';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../styles/theme';
import Board from './Board';
import { ICategory } from '../Category/Category.types';

describe('Category tests', () => {
  afterEach(() => {
    cleanup();
  });

  test('render with categories', () => {
    const categories: Array<ICategory> = [
        {
            id: 0,
            title: '123',
            cards: [],
        },
        {
            id: 1,
            title: '1234',
            cards: [],
        },
    ];

    render(
      <ThemeProvider theme={lightTheme}>
        <Board categories={categories} />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('board')).toBeInTheDocument();
    expect(screen.getByTestId('board').childNodes.length).toBe(2);
  });

  test('render without categories', () => {
    const categories: Array<ICategory> = [];

    render(
      <ThemeProvider theme={lightTheme}>
        <Board categories={categories} />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('board')).toBeInTheDocument();
    expect(screen.getByTestId('board').childNodes.length).toBe(0);
  });
});
