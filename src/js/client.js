import React from 'react';
import ReactDOM from 'react-dom';
import Dungeon from './dungeon.js';

import {createMatrix, getRandomNumber, squareSurroundings} from './utils.js';

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
      mapHeight: 30,
      mapLength: 50,
      map: map,
      hero: hero,
      enemy: goblin
    };
  }

  // Create room with coordinates
  createRoomCoordinates() {
    const l = 3;
    const h = 4;
    const x = getRandomNumber(0, this.state.mapHeight - l);
    const y = getRandomNumber(0, this.state.mapLength - h);
    let roomCoordinates = [];
    for (let i = 0; i < l; i++) {
      for (let j = 0; j < h; j++) {
        roomCoordinates.push({x: x + i, y: y + j});
      }
    }
    console.log(roomCoordinates);
    let checked = this.checkValidRoom(roomCoordinates);
    console.log(checked);
    if (!checked) {
      const newMap = this.addRoom(roomCoordinates);
      this.setRoom(newMap);
    }
  }

  // Check if room coordinates are valid (not overlap to another room)
  checkValidRoom(roomCo) {
    return roomCo.some(obj => this.checkSquare(obj));
  }

  // Check if a square is already occupied
  checkSquare(obj) {
    return this.state.map[obj.x][obj.y] === '1';
  }

  // Add room to matrix
  addRoom(room) {
    let newMap = this.state.map;
    room.forEach(obj => {
      newMap[obj.x][obj.y] = '1';
    });
    return newMap;
  }

  // Set new room in the map
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
          <button
            onClick={this.createRoomCoordinates.bind(this)}
            >
              Click Me
          </button>
          <p>© 2017 CRISBNK</p>
        </div>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);
