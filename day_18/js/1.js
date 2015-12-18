"use strict";

let inputLines = `.#.#.#
...##.
#....#
..#...
#.#..#
####..`.split('\n');

let lights = [];

for (let i = 0; i < inputLines.length; i++) {
  lights[i] = [];
}

console.log(lights);
