import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import {randomMapGenerator} from '../src/js/randomMapGenerator.js';
import Dungeon from '../src/js/dungeon';

describe('<Dungeon />', () => {
  it('renders the entire map', () => {
    const map = randomMapGenerator(30, 50, 150);
    const wrapper = mount(<Dungeon map={map} />);
    expect(wrapper.prop('map')).to.have.lengthOf(30);
    expect(wrapper.prop('map')[0]).to.have.lengthOf(50);
  });
});
