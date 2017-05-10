const _ = require('./underbar');

const first = function(str, n) {
  return _.first(str, n);
};

const last = function(str, n) {
  return _.last(str, n);
};

const removeChar = function(str, target) {
  return (_.reject(str, (el) => el === target)).join('');
};

const hasChar = function(str, target) {
  return _.some(str, (el) => el === target);
};

const isOnlyDigits = function(str) {
  if (isNaN(Number(str))) {
    return false;
  } else {
    return _.every(Number(str), (el) => { return isNaN(el) === false });
  }
};

const filterToOnlyDigits = function(str) {
  return ((_.filter(str, (el) => isOnlyDigits(el))).join('')).replace(/ +/g, '');
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  // hint: use truncateString above
  return _.map(obj, (obj) => truncateString(obj, maxLength));
};

const countChars = function(str) {
  return _.reduce(str, (obj, char) => {
    if(obj[char] === undefined) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }
    return obj;
  }, {});
};

const dedup = function(str) {
  const obj = countChars(str);
  return Object.keys(obj).join('');
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};