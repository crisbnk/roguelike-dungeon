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
  const min = 2;
  const max = 7;
  const number = getRandomNumber(2, 7);

  it('should be a function', () => {
    expect(getRandomNumber).to.be.a('function');
  });

  it('should be a number', () => {
    expect(number).to.be.a('number');
  });

  it('should be more than min and less than max', () => {
    expect(number).to.be.at.least(min);
    expect(number).to.be.at.most(max);
  });
});

describe('pickRandomProperty', () => {
  it('should be a function', () => {
    expect(pickRandomProperty).to.be.a('function');
  });
});
