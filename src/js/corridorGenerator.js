import {pickRandomProperty} from './utils.js';
import {checkSquare} from './randomMapGenerator.js';

let iter = [];
const directions = {
  n: {
    x: 0,
    y: -1
  },
  s: {
    x: 0,
    y: 1
  },
  e: {
    x: 1,
    y: 0
  },
  o: {
    x: -1,
    y: 0
  }
};

function corridorGenerator(map) {
  const iter = createCorridors(map);
  return iter;
}

function createCorridors(map) {
  const startCoordinates = findFreeSquare(map);
  let iterArray = [];
  iter.push(startCoordinates);
  if (!startCoordinates) {
    console.log(startCoordinates);
    console.log('STOP');
  } else {
    iterArray = itinere(iter, map);
  }
  return iterArray;
}

function findFreeSquare(map) {
  const coordinates = {};
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      if (map[i][j] === '0') {
        coordinates.x = j;
        coordinates.y = i;
        return coordinates;
      }
    }
  }
  return coordinates;
}

function itinere(iter, map) {
  const coord = iter[iter.length - 1];
  const goTo = getDirection(map, coord);
  const nextCoord = {};
  nextCoord.x = coord.x + directions[goTo].x;
  nextCoord.y = coord.y + directions[goTo].y;
  if (!checkSquare(nextCoord)) {
    iter.push(nextCoord);
    console.log('Pushed!', iter);
  } else {
    itinere(iter, map);
  }
  return iter;
}

function getDirection(map, coord) {
  const directions = {};
  if (!(coord.y - 1)) {
    directions.n = coord.y - 1;
  }
  if (!(coord.y + 1 > map.length)) {
    directions.s = coord.y + 1;
  }
  if (!(coord.x - 1)) {
    directions.e = coord.x - 1;
  }
  if (!(coord.x > map[0].length)) {
    directions.o = coord.x + 1;
  }
  const randomDirection = pickRandomProperty(directions);
  return randomDirection;
}

export {corridorGenerator};
