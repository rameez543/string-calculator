const stringCalcMethods = require("./StringCalculator");

const stringToNumberArray = stringCalcMethods.stringToNumberArray;

test("string to number array test1", () => {
  expect(stringToNumberArray("123,dswe$-1")).toStrictEqual([123, -1]);
});
test("string to number array test2", () => {
  expect(stringToNumberArray("12&3,dswe$-1,2")).toStrictEqual([12, 3, -1, 2]);
});
