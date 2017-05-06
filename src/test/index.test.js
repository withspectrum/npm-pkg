// @flow
import { sum } from '../';

describe('sum', () => {
  it('should add two numbers correctly', async () => {
    const result = await sum(10, 20);
    expect(result).toEqual(30);
  });
});
