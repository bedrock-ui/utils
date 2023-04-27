import { capitalize } from './capitalize';

describe('capitalize', () => {
  test('empty string', () => {
    expect(capitalize('')).toEqual('');
  });
});
