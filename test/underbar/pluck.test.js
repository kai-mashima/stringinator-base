const _ = require('../../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      {name: 'frank', age: 9},
      {name: 'rank', age: 5},
      {name: 'dank', age: 19}
    ]
    const result = _.pluck(people, 'age');
    expect(result).toEqual([9, 5, 19]);
  });

});