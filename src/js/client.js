import React from 'react';
import ReactDOM from 'react-dom';
import Dungeon from './dungeon.js';

import {createMatrix, getRandomNumber} from './utils.js';

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
      map: map,
      hero: hero,
      enemy: goblin
    };
  }

  prepareRoom() {
    const x = getRandomNumber(0, 30);
    const y = getRandomNumber(0, 50);
    const l = 3;
    const h = 4;
    let roomCoordinates = [];
    // let thisMap = this.state.map;
    for (let i = 0; i < l; i++) {
      for (let j = 0; j < h; j++) {
        roomCoordinates.push([x + i, y + j]);
        // thisMap[x + i][y + j] = '1';
      }
    }
    let prova = roomCoordinates.some((arr) => this.checkSquare(arr));
    if (prova) {
      return;
    } else {
      console.log('OK');
      // this.setRoom(thisMap);
    }
  }

  checkSquare(arr) {
    return this.state.map[arr[0]][arr[1]] === '1';
  }

  setRoom(map) {
    this.setState({
      map: map
    });
  }

  render() {
    return (
      <div className='main container'>
        <div className='text-right'>
          <Dungeon map={this.state.map} />
          <button onClick={this.prepareRoom.bind(this)}>Click Me</button>
          <p>© 2017 CRISBNK</p>
        </div>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);
