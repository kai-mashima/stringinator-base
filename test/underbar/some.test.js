const _ = require('../../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const nums = [1, 2, 3];
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const nums = [2, 2, 4];
    expect(_.some(nums, num => num % 2 === 1)).toBe(false);
  });

});