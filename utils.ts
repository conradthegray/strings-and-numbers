export const reverseObject = (
  obj: Record<string, number>
): Record<number, string> => {
  const reversed: Record<number, string> = {};

  for (const [key, value] of Object.entries(obj)) {
    reversed[value] = key;
  }

  return reversed;
};
