import type { TypeofArray } from 'types/array';

type FnParam<T extends TypeofArray<T>[]> = (element: TypeofArray<T>) => unknown;

type ArrayParam<T> = keyof TypeofArray<T>;

function countBy<T extends TypeofArray<T>[], P extends FnParam<T>>(
  array: T,
  property: P
): Map<ReturnType<P>, number>;

function countBy<T extends TypeofArray<T>[], P extends ArrayParam<T>>(
  array: T,
  property: P
): Map<TypeofArray<T>[P], number>;

function countBy<T extends TypeofArray<T>[], P extends ArrayParam<T> | FnParam<T>>(
  array: T,
  property: P
): Map<
  P extends ArrayParam<T> ? TypeofArray<T>[P] : P extends FnParam<T> ? ReturnType<P> : never,
  number
> {
  const map = new Map();

  array.forEach((element: TypeofArray<T>) => {
    if (typeof property === 'function') {
      const value = property(element);
      map.set(value, (map.get(value) || 0) + 1);
    } else {
      const value = property as keyof TypeofArray<T>;
      map.set(element[value], (map.get(element[value]) || 0) + 1);
    }
  });

  return map;
}

export { countBy };
