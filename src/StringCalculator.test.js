const stringCalcMethods = require("./StringCalculator");

const stringToNumberArray = stringCalcMethods.stringToNumberArray;
const add = stringCalcMethods.add;

test("string to number array test1", () => {
  expect(stringToNumberArray("123,dswe$-1")).toStrictEqual([123, -1]);
});
test("string to number array test2", () => {
  expect(stringToNumberArray("12&3,dswe$-1,2")).toStrictEqual([12, 3, -1, 2]);
});
test("string to number array test3", () => {
  expect(stringToNumberArray("")).toStrictEqual([]);
});
test("string to number array test3", () => {
  expect(stringToNumberArray("/nabcd@#@$@")).toStrictEqual([]);
});
test("string add test1", () => {
  expect(add("123,dswe$-1/n-2")).toStrictEqual(
    "negative numbers not allowed -1,-2"
  );
});
test("string add test2", () => {
  expect(add("")).toStrictEqual(0);
});
test("string add test3", () => {
  expect(add("1ssdsdz%")).toStrictEqual(1);
});
