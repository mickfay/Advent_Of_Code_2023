const { readFileSync } = require("fs");
const {
  calibrationChecker,
  checkEachLine,
} = require("./src/1_calibration_checker");
const { cubeGame } = require("./src/2_cube_game");
const { gearRatios } = require("./src/3_gear_ratios");
const {
  scratchCardChecker,
  scratchCardCheckerVersionDos,
} = require("./src/4_scratch_card");
const { convertAllSeeds } = require("./src/5_seed_location");
const stringToDecode1 = readFileSync(
  `${__dirname}/input_files/AOCDay1.txt`,
  "UTF-8"
);
const stringToDecode2 = readFileSync(
  `${__dirname}/input_files/AOC_Day_2.txt`,
  "UTF-8"
);
const stringToDecode3 = readFileSync(
  `${__dirname}/input_files/AOC_Day_3.txt`,
  "UTF-8"
);
const stringToDecode4 = readFileSync(
  `${__dirname}/input_files/AOC_Day_4.txt`,
  "UTF-8"
);
const stringToDecode5 = readFileSync(
  `${__dirname}/input_files/AOC_Day_5.txt`,
  "utf-8"
);
// console.log(calibrationChecker(stringToDecode1));
// console.log(cubeGame(stringToDecode2, 12, 13, 14))
// console.log(gearRatios(stringToDecode3))
// console.log(scratchCardCheckerVersionDos(stringToDecode4));
// console.log(convertAllSeeds(stringToDecode5));
console.log(checkEachLine(stringToDecode1));
