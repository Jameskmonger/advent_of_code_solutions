"use strict";

const GRID_SIZE = 1000;

var lights = [];

for (var i = 0; i < GRID_SIZE; i++) {
  lights[i] = [];
}

var exp = /^(\bturn off \b|\btoggle \b|\bturn on \b)(\d+),(\d+)(\b through \b)(\d+),(\d+)/;

var input = `turn on 0,0 through 9,9
turn on 95,95 through 100,100`;

class Point {
  constructor(x, y) {
    this.x = parseInt(x);
    this.y = parseInt(y);
  }
}

for (var line of input.split('\n')) {
  var parsed = exp.exec(line);

  var instruction = parsed[1];

  var start = new Point(parsed[2], parsed[3]);
  var end = new Point(parsed[5], parsed[6]);

  switch (instruction) {
    case "turn on ":
      turnOn(start, end);
    break;
    case "turn off ":
      turnOff(start, end);
    break;
    case "toggle ":
      toggle(start, end);
    break;
  }
}

var on_count = 0;
for (var x = 0; x < 1000; x++) {
  for (var y = 0; y <= 1000; y++) {
    if (lights[x][y]) {
      on_count++;
    }
  }
}

console.log(on_count + " lights are on");

function turnOn (start, end) {
  for (var x = start.x; x <= end.x; x++) {
    for (var y = start.y; y <= end.y; y++) {
      lights[x][y] = true;
    }
  }
}

function turnOff (start, end) {
  for (var x = start.x; x <= end.x; x++) {
    for (var y = start.y; y <= end.y; y++) {
      lights[x][y] = false;
    }
  }
}

function toggle (start, end) {
  for (var x = start.x; x <= end.x; x++) {
    for (var y = start.y; y <= end.y; y++) {
      if (lights[x][y] === true) {
        lights[x][y] = false;
        continue;
      } else {
        lights[x][y] = true;
        continue;
      }
    }
  }
}
