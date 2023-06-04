import type { TypeofArray } from 'types/array';

function chunk<T extends TypeofArray<T>[]>(array: T, size: number): TypeofArray<T>[][] {
  if (size < 1) {
    console.warn('chunk - size must be at least 1');
    return [];
  }

  const chunks: TypeofArray<T>[][] = [];

  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }

  return chunks;
}

export { chunk };
