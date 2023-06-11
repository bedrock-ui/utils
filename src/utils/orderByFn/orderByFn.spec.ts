import { orderByFn } from './orderByFn';

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
    const result = orderByFn(users, [(user) => user.id], ['asc']);
    expect(result).toEqual([users[1], users[2], users[0]]);
  });

  test('firstName', () => {
    const result = orderByFn(users, [(user) => user.firstName], ['asc']);
    expect(result).toEqual([users[1], users[2], users[0]]);
  });

  test('id desc', () => {
    const result = orderByFn(users, [(user) => user.id], ['desc']);
    expect(result).toEqual([users[0], users[2], users[1]]);
  });

  test('firstName, id, with duplicate values', () => {
    const result = orderByFn(
      usersWithDuplicateNames,
      [(user) => user.firstName, (user) => user.id],
      ['asc', 'asc']
    );

    expect(result).toEqual([
      usersWithDuplicateNames[1],
      usersWithDuplicateNames[0],
      usersWithDuplicateNames[2],
    ]);
  });

  test('warn on different length properties and orders', () => {
    orderByFn(usersWithDuplicateNames, [(user) => user.firstName, (user) => user.id], ['asc']);

    expect(mockConsoleWarn).toHaveBeenCalledTimes(1);
    expect(mockConsoleWarn).toHaveBeenCalledWith(
      'orderByFn - property and order arrays are not the same length - properties: (user) => user.firstName,(user) => user.id, orders: asc'
    );
  });
});
