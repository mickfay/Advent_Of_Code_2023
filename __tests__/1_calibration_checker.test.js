const {
  calibrationChecker,
  calibrationCheckerVersionDos,
  checkEachLine
} = require("../src/1_calibration_checker");

describe("calibrationChecker", () => {
  test("Returns 2 digit number when passed a string containing 2 numbers", () => {
    const result = calibrationChecker("23");
    expect(result).toBe(23);
  });
  test("Returns 2 digit number when passed a string containing 2 numbers among other chars", () => {
    const result = calibrationChecker("asda2efbf3adfbsg");
    expect(result).toBe(23);
  });
  test("Returns a 2 digit number with the same digit if only contains 1 digit", () => {
    const result = calibrationChecker("adfvakhjabdfv3adfvjkln");
    expect(result).toBe(33);
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
    const result = calibrationChecker(
      "asfgva2dsgbnb123\nwregsrgbpn5dfsgbiudfnlsd949adfvbhsdf"
    );
    expect(result).toBe(23 + 59);
  });
});

describe.only("calibrationCheckerVersionDos", () => {
  test("Returns 2 digit number when passed a string containing 2 numbers", () => {
    const result = calibrationCheckerVersionDos("23");
    expect(result).toBe(23);
  });
  test("Returns 2 digit number when passed a string containing 2 numbers among other chars", () => {
    const result = calibrationCheckerVersionDos("asda2efbf3adfbsg");
    expect(result).toBe(23);
  });
  test("Returns a 2 digit number with the same digit if only contains 1 digit", () => {
    const result = calibrationCheckerVersionDos("adfvakhjabdfv3adfvjkln");
    expect(result).toBe(33);
  });
  test("Returns a 0 if string contains no digits", () => {
    const result = calibrationCheckerVersionDos("adfvakhjabdfvadfvjkln");
    expect(result).toBe(0);
  });
  test("Returns 2 digit number of first and last digits containing multiple numbers among other chars", () => {
    const result = calibrationCheckerVersionDos("as1da2ef2456bf3adfbs8g");
    expect(result).toBe(18);
  });
  test("Returns a 2 digit number when string contains two numbers as words", () => {
    const result = calibrationCheckerVersionDos("dfblsdfloneafdvhasdjbktwo");
    expect(result).toBe(12);
  });
  test("Returns a 2 digit number when string contains one number as words", () => {
    const result = calibrationCheckerVersionDos("dfblsdfloeafdvhasdjbktwo");
    expect(result).toBe(22);
  });
  test("Returns a 2 digit number when string contains one number as word and one number", () => {
    const result = calibrationCheckerVersionDos("dfblsdflo5eafdvhasdjbktwo");
    expect(result).toBe(52);
  });
  test('Returns sum of two digit numbres when passed an input string of multiple lines', () => {
    const input = "fakjdhbva1askjhfbvsixesdfa\nsdfbk5ajfkv9fvd\ndvjksthreeadnflvdjfeightwo"
    const expectedResult = 16+59+32
    const result=checkEachLine(input)
    expect(result).toBe(expectedResult)
  });
});
