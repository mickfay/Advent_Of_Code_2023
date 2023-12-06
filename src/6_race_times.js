function calculateRaceTime(time, distance) {
  // const successfulTimes = []
  // for (let timeHeld = 0; timeHeld < time; timeHeld++){
  //     const distanceCovered = (time - timeHeld) * timeHeld
  //     if (distanceCovered > distance){
  //         successfulTimes.push([timeHeld, distance])
  //     }
  // }
  const lowestTime = (time - Math.sqrt(time ** 2 - 4 * (distance+1))) / 2;
  const highestTime = (time + Math.sqrt(time ** 2 - 4 * (distance+1))) / 2;
  console.log(lowestTime, highestTime)
  const result =  Math.ceil(highestTime + 0.1) - Math.ceil(lowestTime + 0.1);
  return result
}

function extractTimeDistancePairs(inputStr) {
  const lines = inputStr.split("\n");
  console.log(lines);
  const timesArr = lines.map((line) => {
    return line.match(/\d+/g);
  });
  const zippedTimes = timesArr[0].map((time, index) => {
    return [+time, +timesArr[1][index]];
  });
  return zippedTimes;
}

function calculateMarginOfError(inputStr) {
  const dataPairs = extractTimeDistancePairs(inputStr);
  console.log(dataPairs);
  const result = dataPairs.reduce((product, dataPair) => {
    const noOfResults = calculateRaceTime(...dataPair);
    product *= noOfResults;
    return product;
  }, 1);
  return result;
}

module.exports = {
  calculateRaceTime,
  extractTimeDistancePairs,
  calculateMarginOfError,
};
