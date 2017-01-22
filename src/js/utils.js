function createMatrix(r, c, num) {
  return Array(r).fill().map(() => Array(c).fill(num));
}

export {createMatrix};
