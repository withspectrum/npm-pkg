// @flow strict

export const sum = (a: number, b: number): Promise<number> => {
  return new Promise(res => res(a + b));
};
