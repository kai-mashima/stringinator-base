const _ = require('../../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    const arr = [1, 2, 3, 4];
    expect(_.reject(arr, num => num % 2 === 1)).toEqual([2, 4]);
  });

  it('rejects null values from an object', () => {
    const obj = {
      one: 1,
      two: 2,
      nope: null,
      no: null
    };
    expect(_.reject(obj, (value) => value === null)).toEqual([1, 2]);
  });
});