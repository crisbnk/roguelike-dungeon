function createMatrix(r, c, num) {
  return Array(r).fill().map(() => Array(c).fill(num));
}

// Get random number between min and max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Set unit coordinates
function squareSurroundings(obj) {
  const x = obj.x;
  const y = obj.y;
  let surroundings = [];
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) {
        console.log('Same point');
      } else {
        surroundings.push({x: x + i, y: y + j});
      }
    }
  }

  return surroundings;
}

export {createMatrix, getRandomNumber, squareSurroundings};
