"use strict";

const GRID_SIZE = 1000;

var lights = [];

for (var i = 0; i < GRID_SIZE; i++) {
  lights[i] = [];
}

var exp = /^(\bturn off \b|\btoggle \b|\bturn on \b)(\d+),(\d+)(\b through \b)(\d+),(\d+)/gm;

var input = `turn on 0,0 through 2,2`;

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

for (var line of input.split('\n')) {
  var parsed = exp.exec(input);

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
      lights[x][y] = true;
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
