const {readFileSync} = require('fs')
const { calibrationChecker } = require("./src/1_calibration_checker");
const stringToDecode = readFileSync(`${__dirname}/input_files/AOCDay1.txt`, "UTF-8");

console.log(calibrationChecker(stringToDecode))