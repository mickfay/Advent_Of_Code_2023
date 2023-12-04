function scratchCardChecker(inputString) {
  const cardArray = inputString.split("\n");
  let totalScore = 0;
  cardArray.forEach((card) => {
    const splitter1 = card.indexOf(":");
    const splitter2 = card.indexOf("|");
    const winningCard = card
      .slice(splitter1 + 1, splitter2)
      .trim()
      .split(" ")
      .filter((item) =>  item !== "");
    const testCard = card
      .slice(splitter2 + 1)
      .trim()
      .split(" ")
      .filter((item) => item !== "");
    const result = testCard.reduce((score, testNumber) => {
      if (winningCard.includes(testNumber)) {
        score === 0 ? score++ : (score *= 2);
      }
      return score;
    }, 0);
    totalScore += result;
  });
  return totalScore;
}

function scratchCardCheckerVersionDos(inputString) {
  const cardArray = inputString.split("\n");
  const cardObjects = cardArray.map((card, index) => {
    const splitter1 = card.indexOf(":");
    const splitter2 = card.indexOf("|");
    const winningCard = card
      .slice(splitter1 + 1, splitter2)
      .trim()
      .split(" ")
      .filter((item) => item !== "");
    const testCard = card
      .slice(splitter2 + 1)
      .trim()
      .split(" ")
      .filter((item) => item !== "");
      let score = 0
      testCard.forEach((testNumber) => {
        if (winningCard.includes(testNumber)) {
          score++
        }
      });
    return { winningCard, testCard, duplicates: 1, score };
  });
//   console.log(cardObjects)
  cardObjects.forEach((card, index) => {
    for (let i = card.score; i > 0; i--){
        if(cardObjects[index+i]){
            cardObjects[index + i].duplicates += card.duplicates ;
        }
    }
  console.log(cardObjects);

  });
  const result = cardObjects.reduce((total, card) => {
    return (total += card.duplicates);
  }, 0);
  return result;
}

module.exports = { scratchCardChecker, scratchCardCheckerVersionDos };
