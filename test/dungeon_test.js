import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Dungeon from '../src/js/dungeon';

describe('<Dungeon />', () => {
  it('renders the entire map', () => {
    const map = [['0', '0'], ['0', '0']];
    const wrapper = mount(<Dungeon map={map} />);
    expect(wrapper.prop('map')).to.have.lengthOf(2);
  });
});
