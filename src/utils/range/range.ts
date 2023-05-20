export function range(start: number, end: number, step: number = 1): number[] {
  const array = [];

  for (let i = start; step > 0 ? i < end : i > end; i = i + step) {
    array.push(i);
  }

  return array;
}
