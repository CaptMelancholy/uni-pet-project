export interface ICard {
  id: number;
  parent_id: number;
  badges: Array<IBadge>;
  title: string;
  desc?: string;
  deadlineInfo?: IDeadlineDateTime;
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