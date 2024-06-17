import { EStatuses } from '../components/Card/Card.types';
import { ICategory } from '../components/Category/Category.types';

const getRandomFutureDate = () => {
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + Math.floor(Math.random() * 100));
  return futureDate.toISOString().split('T')[0];
};

// Helper function to generate a random time
const getRandomTime = () => {
  const hours = Math.floor(Math.random() * 24);
  const minutes = Math.floor(Math.random() * 60);
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
};

export const CategoryData: Array<ICategory> = [
  {
    title: 'Hello world',
    cards: [
      {
        id: 0,
        parent_id: 0,
        title: 'Something here',
        desc: 'Something more',
        badges: [
          {
            color: '#F8BD1C',
            text: 'something',
          },
          {
            color: '#4339F2',
            text: 'something',
          },
          {
            color: '#1AD698',
            text: 'something',
          },
        ],
      },
      {
          id: 0,
          parent_id: 0,
          title: 'Something here',
          desc: 'Something more',
          deadlineInfo: {
              deadline_date: getRandomFutureDate(),
              status: EStatuses.Completed,
          },
          badges: []
      },
      {
          id: 0,
          parent_id: 0,
          title: 'Something here',
          desc: 'Something more',
          badges: []
      },
      {
          id: 0,
          parent_id: 0,
          title: 'Something here',
          desc: 'Something more',
          badges: []
      },
      {
          id: 0,
          parent_id: 0,
          title: 'Something here',
          desc: 'Something more',
          deadlineInfo: {
              deadline_date: getRandomFutureDate(),
              deadline_time: getRandomTime(),
              status: EStatuses.Completed,
          },
          badges: []
      },
      {
          id: 0,
          parent_id: 0,
          title: 'Something here',
          desc: 'Something more',
          deadlineInfo: {
              deadline_date: getRandomFutureDate(),
              status: EStatuses.InProgress,
          },
          badges: []
      },
      {
          id: 0,
          parent_id: 0,
          title: 'Something here',
          desc: 'Something more',
          badges: []
      },
      {
          id: 0,
          parent_id: 0,
          title: 'Something here',
          desc: 'Something more',
          badges: []
      },
    ],
    id: 0,
  },
  {
    title: 'New hello world',
    cards: [
      {
        id: 0,
        parent_id: 0,
        title: 'Something here',
        desc: 'Something more',
        badges: [
          {
            color: '#F8BD1C',
            text: 'something',
          },
          {
            color: '#4339F2',
            text: 'something',
          },
          {
            color: '#1AD698',
            text: 'something',
          },
        ],
      },
      {
          id: 0,
          parent_id: 0,
          title: 'Something here',
          desc: 'Something more',
          deadlineInfo: {
              deadline_date: getRandomFutureDate(),
              status: EStatuses.Completed,
          },
          badges: []
      },
      {
          id: 0,
          parent_id: 0,
          title: 'Something here',
          desc: 'Something more',
          badges: []
      },
      {
          id: 0,
          parent_id: 0,
          title: 'Something here',
          desc: 'Something more',
          badges: []
      },
      {
          id: 0,
          parent_id: 0,
          title: 'Something here',
          desc: 'Something more',
          deadlineInfo: {
              deadline_date: getRandomFutureDate(),
              deadline_time: getRandomTime(),
              status: EStatuses.Completed,
          },
          badges: []
      },
      {
          id: 0,
          parent_id: 0,
          title: 'Something here',
          desc: 'Something more',
          deadlineInfo: {
              deadline_date: getRandomFutureDate(),
              status: EStatuses.InProgress,
          },
          badges: []
      },
      {
          id: 0,
          parent_id: 0,
          title: 'Something here',
          desc: 'Something more',
          badges: []
      },
      {
          id: 0,
          parent_id: 0,
          title: 'Something here',
          desc: 'Something more',
          badges: []
      },
    ],
    id: 1,
  },
  {
    title: 'Again hello world?',
    cards: [
      {
        id: 0,
        parent_id: 0,
        title: 'Something here',
        desc: 'Something more',
        badges: [
          {
            color: '#F8BD1C',
            text: 'something',
          },
          {
            color: '#4339F2',
            text: 'something',
          },
          {
            color: '#1AD698',
            text: 'something',
          },
        ],
      },
      {
          id: 0,
          parent_id: 0,
          title: 'Something here',
          desc: 'Something more',
          deadlineInfo: {
              deadline_date: getRandomFutureDate(),
              status: EStatuses.Completed,
          },
          badges: []
      },
      {
          id: 0,
          parent_id: 0,
          title: 'Something here',
          desc: 'Something more',
          badges: []
      },
      {
          id: 0,
          parent_id: 0,
          title: 'Something here',
          desc: 'Something more',
          badges: []
      },
      {
          id: 0,
          parent_id: 0,
          title: 'Something here',
          desc: 'Something more',
          deadlineInfo: {
              deadline_date: getRandomFutureDate(),
              deadline_time: getRandomTime(),
              status: EStatuses.Completed,
          },
          badges: []
      },
      {
          id: 0,
          parent_id: 0,
          title: 'Something here',
          desc: 'Something more',
          deadlineInfo: {
              deadline_date: getRandomFutureDate(),
              status: EStatuses.InProgress,
          },
          badges: []
      },
      {
          id: 0,
          parent_id: 0,
          title: 'Something here',
          desc: 'Something more',
          badges: []
      },
      {
          id: 0,
          parent_id: 0,
          title: 'Something here',
          desc: 'Something more',
          badges: []
      },
    ],
    id: 2,
  },
  {
    title: 'No',
    cards: [
      {
        id: 0,
        parent_id: 0,
        title: 'Something here',
        desc: 'Something more',
        badges: [
          {
            color: '#F8BD1C',
            text: 'something',
          },
          {
            color: '#4339F2',
            text: 'something',
          },
          {
            color: '#1AD698',
            text: 'something',
          },
        ],
      },
      {
          id: 0,
          parent_id: 0,
          title: 'Something here',
          desc: 'Something more',
          deadlineInfo: {
              deadline_date: getRandomFutureDate(),
              status: EStatuses.Completed,
          },
          badges: []
      },
      {
          id: 0,
          parent_id: 0,
          title: 'Something here',
          desc: 'Something more',
          badges: []
      },
      {
          id: 0,
          parent_id: 0,
          title: 'Something here',
          desc: 'Something more',
          badges: []
      },
      {
          id: 0,
          parent_id: 0,
          title: 'Something here',
          desc: 'Something more',
          deadlineInfo: {
              deadline_date: getRandomFutureDate(),
              deadline_time: getRandomTime(),
              status: EStatuses.Completed,
          },
          badges: []
      },
      {
          id: 0,
          parent_id: 0,
          title: 'Something here',
          desc: 'Something more',
          deadlineInfo: {
              deadline_date: getRandomFutureDate(),
              status: EStatuses.InProgress,
          },
          badges: []
      },
      {
          id: 0,
          parent_id: 0,
          title: 'Something here',
          desc: 'Something more',
          badges: []
      },
      {
          id: 0,
          parent_id: 0,
          title: 'Something here',
          desc: 'Something more',
          badges: []
      },
    ],
    id: 3,
  },
  {
    title: 'No',
    cards: [
      {
        id: 0,
        parent_id: 0,
        title: 'Something here',
        desc: 'Something more',
        badges: [
          {
            color: '#F8BD1C',
            text: 'something',
          },
          {
            color: '#4339F2',
            text: 'something',
          },
          {
            color: '#1AD698',
            text: 'something',
          },
        ],
      },
      {
          id: 0,
          parent_id: 0,
          title: 'Something here',
          desc: 'Something more',
          deadlineInfo: {
              deadline_date: getRandomFutureDate(),
              status: EStatuses.Completed,
          },
          badges: []
      },
      {
          id: 0,
          parent_id: 0,
          title: 'Something here',
          desc: 'Something more',
          badges: []
      },
      {
          id: 0,
          parent_id: 0,
          title: 'Something here',
          desc: 'Something more',
          badges: []
      },
      {
          id: 0,
          parent_id: 0,
          title: 'Something here',
          desc: 'Something more',
          deadlineInfo: {
              deadline_date: getRandomFutureDate(),
              deadline_time: getRandomTime(),
              status: EStatuses.Completed,
          },
          badges: []
      },
      {
          id: 0,
          parent_id: 0,
          title: 'Something here',
          desc: 'Something more',
          deadlineInfo: {
              deadline_date: getRandomFutureDate(),
              status: EStatuses.InProgress,
          },
          badges: []
      },
      {
          id: 0,
          parent_id: 0,
          title: 'Something here',
          desc: 'Something more',
          badges: []
      },
      {
          id: 0,
          parent_id: 0,
          title: 'Something here',
          desc: 'Something more',
          badges: []
      },
    ],
    id: 4,
  },
];
