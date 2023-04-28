import type { TypeofArray } from 'types/array';

export function keyBy<T extends TypeofArray<T>[], P extends keyof TypeofArray<T>>(
  array: T,
  property: P
) {
  const map = new Map<TypeofArray<T>[P], TypeofArray<T>>();

  array.forEach((element: TypeofArray<T>) => {
    if (map.has(element[property])) {
      console.warn(`duplicate key for keyBy: "${element[property]}" already exists in the map`);
    }

    map.set(element[property], element);
  });

  return map;
}
