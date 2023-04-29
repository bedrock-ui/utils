import type { TypeofArray } from 'types/array';

type Order = 'asc' | 'desc';

function sortFn<T>(a: T, b: T): number {
  if (typeof a === 'string' && typeof b === 'string') {
    return a.localeCompare(b, 'en', { sensitivity: 'base' });
  }

  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
}

export function orderBy<T extends TypeofArray<T>[], P extends keyof TypeofArray<T>>(
  array: T,
  properties: P[],
  orders: Order[]
) {
  if (properties.length !== orders.length) {
    console.warn(
      `orderBy - property and order arrays are not the same length - properties: ${properties}, orders: ${orders}`
    );
  }

  return [...array].sort((a, b) =>
    properties
      .map((property, index) => {
        const order = orders[index];

        if (order === 'desc') {
          return sortFn(b[property], a[property]);
        }

        return sortFn(a[property], b[property]);
      })
      .reduce((accumulator, current) => {
        if (accumulator === 0) {
          return current;
        }

        return accumulator;
      }, 0)
  );
}
