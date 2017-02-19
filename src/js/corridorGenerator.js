import {pickRandomProperty} from './utils.js';

const equal = require('deep-equal');
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
  const corridor = createCorridors(map);
  return corridor;
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
  isInIter(iter, nextCoord);
  if (checkValidCoord(map, nextCoord) === '0') {
    console.log('Pushed!', iter);
    iter.push(nextCoord);
    itinere(iter, map);
  } else if (checkValidCoord(map, nextCoord) === '1') {
    itinere(iter, map);
  } else {
    console.log('Corridor STOP!');
  }
  return iter;
}

function checkValidCoord(map, nextCoord) {
  return map[nextCoord.y][nextCoord.x];
}

function isInIter(iter, nextCoord) {
  return iter.some(coord => areObjEquals(coord, nextCoord));
}

function areObjEquals(objA, objB) {
  return equal(objA, objB);
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
