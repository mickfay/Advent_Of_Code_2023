function gearRatios(inputStr) {
  let totalValue = 0;
  const lineArr = inputStr.split("\n");
  lineArr.forEach((line, index, lineArr) => {
    const numsInLine = line.match(/\d+/g) ?? [];
    const totalLine = numsInLine.reduce((total, num) => {
      const indexChar = line.indexOf(num);
      let aboveSymbols = [];
      let belowSymbols = [];
      if (lineArr[index - 1]) {
        aboveSymbols = lineArr[index - 1].substring(
          indexChar - 1,
          indexChar + num.length + 1
        );
      }
      if (lineArr[index + 1]) {
        belowSymbols = lineArr[index + 1].substring(
          indexChar - 1,
          indexChar + num.length + 1
        );
      }
      const nearbySymbols = [
        ...belowSymbols,
        ...aboveSymbols,
        line[indexChar - 1] || ".",
        line[indexChar + num.length] || ".",
      ];
      const containsSymbol = nearbySymbols.every((symbol) => {
        return /[\d\.]/.test(symbol);
      });
      if (!containsSymbol) {
          total += Number(num);
        }
        return total;
    }, 0);
    console.log(totalLine, '<<<<<<<<<<', index)
    totalValue += totalLine;
  });

  return totalValue;
}
module.exports = { gearRatios };
