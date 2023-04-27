import type { TypeofArray } from 'types/array';

export function keyBy<T extends TypeofArray<T>[], Property extends keyof TypeofArray<T>>(
  array: T,
  property: Property
) {
  const map = new Map<TypeofArray<T>[Property], TypeofArray<T>>();

  array.forEach((element: TypeofArray<T>) => {
    map.set(element[property], element);
  });

  return map;
}
