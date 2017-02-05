import {
  createMatrix,
  getRandomNumber,
  pickRandomProperty
} from '../src/js/utils';
import { expect } from 'chai';

describe('createMatrix', () => {
  const row = getRandomNumber(1, 20);
  const cols = getRandomNumber(1, 20);
  const matrix = createMatrix(row, cols, '0');

  it('should be a function', () => {
    expect(createMatrix).to.be.a('function');
  });
  it('should be an array', () => {
    expect(matrix).to.be.an('array');
  });
  it('should have right lenght', () => {
    expect(matrix).to.have.lengthOf(row);
    expect(matrix[0]).to.have.lengthOf(cols);
  });
});

describe('getRandomNumber', () => {
  it('should be a function', () => {
    expect(getRandomNumber).to.be.a('function');
  });
});

describe('pickRandomProperty', () => {
  it('should be a function', () => {
    expect(pickRandomProperty).to.be.a('function');
  });
});
