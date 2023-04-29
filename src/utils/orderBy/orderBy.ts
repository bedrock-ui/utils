import type { TypeofArray } from 'types/array';

type Order = 'asc' | 'desc';

function sortFn<T>(a: T, b: T, order: Order): number {
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
  property: P,
  order: Order = 'asc'
) {
  const sortedArray = [...array].sort((a, b) => sortFn(a[property], b[property], order));

  if (order === 'desc') {
    return sortedArray.reverse();
  }

  return sortedArray;
}
