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

function checkEachLine(string){
const lineArr = string.split('\n')
const results = lineArr.map((line) => {
  return calibrationCheckerVersionDos(line)
})
return results.reduce((total, num) => {
  total += num
  return total
}, 0)
}

function calibrationCheckerVersionDos(string) {
  const lookupDigits = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let firstDigit = findFirst(string, lookupDigits) || 0;
  let lastDigit = findLast(string, lookupDigits) || firstDigit;
  const conversionObject = {    "one" : '1',
    "two" : '2',
    "three" : '3',
    "four" : '4',
    "five" : '5',
    "six" : '6',
    "seven" : '7',
    "eight" : '8',
    "nine" : '9',}
  if (conversionObject[firstDigit]){
    firstDigit = conversionObject[firstDigit]
  }
    if (conversionObject[lastDigit]) {
      lastDigit = conversionObject[lastDigit];
    }
  return Number(firstDigit + lastDigit);
}

function findFirst(string, lookupDigits) {
  for (let i = 0; i <= string.length; i++) {
    for (let j = 0; j <= lookupDigits.length; j++) {
      if (string.slice(0, i).includes(lookupDigits[j])) {
        return lookupDigits[j];
      }
    }
  }
}
function findLast(string, lookupDigits) {
  for (let i = string.length - 1; i > 0; i--) {
    for (let j = 0; j < lookupDigits.length; j++) {
      if (string.slice(i, string.length).includes(lookupDigits[j])) {
        return lookupDigits[j];
      }
    }
  }
}

module.exports = { calibrationChecker, calibrationCheckerVersionDos, checkEachLine };
