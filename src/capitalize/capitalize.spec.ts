import { capitalize } from './capitalize';

describe('capitalize', () => {
  test('empty string', () => {
    expect(capitalize('')).toEqual('');
  });

  test('string', () => {
    expect(capitalize('hello')).toEqual('Hello');
  });

  test('sentence', () => {
    expect(capitalize('hello world')).toEqual('Hello world');
  });
});
