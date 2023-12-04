function cubeGame(inputStr, expRed, expGreen, expBlue) {
  let validGames = 0;
  const gamesArr = inputStr.split("\n");
  console.log(gamesArr)
  const gameObjects = gamesArr.map((game, index) => {

    const id = Number(game.match(/\d+/)[0]);
    const red = game.match(/\d+(?= red)/g).map((value) => Number(value));
    const green = game.match(/\d+(?= green)/g).map((value) => Number(value));
    const blue = game.match(/\d+(?= blue)/g).map((value) => Number(value));

    const maxRed = Math.max(...red);
    const maxGreen = Math.max(...green);
    const maxBlue = Math.max(...blue);

    return { id, maxRed, maxBlue, maxGreen };
  });
console.log(gameObjects)
  gameObjects.forEach((game) => {
    if (game.maxRed <= expRed && game.maxBlue <= expBlue && game.maxGreen <= expGreen){
        validGames += game.id
    }
  })
  return validGames
}

module.exports = { cubeGame };
