export interface IProps {
  badges?: Array<IBadge>;
  title: string;
  desc?: string;
  deadline_date?: string;
  deadline_time?: string;
}

export interface IBadge {
  color: string;
  text: string;
}
