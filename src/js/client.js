import React from 'react';
import ReactDOM from 'react-dom';
import Dungeon from './dungeon.js';

import {createMatrix, getRandomNumber} from './utils.js';
import {randomMapGenerator} from './randomMapGenerator.js';

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
    const cell = '0';
    const map = createMatrix(30, 50, cell);
    const hero = new Character(100, 0, 'fists', 1, 1);
    const goblin = new Character(15, 1, 'dogslicer', 3, 4);
    this.state = {
      roomAttempt: 150,
      mapHeight: 30,
      mapLength: 50,
      map: map,
      hero: hero,
      enemy: goblin
    };
  }

  componentWillMount() {
    const randomMap = randomMapGenerator(
      this.state.mapHeight,
      this.state.mapLength,
      this.state.roomAttempt
    );

    this.setState({
      map: randomMap
    });
  }

  render() {
    return (
      <div className='main container'>
        <div className='text-right'>
          <Dungeon map={this.state.map} />
          <p>© 2017 CRISBNK</p>
        </div>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);
