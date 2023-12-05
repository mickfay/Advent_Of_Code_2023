const exp = require("constants");
const { gearRatios } = require("../src/3_gear_ratios");

describe("gearRatios", () => {
  test("Returns 0 when no numbers present", () => {
    const input = `...!......
.....$..%@`;
    const result = gearRatios(input);
    expect(result).toBe(0);
  });
  test("Returns one number of that number is next to a symbol", () => {
    const input = `...!10....\n.....$..%@`;
    const result = gearRatios(input);
    expect(result).toBe(10);
  });
  test("Returns total of numbers adjacent to a symbol", () => {
    const input = `...!10....\n...16*..%@`;
    const result = gearRatios(input);
    expect(result).toBe(26);
  });
  test("Returns total of numbers adjacent to a symbol below", () => {
    const input = `3...10...9\n*....$....`;
    const result = gearRatios(input);
    expect(result).toBe(13);
  });
  test("Returns total of numbers adjacent to a symbol above", () => {
    const input = `!....&...!
3...17...`;
    const result = gearRatios(input);
    expect(result).toBe(20);
  });
  test("Returns total of numbers diagonally adjacent to symbols", () => {
    const input = `3...%\n.*.2.`;
    const result = gearRatios(input);
    expect(result).toBe(5);
  });
    test("Ignores numbers that are vertically/diagonally adjacent to other numbers", () => {
      const input = `3...%\n.1.2.`;
      const result = gearRatios(input);
      expect(result).toBe(2);
    });
});
