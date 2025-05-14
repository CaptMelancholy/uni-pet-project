import { ICard } from '../Card/Card.types';

export interface ICategory {
  id: number;
  title: string;
  boardId: number;
  cards: Array<ICard>;
}

export interface ICategoryDTO {
  id: number;
  title: string;
  boardId: number;
}