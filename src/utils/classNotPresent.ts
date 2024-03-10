/**
 * Is a class name with a given prefix present in the class names?
 *
 * @param prefix Prefix to look for, can be a regex pattern.
 * @param classNames Class names to inspect.
 * @returns True if the class names does not contain a class with the prefix.
 */
export function classNotPresent(prefix: string, classNames?: string): boolean {
  if (!classNames) {
    return true;
  }

  const regex = new RegExp(`(?<![\\w-])${prefix}`, 'g');
  return classNames.match(regex) === null;
}
