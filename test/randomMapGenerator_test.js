import { randomMapGenerator } from '../src/js/randomMapGenerator';
import { expect } from 'chai';

describe('randomMapGenerator', () => {
  it('should be a function', () => {
    expect(randomMapGenerator).to.be.a('function');
  });
});
