const {
  seedLocation,
  convertAllSeeds,
  convertPairsToRange,
} = require("../src/5_seed_location");
const {readFileSync} = require('fs')
const stringToDecode = readFileSync(`${__dirname}/../input_files/test_5.txt`, 'utf-8')

describe("seedLocation", () => {
  test("Function should remain the same if number not present in a given grid and passed num of 1", () => {
    const filepath = `${__dirname}/../input_files/test_5.txt`;
    const result = seedLocation(3, stringToDecode, 7);
    expect(result).toBe(3);
  });
  test("Function should change number by appropriate amount if present in almanac for the given level", () => {
    const filepath = `${__dirname}/../input_files/test_5.txt`;
    const result = seedLocation(45, stringToDecode, 7);
    expect(result).toBe(40);
  });
  test("Function should follow a number through multiple levels accurately", () => {
    const filepath = `${__dirname}/../input_files/test_5.txt`;
    const result = seedLocation(12, stringToDecode, 6);
    expect(result).toBe(42);
  });
  test("Function should follow a number through multiple levels accurately if present in all levels", () => {
    const filepath = `${__dirname}/../input_files/test_5.txt`;
    const result = seedLocation(12, stringToDecode, 6);
    expect(result).toBe(42);
  });
  test("Function should follow a number through multiple levels accurately if not present throughout", () => {
    const filepath = `${__dirname}/../input_files/test_5.txt`;
    const result = seedLocation(87, stringToDecode, 6);
    expect(result).toBe(105);
  });
  test("Function works for all levels", () => {
    const filepath = `${__dirname}/../input_files/test_5.txt`;
    const result = seedLocation(452, stringToDecode, 1);
    expect(result).toBe(18);
  });
});

describe("convertAllSeeds", () => {
  test("Function sohould convert an array of one pair of seed numbers correctly", () => {
    const filepath = `${__dirname}/../input_files/test_5.txt`;
    const result = convertAllSeeds(stringToDecode);
    expect(result).toBe(18);
  });
});

describe("convertPairsToRange", () => {
  test("Function converts one pair of numbers to a range of numbers", () => {
    const input = [5, 3];
    const result = convertPairsToRange(input);
    expect(result).toEqual([5, 6, 7]);
  });
  test("Function converts multiple pairs of numbers to a range of numbers", () => {
    const input = [5, 3, 10, 2];
    const result = convertPairsToRange(input);
    expect(result).toEqual([5, 6, 7, 10, 11]);
  });
});
