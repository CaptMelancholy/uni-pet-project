import { EStatuses } from '../components/Card/Card.types';
import { ICategory } from '../components/Category/Category.types';
import IBoard from '../components/Board/Board.types';
import EColors from '../styles/badge-colors';

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
    title: 'Category 0',
    cards: [
      {
        id: 0,
        categoryId: 0,
        spaceId: 0,
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
        id: 1,
        categoryId: 0,
        spaceId: 0,
        title: 'Something here',
        desc: 'Something more',
        deadlineInfo: {
          deadline_date: getRandomFutureDate(),
          status: EStatuses.Completed,
        },
        badges: [],
      },
      {
        id: 2,
        categoryId: 0,
        spaceId: 0,
        title: 'Something here',
        desc: 'Something more',
        badges: [],
      },
      {
        id: 3,
        categoryId: 0,
        spaceId: 0,
        title: 'Something here',
        desc: 'Something more',
        badges: [],
      },
      {
        id: 4,
        categoryId: 0,
        spaceId: 0,
        title: 'Something here',
        desc: 'Something more',
        deadlineInfo: {
          deadline_date: getRandomFutureDate(),
          deadline_time: getRandomTime(),
          status: EStatuses.Completed,
        },
        badges: [],
      },
      {
        id: 5,
        categoryId: 0,
        spaceId: 0,
        title: 'Something here',
        desc: 'Something more',
        deadlineInfo: {
          deadline_date: getRandomFutureDate(),
          status: EStatuses.InProgress,
        },
        badges: [],
      },
      {
        id: 6,
        categoryId: 0,
        spaceId: 0,
        title: 'Something here',
        desc: 'Something more',
        badges: [],
      },
      {
        id: 7,
        categoryId: 0,
        spaceId: 0,
        title: 'Something here',
        desc: 'Something more',
        badges: [],
      },
    ],
    id: 0,
    spaceId: 0,
  },
  {
    title: 'Category 2',
    cards: [
      {
        id: 8,
        categoryId: 1,
        spaceId: 0,
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
        id: 9,
        categoryId: 1,
        spaceId: 0,
        title: 'Something here',
        desc: 'Something more',
        deadlineInfo: {
          deadline_date: getRandomFutureDate(),
          status: EStatuses.Deadline,
        },
        badges: [],
      },
      {
        id: 10,
        categoryId: 1,
        spaceId: 0,
        title: 'Something here',
        desc: 'Something more',
        deadlineInfo: {
          deadline_date: getRandomFutureDate(),
          deadline_time: getRandomTime(),
          status: EStatuses.InProgress,
        },
        badges: [],
      },
      {
        id: 11,
        categoryId: 1,
        spaceId: 0,
        title: 'Something here',
        desc: 'Something more',
        deadlineInfo: {
          deadline_date: getRandomFutureDate(),
          status: EStatuses.InProgress,
        },
        badges: [],
      },
    ],
    id: 1,
    spaceId: 0,
  },
  {
    title: 'Category 3',
    cards: [
      {
        id: 12,
        categoryId: 2,
        spaceId: 0,
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
        id: 13,
        categoryId: 2,
        spaceId: 0,
        title: 'Something here',
        desc: 'Something more',
        deadlineInfo: {
          deadline_date: getRandomFutureDate(),
          status: EStatuses.Completed,
        },
        badges: [],
      },
      {
        id: 14,
        categoryId: 2,
        spaceId: 0,
        title: 'Something here',
        desc: 'Something more',
        badges: [],
      },
      {
        id: 15,
        categoryId: 2,
        spaceId: 0,
        title: 'Something here',
        desc: 'Something more',
        badges: [],
      },
      {
        id: 16,
        categoryId: 2,
        spaceId: 0,
        title: 'Something here',
        desc: 'Something more',
        deadlineInfo: {
          deadline_date: getRandomFutureDate(),
          deadline_time: getRandomTime(),
          status: EStatuses.Completed,
        },
        badges: [],
      },
      {
        id: 17,
        categoryId: 2,
        spaceId: 0,
        title: 'Something here',
        desc: 'Something more',
        deadlineInfo: {
          deadline_date: getRandomFutureDate(),
          status: EStatuses.InProgress,
        },
        badges: [],
      },
      {
        id: 18,
        categoryId: 2,
        spaceId: 0,
        title: 'Something here',
        desc: 'Something more',
        badges: [],
      },
      {
        id: 19,
        categoryId: 2,
        spaceId: 0,
        title: 'Something here',
        desc: 'Something more',
        badges: [],
      },
    ],
    id: 2,
    spaceId: 0,
  },
  {
    title: 'Category 4',
    cards: [
      {
        id: 20,
        categoryId: 3,
        spaceId: 0,
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
    ],
    id: 3,
    spaceId: 0,
  },
  {
    title: 'No',
    cards: [
      {
        id: 21,
        categoryId: 4,
        spaceId: 0,
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
        id: 22,
        categoryId: 4,
        spaceId: 0,
        title: 'Something here',
        desc: 'Something more',
        deadlineInfo: {
          deadline_date: getRandomFutureDate(),
          status: EStatuses.Completed,
        },
        badges: [],
      },
      {
        id: 23,
        categoryId: 4,
        spaceId: 0,
        title: 'Something here',
        desc: 'Something more',
        badges: [],
      },
      {
        id: 24,
        categoryId: 4,
        spaceId: 0,
        title: 'Something here',
        desc: 'Something more',
        badges: [],
      },
      {
        id: 25,
        categoryId: 4,
        spaceId: 0,
        title: 'Something here',
        desc: 'Something more',
        deadlineInfo: {
          deadline_date: getRandomFutureDate(),
          deadline_time: getRandomTime(),
          status: EStatuses.Completed,
        },
        badges: [],
      },
      {
        id: 26,
        categoryId: 4,
        spaceId: 0,
        title: 'Something here',
        desc: 'Something more',
        deadlineInfo: {
          deadline_date: getRandomFutureDate(),
          status: EStatuses.InProgress,
        },
        badges: [],
      },
      {
        id: 27,
        categoryId: 4,
        spaceId: 0,
        title: 'Something here',
        desc: 'Something more',
        badges: [],
      },
      {
        id: 28,
        categoryId: 4,
        spaceId: 0,
        title: 'Something here',
        desc: 'Something more',
        badges: [],
      },
    ],
    id: 4,
    spaceId: 0,
  },
];

export const SpaceData: Array<IBoard> = [
  {
    id: 0,
    title: 'Space 1',
    desc: 'Test Space 1',
    categories: CategoryData,
    color: EColors.cyan,
  },
  {
    id: 1,
    title: 'Space 2',
    color: EColors.red,
    categories: [
      {
        id: 5,
        title: 'Category 5',
        cards: [],
        spaceId: 1,
      },
      {
        id: 6,
        title: 'Category 6',
        cards: [],
        spaceId: 1,
      },
      {
        id: 7,
        title: 'Category 7',
        cards: [],
        spaceId: 1,
      },
    ],
  },
  {
    id: 2,
    title: 'Space 3',
    desc: 'Test Space 3',
    color: EColors.green,
    categories: [],
  },
];
