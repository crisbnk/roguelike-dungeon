import { corridorGenerator } from '../src/js/corridorGenerator';
import { expect } from 'chai';

describe('corridorGenerator', () => {

  it('should be a function', () => {
    expect(corridorGenerator).to.be.a('function');
  });
});
