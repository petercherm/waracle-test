const isObject = (item: any): boolean => {
  return item && typeof item === "object" && !Array.isArray(item);
};

export const mergeDeep = <T, S>(target: T, ...sources: S[]): T => {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!(target as Record<string, unknown>)[key])
          Object.assign(target, {
            [key]: {}
          });
        mergeDeep(
          (target as Record<string, any>)[key],
          (source as Record<string, any>)[key]
        );
      } else {
        Object.assign(target, {
          [key]: source[key]
        });
      }
    }
  }

  return mergeDeep(target, ...sources);
};
