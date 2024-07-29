//this function accept a string and returns an array with numbers in the string
function stringToNumberArray(str) {
  return str.match(/-?\d+/g).map(Number);
}

module.exports = { stringToNumberArray: stringToNumberArray };
