const _ = require('../../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    const arr = [1, 2];
    expect(_.isArrayLike(arr)).toBe(true);
  });

  it('returns true for an array-like object', () => {
    const arrlike = {
      length: 0
    }
    expect(_.isArrayLike(arrlike)).toBe(true);
  });

  it('returns false for a non-array-like object', () => {
    const obj = {
      name: 'frank'
    }
    expect(_.isArrayLike(obj)).toBe(false);
  });
});
