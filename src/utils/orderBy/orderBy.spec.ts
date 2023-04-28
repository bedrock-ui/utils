import { orderBy } from './orderBy';

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

const users: User[] = [
  {
    id: '3',
    firstName: 'Test1',
    lastName: 'User1',
  },
  {
    id: '2',
    firstName: 'Test2',
    lastName: 'User2',
  },
  {
    id: '1',
    firstName: 'Test3',
    lastName: 'User3',
  },
];

describe('orderBy', () => {
  test('id', () => {
    const result = orderBy(users, 'id');

    console.log(result);
  });
});
