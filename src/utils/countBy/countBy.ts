import type { TypeofArray } from 'types/array';

export function countBy<T extends TypeofArray<T>[], P extends keyof TypeofArray<T>>(
  array: T,
  property: P
) {
  const map = new Map<TypeofArray<T>[P], number>();

  array.forEach((element: TypeofArray<T>) => {
    map.set(element[property], (map.get(element[property]) || 0) + 1);
  });

  return map;
}
