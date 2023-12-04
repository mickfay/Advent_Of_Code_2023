const { readFileSync } = require("fs");
const { calibrationChecker } = require("./src/1_calibration_checker");
const { cubeGame } = require('./src/2_cube_game')
const {
  scratchCardChecker,
  scratchCardCheckerVersionDos,
} = require("./src/4_scratch_card");
const stringToDecode1 = readFileSync(
  `${__dirname}/input_files/AOCDay1.txt`,
  "UTF-8"
);
const stringToDecode2 = readFileSync(
  `${__dirname}/input_files/AOC_Day_2.txt`,
  "UTF-8"
);
const stringToDecode4 = readFileSync(
  `${__dirname}/input_files/AOC_Day_4.txt`,
  "UTF-8"
);
// console.log(calibrationChecker(stringToDecode1));
// console.log(scratchCardCheckerVersionDos(stringToDecode4));
console.log(cubeGame(stringToDecode2, 12, 13, 14))