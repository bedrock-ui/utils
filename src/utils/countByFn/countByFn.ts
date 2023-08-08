import type { TypeofArray } from 'types/array';

function countByFn<
  T extends TypeofArray<T>[],
  P extends (element: TypeofArray<T>) => ReturnType<P>,
>(array: T, property: P): Map<ReturnType<P>, number> {
  const map = new Map<ReturnType<P>, number>();

  array.forEach((element: TypeofArray<T>) => {
    const value = property(element);
    map.set(value, (map.get(value) || 0) + 1);
  });

  return map;
}

export { countByFn };
