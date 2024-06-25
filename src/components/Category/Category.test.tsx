import { cleanup, render, screen } from '@testing-library/react';
import { test } from 'vitest';
import { ICategory } from './Category.types';
import Category from './Category';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../styles/theme';

describe('Category tests', () => {
  afterEach(() => {
    cleanup();
  });

  test('render with cards', () => {
    const category: ICategory = {
      id: 0,
      title: '123',
      cards: [
        {
          id: 0,
          parent_id: 0,
          badges: [],
          title: '567',
        },
        {
          id: 1,
          parent_id: 0,
          badges: [],
          title: '789',
        },
      ],
    };

    render(
      <ThemeProvider theme={lightTheme}>
        <Category category={category} />
      </ThemeProvider>,
    );

    expect(screen.getByText('123')).toBeInTheDocument();
    expect(screen.getByTestId('cards-list')).toBeInTheDocument();
    expect(screen.getByTestId('cards-list').childNodes.length).toBe(2);
  });

  test('render without cards', () => {
    const category: ICategory = {
      id: 0,
      title: '123',
      cards: [],
    };

    render(
      <ThemeProvider theme={lightTheme}>
        <Category category={category} />
      </ThemeProvider>,
    );

    expect(screen.getByText('123')).toBeInTheDocument();
    expect(screen.getByTestId('cards-list').childNodes.length).toBe(0);
  });
});
