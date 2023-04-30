import { isEmptyObject } from './isEmptyObject';

describe('isEmptyObject', () => {
  test('empty', () => {
    const result = isEmptyObject({});
    expect(result).toEqual(true);
  });

  test('not empty', () => {
    const result = isEmptyObject({ id: '1' });
    expect(result).toEqual(false);
  });
});
