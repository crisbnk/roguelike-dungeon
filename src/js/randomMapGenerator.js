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

import {createMatrix, getRandomNumber} from './utils.js';

let map = [];

function randomMapGenerator(mapHeight, mapLength, attempts) {
  const cell = '0';
  let i = 0;
  map = createMatrix(mapHeight, mapLength, cell);
  while (i < attempts) {
    createRoomCoordinates(mapHeight, mapLength);
    i++;
  }
  return map;
}

// Create room with coordinates
function createRoomCoordinates(mapHeight, mapLength) {
  const l = getRandomNumber(3, 7);
  const h = getRandomNumber(3, 7);
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

function clearRoomAfterMap() {
  console.log('Clear');
}

export {randomMapGenerator};
