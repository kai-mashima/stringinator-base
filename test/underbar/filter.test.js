const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(_.filter(arr, num => num % 2 ===1)).toEqual([1, 3, 5]);
  });

  it('filters an object to only numeric values', () => {
    const obj = {
      the: "cow",
      is: "so",
      very: "wonderful",
      one: 1,
      two: 2
    };
    expect(_.filter(obj, (value) => !isNaN(value))).toEqual([1, 2]);
  });
});