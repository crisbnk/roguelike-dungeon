import { randomMapGenerator } from '../src/js/randomMapGenerator';
import { expect } from 'chai';

describe('randomMapGenerator', () => {
  const height = 30;
  const lenght = 50;
  const attempts = 150;
  const randomMap = randomMapGenerator(height, lenght, attempts);

  it('should be a function', () => {
    expect(randomMapGenerator).to.be.a('function');
  });

  it('should be an array', () => {
    expect(randomMap).to.be.an('array');
  });

  it('should have right lenght', () => {
    expect(randomMap).to.have.lengthOf(height);
    expect(randomMap[0]).to.have.lengthOf(lenght);
  });
});
