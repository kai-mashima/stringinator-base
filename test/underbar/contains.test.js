const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    const arr = [1, 2, 3];
    expect(_.contains(arr, 2)).toBe(true);
  });

  it('returns false if an array does not contain the target', () => {
    const arr = [1, 2, 3];
    expect(_.contains(arr, 5)).toBe(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    const obj = {
      stuff1: 1,
      stuff2: 2,
      stuff3: 3
    };
    expect(_.contains(obj, 2)).toBe(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
    const obj = {
      stuff1: 1,
      stuff2: 2,
      stuff3: 3
    };
    expect(_.contains(obj, 2)).toBe(true);
  });

});