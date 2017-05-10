const _ = require('../../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    const arr = [1, 2, 3, 4];
    const result = _.reduce(arr, (acc, num) => acc + num, 0);
    expect(result).toBe(10);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    const arr = [1, 2, 3, 4];
    const result = _.reduce(arr, (acc, num) => acc + num);
    expect(result).toBe(10);
  });

});