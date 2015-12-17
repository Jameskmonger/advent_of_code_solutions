"use strict";

var sizes = `20
15
10
5
5`.split('\n').map(s => parseInt(s));

const REQUIRED_AMOUNT = 25;

var results = [];

var i = 0;

while (true) {
  i++;

  if (i > 50000)
  break;

  var shuf = getRandom(sizes, Math.floor(Math.random() * sizes.length) + 1).sort();

  if (sum(shuf) === REQUIRED_AMOUNT) {
    var str = "";
    for (var s in shuf) {
      str += shuf[s] + ",";
    }

    if (results.indexOf(str) === -1) {
      results.push(str);
    }
  }
}

console.log(results);

function sum (arr) {
  var count = 0;
  arr.forEach(x => { count += x; });
  return count;
}

function getRandom (arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len;
    }
    return result;
}
