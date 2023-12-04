const { cubeGame } = require("../src/2_cube_game");

describe("cubeGame", () => {
  test("Returns 0 if no games are valid with one game", () => {
    const input = `Game 1: 34 red, 10 blue, 5 green; 11 blue, 6 green; 6 green; 3 green, 7 red, 12 blue; 3 blue; 3 blue, 4 green, 12 red`;
    const { validGames } = cubeGame(input, 1, 1, 1);
    expect(validGames).toBe(0);
  });
  test("Returns 0 if no games are valid with multiple games", () => {
    const input = `Game 1: 34 red, 10 blue, 5 green; 11 blue, 6 green; 6 green; 3 green, 7 red, 12 blue; 3 blue; 3 blue, 4 green, 12 red
Game 2: 3 red, 5 green; 5 green, 7 red; 18 blue, 7 red, 3 green; 3 red, 2 blue; 5 green, 4 red`;
    const { validGames } = cubeGame(input, 1, 1, 1);
    expect(validGames).toBe(0);
  });
  test("Returns value equal to the game id if one game is valid", () => {
    const input = `Game 1: 34 red, 10 blue, 5 green; 11 blue, 6 green; 6 green; 3 green, 7 red, 12 blue; 3 blue; 3 blue, 4 green, 12 red
Game 2: 1 red, 1 green; 1 green, 1 red; 1 blue, 1 red, 1 green; 1 red, 1 blue; 1 green, 1 red`;
    const { validGames } = cubeGame(input, 1, 1, 1);
    expect(validGames).toBe(2);
  });
  test("Totals the valid games ids", () => {
    const input = `Game 1: 3 red, 10 blue, 5 green; 8 blue, 6 green; 6 green; 3 green, 7 red, 9 blue; 3 blue; 3 blue, 4 green, 1 red
Game 2: 1 red, 1 green; 1 green, 1 red; 1 blue, 1 red, 1 green; 1 red, 1 blue; 1 green, 1 red`;
    const { validGames } = cubeGame(input, 7, 10, 10);
    expect(validGames).toBe(3);
  });
  test("totalPower is the max number of cubes multiplied together for one game", () => {
    const input = `Game 1: 3 red, 1 blue, 3 green; 4 blue, 3 green; 3 green; 3 green, 3 red, 2 blue; 3 blue; 3 blue, 3 green, 1 red`;
    const { totalPower } = cubeGame(input, 1, 1, 1);
    expect(totalPower).toBe(36);
  });
});
