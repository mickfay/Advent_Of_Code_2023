const {calibrationChecker } = require('../calibration_checker')

describe('calibrationChecker', () => {
test('Returns 2 digit number when passed a string containing 2 numbers', () => {
    const result = calibrationChecker('23')
    expect(result).toBe(23)
});
test("Returns 2 digit number when passed a string containing 2 numbers among other chars", () => {
    const result = calibrationChecker("asda2efbf3adfbsg");
    expect(result).toBe(23);
});
test('Returns a 2 digit number with the same digit if only contains 1 digit', () => {
    const result = calibrationChecker('adfvakhjabdfv3adfvjkln')
    expect(result).toBe(33)
});
test("Returns a 0 if string contains no digits", () => {
  const result = calibrationChecker("adfvakhjabdfvadfvjkln");
  expect(result).toBe(0);
});
test("Returns 2 digit number of first and last digits containing multiple numbers among other chars", () => {
  const result = calibrationChecker("as1da2ef2456bf3adfbs8g");
  expect(result).toBe(18);
});
test("Returns sum of 2 digit numbers when passed a string of multiple lines", () => {
  const result = calibrationChecker("asfgva2dsgbnb123\nwregsrgbpn5dfsgbiudfnlsd949adfvbhsdf");
  expect(result).toBe(23 + 59);
});
});
