import type { TypeofArray } from 'types/array';

function keyByFn<T extends TypeofArray<T>[], P extends (element: TypeofArray<T>) => ReturnType<P>>(
  array: T,
  property: P
): Map<ReturnType<P>, TypeofArray<T>> {
  const map = new Map<ReturnType<P>, TypeofArray<T>>();

  array.forEach((element: TypeofArray<T>) => {
    const value = property(element);

    if (map.has(value)) {
      console.warn(`keyBy - duplicate key: "${value}" already exists in the map`);
    }

    map.set(value, element);
  });

  return map;
}

export { keyByFn };
