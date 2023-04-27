import { keyBy } from './keyBy';

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

const users: User[] = [
  {
    id: '1',
    firstName: 'Test1',
    lastName: 'User1',
  },
  {
    id: '2',
    firstName: 'Test2',
    lastName: 'User2',
  },
  {
    id: '3',
    firstName: 'Test3',
    lastName: 'User3',
  },
];

describe('keyBy', () => {
  test('id', () => {
    const result = keyBy(users, 'id');
    expect(result).toEqual({
      '1': users[0],
      '2': users[1],
      '3': users[2],
    });
  });
});
