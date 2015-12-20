"use strict";

let REPLACEMENTS = [
  ["e", "H"],
  ["e", "O"],
  ["H", "HO"],
  ["H", "OH"],
  ["O", "HH"]
];

let INPUT = "HOH";

let count = 0;

while (true) {
  let before = (INPUT + "");

  for (let r of shuffle(REPLACEMENTS)) {
    if (before.indexOf(r[1]) !== -1) {
      before = replace(before, r[1], r[0], before.lastIndexOf(r[1]));

      count++;
    }
  }

  if (before === "e") {
    break;
  }
}

console.log(count);

function replace(s, i, o, pos) {
  return s.substring(0, pos) + o + s.substring(pos + i.length);
}

function shuffle(array) {
  var counter = array.length, temp, index;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}
