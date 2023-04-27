import type { TypeofArray } from 'types/array';

export function keyBy<T>(array: T, property: keyof TypeofArray<T>) {
  const object = {};

  array.forEach((element) => {
    object[element[property]] = element;
  });

  return object;
}
