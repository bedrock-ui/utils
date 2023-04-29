import { orderBy } from './orderBy';

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

const users: User[] = [
  {
    id: '3',
    firstName: 'Test3',
    lastName: 'User3',
  },
  {
    id: '1',
    firstName: 'Best1',
    lastName: 'User1',
  },
  {
    id: '2',
    firstName: 'Rest2',
    lastName: 'User2',
  },
];

describe('orderBy', () => {
  test('id', () => {
    expect(orderBy(users, 'id')).toEqual([users[1], users[2], users[0]]);
  });

  test('firstName', () => {
    expect(orderBy(users, 'firstName')).toEqual([users[1], users[2], users[0]]);
  });
});
