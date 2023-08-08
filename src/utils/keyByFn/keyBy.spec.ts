import { keyByFn } from './keyByFn';

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

const mockConsoleWarn = jest.spyOn(console, 'warn').mockImplementation();

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

const usersWithDuplicateId: User[] = [
  {
    id: '1',
    firstName: 'Test1',
    lastName: 'User1',
  },
  {
    id: '1',
    firstName: 'Test1',
    lastName: 'User1',
  },
];

describe('keyByFn', () => {
  test('id', () => {
    const result = keyByFn(users, (user) => user.id);

    expect(Object.fromEntries(result)).toEqual({
      '1': { id: '1', firstName: 'Test1', lastName: 'User1' },
      '2': { id: '2', firstName: 'Test2', lastName: 'User2' },
      '3': { id: '3', firstName: 'Test3', lastName: 'User3' },
    });
  });

  test('warn on duplicate key', () => {
    keyByFn(usersWithDuplicateId, (user) => user.id);

    expect(mockConsoleWarn).toHaveBeenCalledTimes(1);
    expect(mockConsoleWarn).toHaveBeenCalledWith(
      'keyBy - duplicate key: "1" already exists in the map',
    );
  });
});
