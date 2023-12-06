const {
  scratchCardChecker,
  scratchCardCheckerVersionDos,
} = require("../src/4_scratch_card");

describe("scratchCardChecker", () => {
  test("Returns a value of 0 if no matching numbers in a single card", () => {
    const input = "Card   1: 96 35 | 99 70 93 11 ";
    const result = scratchCardChecker(input);
    expect(result).toBe(0);
  });
  test("Returns a value of 1 if one matching number in a card", () => {
    const input = "Card   1: 96 35 | 96 70 93 11 ";
    const result = scratchCardChecker(input);
    expect(result).toBe(1);
  });
  test("Returns a value of 2 if two matching numbers in a card", () => {
    const input = "Card   1: 96 35 | 96 35 93 11 ";
    const result = scratchCardChecker(input);
    expect(result).toBe(2);
  });
  test("Result doubles for each following number", () => {
    const input = "Card   1: 96 35 45 83 | 96 45 35 93 83 11 ";
    const result = scratchCardChecker(input);
    expect(result).toBe(8);
  });
  test("Single digit numbers with extra spaces are accounted for", () => {
    const input = "Card   1: 96  5 45  3 | 96  5 35 93  3 11 ";
    const result = scratchCardChecker(input);
    expect(result).toBe(4);
  });
  test("Gives correct result for an input of mutliple cards", () => {
    const input =
      "Card   1: 96 35 45 83 | 96 45 35 93 83 11\nCard   2: 34  7 12 67  1 | 96 45  1 93  7 11";
    const result = scratchCardChecker(input);
    expect(result).toBe(10);
  });
});

describe.only("scratchCardCheckerVersionDos", () => {
  test("Returns a value of 1 for a testString of 1 card", () => {
    const input = "Card   1: 96 35 | 99 70 93 11 ";
    const result = scratchCardCheckerVersionDos(input);
    expect(result).toBe(1);
  });
  test("Returns a value of 2 for a testString of 2 cards without matching numbers", () => {
    const input =
      "Card   1: 96 35 | 99 70 93 11\nCard   1: 97 31 | 99 70 93 11";
    const result = scratchCardCheckerVersionDos(input);
    expect(result).toBe(2);
  });
  test("Returns a value of 3 for a testString of 2 cards with matching numbers", () => {
    const input =
      "Card   1: 96 35 | 35 70 96 11\nCard   2: 97 31 | 99 70 93 11";
    const result = scratchCardCheckerVersionDos(input);
    expect(result).toBe(3);
  });
  test("If more matching numbers than cards, ignores extra values", () => {
    const input =
      "Card   1: 96 35 | 96 70 35 11\nCard   2: 97 31 | 99 31 93 11";
    const result = scratchCardCheckerVersionDos(input);
    expect(result).toBe(3);
  });
  test("If increases the number of cards by the number of duplicates of the card before it", () => {
    const input = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 18 31 10 23 35 67 36 11`;
    const result = scratchCardCheckerVersionDos(input);
    expect(result).toBe(30);
  });
});
