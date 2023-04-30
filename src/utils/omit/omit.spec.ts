import { omit } from './omit';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  password: string;
}

const user: User = {
  id: '1',
  firstName: 'Test',
  lastName: 'User',
  password: 'mockpassword',
};

describe('omit', () => {
  test('removes property', () => {
    const result = omit(user, ['password']);

    expect(result).toEqual({
      id: '1',
      firstName: 'Test',
      lastName: 'User',
    });
  });

  test('removes multiple properties', () => {
    const result = omit(user, ['password', 'id']);

    expect(result).toEqual({
      firstName: 'Test',
      lastName: 'User',
    });
  });
});
