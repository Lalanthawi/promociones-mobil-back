/**
 * Modify original array and remove embedded key.
 * @param array array of object
 * @param key key to remove
 */
export const removeEmbeddedKey = (array: any[], key: string) => {
  for (let i = 0; i < array?.length; i++) array[i] = array[i][key];
};

export const selectRandomElements = (arr: any[], a: number) => {
  // Merge array elements
  const shuffled = arr.sort(() => 0.5 - Math.random());

  // Select the first 'a' elements of the shuffled array
  const selected = shuffled.slice(0, a);

  return selected;
};
