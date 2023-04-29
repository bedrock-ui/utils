import { orderBy } from './orderBy';

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

const mockConsoleWarn = jest.spyOn(console, 'warn').mockImplementation();

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

const usersWithDuplicateNames: User[] = [
  {
    id: '3',
    firstName: 'Test',
    lastName: 'User3',
  },
  {
    id: '1',
    firstName: 'Test',
    lastName: 'User1',
  },
  {
    id: '2',
    firstName: 'Test2',
    lastName: 'User2',
  },
];

describe('orderBy', () => {
  test('id', () => {
    const result = orderBy(users, ['id'], ['asc']);
    expect(result).toEqual([users[1], users[2], users[0]]);
  });

  test('firstName', () => {
    const result = orderBy(users, ['firstName'], ['asc']);
    expect(result).toEqual([users[1], users[2], users[0]]);
  });

  test('id desc', () => {
    const result = orderBy(users, ['id'], ['desc']);
    expect(result).toEqual([users[0], users[2], users[1]]);
  });

  test('firstName, id, with duplicate values', () => {
    const result = orderBy(usersWithDuplicateNames, ['firstName', 'id'], ['asc', 'asc']);

    expect(result).toEqual([
      usersWithDuplicateNames[1],
      usersWithDuplicateNames[0],
      usersWithDuplicateNames[2],
    ]);
  });

  test('warn on different length properties and orders', () => {
    orderBy(usersWithDuplicateNames, ['firstName', 'id'], ['asc']);

    expect(mockConsoleWarn).toHaveBeenCalledTimes(1);
    expect(mockConsoleWarn).toHaveBeenCalledWith(
      'orderBy - property and order arrays are not the same length - properties: firstName,id, orders: asc'
    );
  });
});
