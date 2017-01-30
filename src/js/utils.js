function createMatrix(r, c, num) {
  return Array(r).fill().map(() => Array(c).fill(num));
}

// Get random number between min and max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export {createMatrix, getRandomNumber};
