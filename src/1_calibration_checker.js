function calibrationChecker(string) {
  const lineArray = string.split("\n");
  const twoDigitNums = lineArray.map((line) => {
    const digitRegex = /\d{1}/g;
    const output = line.match(digitRegex) || [0];
    const stringOfCode = output[0] + output[output.length - 1];
    const calibrationCode = Number(stringOfCode);
    return calibrationCode;
  });
  return twoDigitNums.reduce((total, num) => {
    total += num;
    return total;
  }, 0);
}

module.exports = { calibrationChecker };
