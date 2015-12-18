"use strict";

var sizes = `20
15
10
5
5`.split('\n').map(s => parseInt(s));

var jugs = [];

class Size {
  constructor(index, size) {
    this.index = index;
    this.size = size;
  }
}

for (let s in sizes) {
  jugs.push(new Size(s, sizes[s]));
}

const REQUIRED_AMOUNT = 150;

var lowest = 99999999;

var results = [];

var i = 0;

while (true) {
  i++;

  var shuf = getRandom(jugs, Math.floor(Math.random() * jugs.length) + 1).sort(function (a, b) {
    return a.index - b.index;
  });

  if (sum(shuf) === REQUIRED_AMOUNT) {
    var str = "";
    for (var s in shuf) {
      str += shuf[s].index + ",";
    }

    // Put your lowest number here (calculate it first)
    if (shuf.length === 2) {
      if (results.indexOf(str) === -1) {
        results.push(str);
      }
    }
  }

  if (i > 10000000) {
    break;
  }
}

console.log(results.length);

function sum (arr) {
  var count = 0;
  arr.forEach(j => { count += j.size; });
  return count;
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

function getRandom (arr, n) {
  arr = shuffle(arr);

  let out = [];
  for (var i = 0; i < n; i++) {
    out.push(arr[i]);
  }
  return out;
}
