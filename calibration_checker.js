const { readFileSync } = require("fs");
const stringToDecode = readFileSync(`${__dirname}/AOCDay1.txt`, 'UTF-8');

function calibrationChecker(string) {
  const lineArray = string.split("\n");
  console.log(lineArray)
  const twoDigitNums = lineArray.map((line) => {
    const digitRegex = /\d{1}/g;
    const output = line.match(digitRegex) || [0];
    const stringOfCode = (output[0] + output[output.length - 1])
    const calibrationCode = Number(stringOfCode);
    return calibrationCode;
  });
  return twoDigitNums.reduce((total, num) => {
    total += num;
    return total;
  }, 0);
}

console.log(calibrationChecker(stringToDecode))

module.exports = { calibrationChecker };
