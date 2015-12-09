"use strict";

const input = `0 to 1 = 464
0 to 2 = 518
1 to 2 = 141`;

// We need to shuffle the array so we can brute force it properly
function shuffle (arr) {
  var out = [];
  while (arr.length !== 0) {
    var index = Math.floor(Math.random() * arr.length);
    out.push(arr.splice(index, 1)[0]);
  }
  return out;
}

// Split the input into multiple lines
const lines = input.split('\n');

// Hold the distances from different nodes
var routes = [];

// Parse the lines
for (var line of lines) {
  const EXP = /^(\d+)\b to \b(\d+)\b = \b(\d+)$/g;

  const parsed = EXP.exec(line);

  const a = parseInt(parsed[1]),
        b = parseInt(parsed[2]),
        d = parseInt(parsed[3]);

  // The nodes for a and b may be undefined, we need to make them arrays
  if (routes[a] === undefined) {
    routes[a] = [];
  }

  if (routes[b] === undefined) {
    routes[b] = [];
  }

  routes[a][b] = d;
  routes[b][a] = d;
}

// At thie point we only care about the locations - not their relationships to others
var locations = Object.keys(routes);

// We need a value as our initial "minimum" - integer top bound will do
var min = Number.MAX_SAFE_INTEGER;

// 100000 is an arbitrary number
for (var i = 0; i < 100000; i++) {
  // Shuffle the locations so we can brute force
  locations = shuffle(locations);

  // The current length for this start location is 0 - we haven't gone anywhere yet
  var length = 0;

  // Go through each location in the array and add the path
  for (var l = 0; l < (locations.length - 1); l++) {
    var a = locations[l];
    var b = locations[l + 1];
    length += routes[a][b];
  }

  // What's shorter? Our current minimum, or our current length?
  min = Math.min(min, length);
}

console.log(min);
