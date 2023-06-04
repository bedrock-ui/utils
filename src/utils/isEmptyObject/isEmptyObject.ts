function isEmptyObject<T extends Record<string, unknown>>(object: T): boolean {
  for (let _ in object) {
    return false;
  }

  return true;
}

export { isEmptyObject };
