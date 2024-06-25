import EColors from '../../styles/badge-colors';
import { ICategory } from '../Category/Category.types';

interface IBoard {
  id: number;
  title: string;
  desc?: string;
  color: EColors;
  categories: Array<ICategory>;
}

export default IBoard;
