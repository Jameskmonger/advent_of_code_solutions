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

console.log(lights);
