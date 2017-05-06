// @flow
export const sum = (a: number, b: number) => {
  return new Promise(res => res(a + b));
};
