import { countByFn } from './countByFn';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  state: string;
}

const users: User[] = [
  {
    id: 1,
    firstName: 'Test1',
    lastName: 'User1',
    state: 'VA',
  },
  {
    id: 2,
    firstName: 'Test2',
    lastName: 'User2',
    state: 'CO',
  },
  {
    id: 3,
    firstName: 'Test3',
    lastName: 'User3',
    state: 'VA',
  },
];

describe('countByFn', () => {
  test('state', () => {
    const result = countByFn(users, (user) => user.state);

    expect(Object.fromEntries(result)).toEqual({
      VA: 2,
      CO: 1,
    });
  });
});
