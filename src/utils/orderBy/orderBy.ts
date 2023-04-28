import type { TypeofArray } from 'types/array';

export function orderBy<T extends TypeofArray<T>[], P extends keyof TypeofArray<T>>(
  array: T,
  property: P
) {
  return [...array].sort((a, b) => {
    const aValue = a[property];
    const bValue = b[property];

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return aValue.localeCompare(bValue, 'en', { sensitivity: 'base' });
    }

    if (aValue < bValue) {
      return -1;
    }
    if (aValue > bValue) {
      return 1;
    }

    return 0;
  });
}
