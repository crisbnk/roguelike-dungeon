import { corridorGenerator } from '../src/js/corridorGenerator';
import { randomMapGenerator } from '../src/js/randomMapGenerator.js';
import { expect } from 'chai';

describe('corridorGenerator', () => {
  const height = 30;
  const lenght = 50;
  const attempts = 150;
  const randomMap = randomMapGenerator(height, lenght, attempts);
  // const corridorArray = corridorGenerator(randomMap);

  it('should be a function', () => {
    expect(corridorGenerator).to.be.a('function');
  });

  // it('should be an array', () => {
  //   expect(corridorArray).to.be.an('array');
  // });
  //
  // it('should be an object', () => {
  //   corridorArray.forEach(coord => {
  //     expect(coord).to.be.an('object');
  //   });
  // });
});
