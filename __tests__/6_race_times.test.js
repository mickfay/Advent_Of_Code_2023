const {
  calculateRaceTime,
  extractTimeDistancePairs,
  calculateMarginOfError,
} = require("../src/6_race_times");
const { readFileSync } = require("fs");

describe("calculateRaceTime", () => {
  test("Passed a time and distance, return number of times that beat given distance", () => {
    // const result = calculateRaceTime(7, 9);
    // expect(result).toBe(4);
    expect(calculateRaceTime(15, 40)).toBe(8);
    expect(calculateRaceTime(30, 200)).toBe(9);
  });
});

describe("extractTimeDistancePairs", () => {
  test("Pulls time and distance data from text in correct pairs", () => {
    const input = readFileSync(
      `${__dirname}/../input_files/AOC_Day_6.txt`,
      "UTF-8"
    );
    const result = extractTimeDistancePairs(input);

    expect(result).toEqual([
      [54, 446],
      [81, 1292],
      [70, 1035],
      [88, 1007],
    ]);
  });
});

describe("calculateMarginOfError", () => {
  test("Returns number of valid times for one race passed", () => {
    const inputStr = `Time:        15\nDistance:   40`;
    const result = calculateMarginOfError(inputStr);
    expect(result).toBe(8);
  });
  test("Returns product of valid times for multiple races passed", () => {
    const inputStr = `Time:            15      30\nDistance:          40          200`;
    const result = calculateMarginOfError(inputStr);
    expect(result).toBe(72);
  });
  test("With production data", () => {
    const input = readFileSync(
      `${__dirname}/../input_files/AOC_Day_6.txt`,
      "UTF-8"
    );
    const result = calculateMarginOfError(input);
    expect(result).toBe(2065338);
  });

});

