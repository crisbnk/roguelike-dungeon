import React from 'react';
import ReactDOM from 'react-dom';

import {createMatrix} from './utils.js';

class Character {
  constructor(h, l, w, a, d) {
    this.health = h;
    this.level = l;
    this.weapon = w;
    this.armor = a;
    this.damage = d;
  }

  move(direction) {
    console.log(`Moving to ${direction}`);
  }
  attack(h) {
    console.log(`Attacking with ${h} hitpoints`);
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    const cell = {};
    const map = createMatrix(10, 20, cell);
    const hero = new Character(100, 0, 'fists', 1, 1);
    const goblin = new Character(15, 1, 'dogslicer', 3, 4);
    this.state = {
      map: map,
      hero: hero,
      enemy: goblin
    };
  }

  render() {
    return (
      <div className='main container'>
        <div className='text-right'>
          <p>© 2017 CRISBNK</p>
        </div>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);
