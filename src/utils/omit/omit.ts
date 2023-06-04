function omit<T extends object, P extends keyof T>(object: T, properties: P[]): Omit<T, P> {
  const newObject = { ...object };

  properties.forEach((property) => {
    delete newObject[property];
  });

  return newObject;
}

export { omit };
