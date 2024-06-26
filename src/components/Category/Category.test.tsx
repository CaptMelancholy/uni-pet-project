import { screen } from '@testing-library/react';
import { test } from 'vitest';
import { ICategory } from './Category.types';
import Category from './Category';
import { render } from '../../tests/Render';

describe('Category tests', () => {
  test('category should be shown with cards', () => {
    const category: ICategory = {
      id: 0,
      title: 'Category title',
      spaceId: 0,
      cards: [
        {
          id: 0,
          categoryId: 0,
          spaceId: 0,
          badges: [],
          title: 'Card 1',
        },
        {
          id: 1,
          categoryId: 0,
          spaceId: 0,
          badges: [],
          title: 'Card 2',
        },
      ],
    };
    render(<Category category={category} />);

    expect(screen.getByText('Category title')).toBeInTheDocument();
    expect(screen.getByText('Card 1')).toBeInTheDocument();
    expect(screen.getByText('Card 2')).toBeInTheDocument();
    expect(screen.getByTestId('cards-list')).not.toBeEmptyDOMElement();
  });

  test('category should be shown even without any cards', () => {
    const category: ICategory = {
      id: 0,
      title: 'Empty Category Title',
      spaceId: 0,
      cards: [],
    };

    render(<Category category={category} />);

    expect(screen.getByText('Empty Category Title')).toBeInTheDocument();
    expect(screen.getByTestId('cards-list')).toBeEmptyDOMElement();
  });
});
