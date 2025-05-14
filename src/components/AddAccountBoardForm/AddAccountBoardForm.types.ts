export interface IBoardAccount {
  id: number;
  text: string;
  account: number;
  cardId?: number;
  boardId: number;
  type: ETypeBoardAccount;
}

export enum ETypeBoardAccount {
  Debit = 'debit',
  Crediting = 'crediting',
}
export interface ICardForAccount {
  id: number;
  title: string;
}
