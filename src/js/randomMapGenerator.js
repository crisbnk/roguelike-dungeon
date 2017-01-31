// Set doors in every room
  // Check nearest room
  // Create corridor between nearest room

  // or

  // Create rooms random
  // Create random maze with corridors:
  // 1 - start from a point
  // 2 - take a random direction
  // 3 - check if you can create a corridor square (no overlap room/corridors)
  //  n.b. - the corridor square should be created checking two square distance
  // 4 - add square coordinates to an Array and draw it on the matrix
  // 5 - go on like this until there are no possibilities left
  // 6 - pop last array item and go from #1
  // See http://journal.stuffwithstuff.com/2014/12/21/rooms-and-mazes/

import {createMatrix, getRandomNumber, pickRandomProperty} from './utils.js';

let map = [];
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

function randomMapGenerator(mapHeight, mapLength, attempts) {
  const cell = '0';
  let i = 0;
  map = createMatrix(mapHeight, mapLength, cell);
  while (i < attempts) {
    createRoomCoordinates(mapHeight, mapLength);
    i++;
  }
  clearMapAfterRooms(mapHeight, mapLength);
  createCorridors(map, mapHeight, mapLength);
  return map;
}

// Create room with coordinates
function createRoomCoordinates(mapHeight, mapLength) {
  const l = getRandomNumber(4, 7);
  const h = getRandomNumber(3, 6);
  const x = getRandomNumber(1, mapLength - l - 1);
  const y = getRandomNumber(1, mapHeight - h - 1);
  let roomCoordinates = [];
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < h; j++) {
      roomCoordinates.push({x: x + i, y: y + j});
    }
  }
  console.log(roomCoordinates);
  let checked = checkValidRoom(roomCoordinates);
  console.log(checked);
  if (!checked) {
    const newMap = addRoom(roomCoordinates, l, h);
    setRoom(newMap);
  }
}

// Check if room coordinates are valid (not overlap to another room)
function checkValidRoom(roomCo) {
  return roomCo.some(obj => checkSquare(obj));
}

// Check if a square is already occupied
function checkSquare(obj) {
  return (
    map[obj.y][obj.x] === '1' ||
    map[obj.y][obj.x] === '2'
  );
}

// Add room to matrix
function addRoom(room, l, h) {
  const epX = room[0].x - 1;
  const epY = room[0].y - 1;
  let newMap = map;
  room.forEach(obj => {
    newMap[obj.y][obj.x] = '1';
  });
  for (let i = 0; i <= l + 1; i++) {
    newMap[epY][epX + i] = '2';
    newMap[epY + h + 1][epX + i] = '2';
  }
  for (let j = 0; j <= h + 1; j++) {
    newMap[epY + j][epX] = '2';
    newMap[epY + j][epX + l + 1] = '2';
  }
  return newMap;
}

// Set new room in the map
function setRoom(newMap) {
  map = newMap;
}

function clearMapAfterRooms(mapHeight, mapLength) {
  for (let i = 0; i < mapHeight; i++) {
    for (let j = 0; j < mapLength; j++) {
      if (map[i][j] === '2') {
        map[i][j] = '0';
      }
    }
  }
}

function createCorridors(map, mapHeight, mapLength) {
  const startCoordinates = getFreeSquare(map, mapHeight, mapLength);
  iter.push(startCoordinates);
  if (!startCoordinates) {
    console.log(startCoordinates);
    console.log('STOP');
  } else {
    itinere(iter, map);
  }
}

function getFreeSquare(newMap, mapHeight, mapLength) {
  const coordinates = {};
  for (let i = 0; i < mapHeight; i++) {
    for (let j = 0; j < mapLength; j++) {
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
  console.log(iter);
  const coord = iter[iter.length - 1];
  const goTo = getDirection(map, coord);
  const nextCoord = {};
  nextCoord.x = coord.x + directions[goTo].x;
  nextCoord.y = coord.y + directions[goTo].y;
  console.log(coord, goTo, nextCoord);
  if (!checkSquare(nextCoord)) {
    iter.push(nextCoord);
    itinere(iter, map);
  } else {
    itinere(iter, map);
  }
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


export {randomMapGenerator};
