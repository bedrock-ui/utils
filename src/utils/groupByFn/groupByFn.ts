import type { TypeofArray } from 'types/array';

function groupByFn<
  T extends TypeofArray<T>[],
  P extends (element: TypeofArray<T>) => ReturnType<P>
>(array: T, property: P): Map<ReturnType<P>, TypeofArray<T>[]> {
  const map = new Map<ReturnType<P>, TypeofArray<T>[]>();

  array.forEach((element: TypeofArray<T>) => {
    const value = property(element);
    map.set(value, [...(map.get(value) || []), element]);
  });

  return map;
}

export { groupByFn };
