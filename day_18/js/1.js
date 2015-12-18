"use strict";

const CHARACTER_ON = '#';
const CHARACTER_OFF = '.';

const STEP_COUNT = 4;

let inputLines = `.#.#.#
...##.
#....#
..#...
#.#..#
####..`.split('\n');

let lights = [];

for (let i = 0; i < inputLines.length; i++) {
  lights[i] = [];

  for (let c = 0; c < inputLines[i].length; c++) {
    let char = inputLines[i][c];

    if (char === CHARACTER_ON) {
      lights[i][c] = true;
    } else if (char === CHARACTER_OFF) {
      lights[i][c] = false;
    }
  }
}

for (let i = 0; i < STEP_COUNT; i++) {
  processLights();
}

console.log(countLitLights());

function countLitLights() {
  let lit = 0;

  for (let i = 0; i < lights.length; i++) {
    for (let j = 0; j < lights[i].length; j++) {
      if (lights[i][j]) {
        lit++;
      }
    }
  }

  return lit;
}

function processLights() {
  let clone = JSON.parse(JSON.stringify(lights));

  for (let i = 0; i < lights.length; i++) {
    for (let j = 0; j < lights[i].length; j++) {
      let neighbours = getLitNeighbourCount(j, i);

      if (lights[i][j]) {
        if (neighbours !== 2 && neighbours !== 3) {
          clone[i][j] = false;
        }
      } else {
        if (neighbours === 3) {
          clone[i][j] = true;
        }
      }
    }
  }

  lights = clone;
}

function getLitNeighbourCount(targetY, targetX) {
  let neighbours = [
    { x: targetX - 1, y: targetY - 1 },
    { x: targetX - 1, y: targetY + 0},
    { x: targetX - 1, y: targetY + 1 },
    { x: targetX + 0, y: targetY - 1 },
    { x: targetX + 0, y: targetY + 1 },
    { x: targetX + 1, y: targetY - 1 },
    { x: targetX + 1, y: targetY + 0 },
    { x: targetX + 1, y: targetY + 1 },
  ];

  let lit = 0;

  for (let n of neighbours) {
    if (n.x < 0 || n.y < 0 || n.x >= lights.length || n.y >= lights[n.x].length) {
      continue;
    }

    if (lights[n.x][n.y] == true) {
      lit++;
    }
  }

  return lit;
}
