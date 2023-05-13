import type { TypeofArray } from 'types/array';

export function groupBy<T extends TypeofArray<T>[], P extends keyof TypeofArray<T>>(
  array: T,
  property: P
) {
  const map = new Map<TypeofArray<T>[P], TypeofArray<T>[]>();

  array.forEach((element: TypeofArray<T>) => {
    map.set(element[property], [...(map.get(element[property]) || []), element]);
  });

  return map;
}
