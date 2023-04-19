/**
 * Modify original array and remove embedded key.
 * @param array array of object
 * @param key key to remove
 */
export const removeEmbeddedKey = (array: any[], key: string) => {
  for (let i = 0; i < array?.length; i++) array[i] = array[i][key];
};
