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

  test('negative step', () => {
    const result = range(100, 0, -10);
    expect(result).toEqual([100, 90, 80, 70, 60, 50, 40, 30, 20, 10]);
  });

  test('zero step', () => {
    const result = range(0, 100, 0);
    expect(result).toEqual([]);
  });
});
