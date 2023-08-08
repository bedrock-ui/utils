import type { TypeofArray } from 'types/array';

type ArrayParam<T> = keyof TypeofArray<T>;

function countBy<T extends TypeofArray<T>[], P extends ArrayParam<T>>(
  array: T,
  property: P,
): Map<TypeofArray<T>[P], number> {
  const map = new Map();

  array.forEach((element: TypeofArray<T>) => {
    const value = property as keyof TypeofArray<T>;
    map.set(element[value], (map.get(element[value]) || 0) + 1);
  });

  return map;
}

export { countBy };
