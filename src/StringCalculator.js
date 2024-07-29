//this function accept a string and returns an array with numbers in the string
function stringToNumberArray(str) {
  const matches = str.match(/-?\d+/g);
  return matches?.length > 0 ? matches.map(Number) : [];
}

function add(str) {
  const numberArr = stringToNumberArray(str);
  const negativeNumbers = [];
  let sum = 0;
  for (num of numberArr) {
    if (num >= 0) {
      sum = sum + num;
    } else {
      negativeNumbers.push(num);
    }
  }
  if (negativeNumbers.length > 0) {
    return `negative numbers not allowed ${negativeNumbers.join(",")}`;
  }
  return sum;
}

module.exports = { stringToNumberArray: stringToNumberArray, add: add };
