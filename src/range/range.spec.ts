import { range } from './range';

describe('range', () => {
  test('default', () => {
    const result = range(0, 10);
    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test('step', () => {
    const result = range(0, 10, 2);
    expect(result).toEqual([0, 2, 4, 6, 8]);
  });
});
