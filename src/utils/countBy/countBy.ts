import type { TypeofArray } from 'types/array';

function countBy<T extends TypeofArray<T>[], P extends (element: TypeofArray<T>) => ReturnType<P>>(
  array: T,
  property: P
): Map<ReturnType<P>, number>;

function countBy<T extends TypeofArray<T>[], P extends keyof TypeofArray<T>>(
  array: T,
  property: P
): Map<TypeofArray<T>[P], number>;

function countBy<T, P>(array: T, property: P) {
  const map = new Map();

  array.forEach((element: TypeofArray<T>) => {
    if (typeof property === 'function') {
    } else {
      map.set(element[property], (map.get(element[property]) || 0) + 1);
    }
  });

  return map;
}

export { countBy };
