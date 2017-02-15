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
    expect(number).to.be.within(min, max);
  });
});

describe('pickRandomProperty', () => {
  const directions = {
    n: 0,
    s: 0,
    e: 0,
    o: 0
  };
  const property = pickRandomProperty(directions);

  it('should be a function', () => {
    expect(pickRandomProperty).to.be.a('function');
  });

  it('should be a string', () => {
    expect(property).to.be.a('string');
  });

  it('should be a key between n, s, o, e', () => {
    expect(directions).to.have.any.keys(property);
  });

});
