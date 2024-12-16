export interface ICard {
  id: number;
  categoryId: number;
  boardId: number;
  priority?: EPriority;
  title: string;
  desc?: string;
  deadlineInfo?: IDeadlineDateTime;
}

export enum EPriority {
  critical = 'CRITICAL',
  high = 'HIGH',
  medium = 'MEDIUM',
  low = 'LOW',
}
export interface IBadge {
  color: string;
  text: string;
}

export interface IDeadlineDateTime {
  deadline_date: string;
  status: EStatuses;
  deadline_time?: string;
}

export enum EStatuses {
  Deadline = 'deadline',
  InProgress = 'in_progress',
  Completed = 'completed',
}

export interface ICardDTO {
  id: number;
  categoryId: number;
  boardId: number;
  priority?: EPriority;
  title: string;
  desc?: string;
  deadline_date?: string;
  status?: EStatuses;
  deadline_time?: string;
}
