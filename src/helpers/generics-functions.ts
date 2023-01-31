interface IObject {
  [key: string]: any;
}

export const sortingFunction = <T extends IObject>(
  array: T[],
  property: keyof T,
  isAscending: boolean = true
) => {
  return array.sort((a, b) => {
    switch (typeof a[property]) {
      case 'string':
        return isAscending
          ? a[property].localeCompare(b[property])
          : b[property].localeCompare(a[property]);
      case 'number':
        return isAscending ? a[property] - b[property] : b[property] - a[property];
      case 'object':
        if (a[property] instanceof Date) {
          return isAscending
            ? (a[property] as Date).getTime() - (b[property] as Date).getTime()
            : (b[property] as Date).getTime() - (a[property] as Date).getTime();
        }
        break;
      default:
        break;
    }
    return 0;
  });
};
