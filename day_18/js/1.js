"use strict";

const CHARACTER_ON = '#';
const CHARACTER_OFF = '.';

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
