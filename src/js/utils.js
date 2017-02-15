function createMatrix(r, c, num) {
  return Array(r).fill().map(() => Array(c).fill(num));
}

// Get random number between min and max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Pick random property from an obj
function pickRandomProperty(obj) {
  let result;
  let count = 0;
  for (let prop in obj) {
    if (Math.random() < 1 / ++count) {
      result = prop;
    }
  }
  return result;
}

export {createMatrix, getRandomNumber, pickRandomProperty};
