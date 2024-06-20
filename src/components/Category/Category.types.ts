import { ICard } from '../Card/Card.types';

export interface ICategory {
    id: number;
    title: string;
    cards: Array<ICard>;
}