import { keyBy } from './keyBy';

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

describe('keyBy', () => {
  test('id', () => {
    const result = keyBy(users, 'id');

    expect(Object.fromEntries(result)).toEqual({
      '1': { id: '1', firstName: 'Test1', lastName: 'User1' },
      '2': { id: '2', firstName: 'Test2', lastName: 'User2' },
      '3': { id: '3', firstName: 'Test3', lastName: 'User3' },
    });
  });

  test('warn on duplicate key', () => {
    keyBy(usersWithDuplicateId, 'id');

    expect(mockConsoleWarn).toHaveBeenCalledTimes(1);
    expect(mockConsoleWarn).toHaveBeenCalledWith(
      'duplicate key for keyBy: "1" already exists in the map'
    );
  });
});
