import { chunk } from './chunk';

const mockConsoleWarn = jest.spyOn(console, 'warn').mockImplementation();

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe('chunk', () => {
  test('chunks', () => {
    const result = chunk(array, 2);

    expect(result).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
      [9, 10],
    ]);
  });

  test('uneven size', () => {
    const result = chunk(array, 3);

    expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]);
  });

  test('warn on size less than 1', () => {
    const result = chunk(array, 0);

    expect(result).toEqual([]);
    expect(mockConsoleWarn).toHaveBeenCalledTimes(1);
    expect(mockConsoleWarn).toHaveBeenCalledWith('chunk - size must be at least 1');
  });
});
