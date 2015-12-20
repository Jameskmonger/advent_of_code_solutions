"use strict";

let REPLACEMENTS = [
  ["H", "HO"],
  ["H", "OH"],
  ["O", "HH"]
];

let INPUT = "HOH";

let output = [];

for (let r of REPLACEMENTS) {
  let position = 0;
  while (true) {
    position = INPUT.indexOf(r[0], position);

    if (position === -1) {
      break;
    }

    let rep = replace(INPUT, r[0], r[1], position);

    if (output.indexOf(rep) === -1) {
      output.push(rep);
    }

    position += r[0].length;
  }
}

console.log(output);

function replace(s, i, o, pos) {
  return s.substring(0, pos) + o + s.substring(pos + i.length);
}
