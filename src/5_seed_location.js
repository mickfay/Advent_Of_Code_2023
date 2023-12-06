function seedLocation(num, almanac, level) {
  let result = num;
  const tempLevels = almanac.split("\n\n");
  const levels = tempLevels.map((level) => {
    const levelArr = level.split(":");
    const numberMap = levelArr[1]
      .trim()
      .split(/\s/)
      .map((x) => Number(x));
    return [levelArr[0], numberMap];
  });
  const relevantLevel = levels[level];
  for (let i = 0; i < relevantLevel[1].length; i = i + 3) {
    if (
      num >= relevantLevel[1][i + 1] &&
      num < relevantLevel[1][i + 1] + relevantLevel[1][i + 2]
    ) {
      result = num - relevantLevel[1][i + 1] + relevantLevel[1][i];
    }
  }
  if (level === 7) {
    return result;
  } else {
    return seedLocation(result, almanac, level + 1);
  }
}

function convertAllSeeds(stringToDecode){
  const seeds = stringToDecode.split("\n\n")[0].split(/\s/).slice(1).map(x=>Number(x));
  const newSeeds = convertPairsToRange(seeds)
const firstSeed = seedLocation(newSeeds[0], stringToDecode, 1)
console.log(firstSeed)
const lowestLocation = newSeeds.reduce((lowest, seed) => {
    const testLocation = seedLocation(seed, stringToDecode, 1)
    if (testLocation < lowest){
        console.log(testLocation, 'new low')
        return testLocation
    }
    if(testLocation % 4000 === 0){
        console.log(testLocation)
    }
    return lowest
}, firstSeed)
  return lowestLocation
}

function convertPairsToRange(arr) {
    const resultArr = []
    arr.forEach((item, index) => {
        if (index % 2 === 0){
            resultArr.push(item)
        }
        else{
            const lastNum = resultArr[resultArr.length-1]
            for (let i = lastNum+1; i < item + lastNum; i++){
                resultArr.push(i)
            }
        }
    })
    return resultArr
}

module.exports = { seedLocation, convertAllSeeds, convertPairsToRange };
