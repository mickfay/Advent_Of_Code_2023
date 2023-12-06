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

function xscratchCardCheckerVersionDos(inputString) {
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
      console.log(score)
    return { winningCard, testCard, duplicates: 1, score };
  });
  cardObjects.forEach((card, index) => {
    for (let i = card.score; i > 0; i--){
        if(cardObjects[index+i]){
            cardObjects[index + i].duplicates += card.duplicates ;
        }
    }
  // console.log(cardObjects);

  });
  const result = cardObjects.reduce((total, card) => {
    return (total += card.duplicates);
  }, 0);
  return result;
}

function scratchCardCheckerVersionDos(inputString){
    const cardArray = inputString.split("\n");
  const cardObjects = cardArray.map((card) => {
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
      return {testCard, winningCard}
  })
  const cardScores = cardObjects.map((card) => {
    return checkCardScore(card)
  })
  cardScores.forEach((card, index) => {
    for (let i = 1; i <= card.score; i++){
      if (cardScores[index+i]){
        cardScores[index + i].copies += card.copies
      }
    }
  })
  return cardScores.reduce((noOfCards, card) => {
    noOfCards += card.copies
    return noOfCards
  }, 0)
}

function checkCardScore(card){
  const winningNums = card.winningCard.filter((num) => {
    return card.testCard.includes(num)
  })
  return { copies: 1, score : winningNums.length}
}

module.exports = { scratchCardChecker, scratchCardCheckerVersionDos };
