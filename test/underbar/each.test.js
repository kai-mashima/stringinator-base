const _ = require('../../underbar');

describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
    const arr = ['a', 'b', 'c'];
    let count = 0;
    _.each(arr, function (element, index, arr) {
      expect(element).toEqual(arr[index]);
      count += 1;
    });
    expect(count).toBe(3);
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
    const arrlikeobj = {
      length: 3,
      1: 'a',
      2: 'b',
      3: 'c'
    };
    let count = 0;
    _.each(arrlikeobj, function (element, index, arrlikeobj) {
      expect(element).toEqual(arrlikeobj[index]);
      count += 1;
    });
    expect(count).toBe(3);
  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    const arr = ['a', 'b', 'c'];
    let count = 0;
    _.each(arr, function (element, index, arr) {
      expect(element).toEqual(arr[index]);
      count += 1;
    });
    expect(count).toBe(3);
  });
});

