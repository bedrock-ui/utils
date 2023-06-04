import type { TypeofArray } from 'types/array';

type FnParam<T extends TypeofArray<T>[]> = (element: TypeofArray<T>) => unknown;

function countByFn<T extends TypeofArray<T>[], P extends FnParam<T>>(
  array: T,
  property: P
): Map<ReturnType<P>, number> {
  const map = new Map();

  array.forEach((element: TypeofArray<T>) => {
    const value = property(element);
    map.set(value, (map.get(value) || 0) + 1);
  });

  return map;
}

export { countByFn };
