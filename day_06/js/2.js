"use strict";

const GRID_SIZE = 1000;

var lights = [];

for (var x = 0; x < GRID_SIZE; x++) {
  lights[x] = [];

  for (var y = 0; y < GRID_SIZE; y++) {
    lights[x][y] = 0;
  }
}

var exp = /^(\bturn off \b|\btoggle \b|\bturn on \b)(\d+),(\d+)(\b through \b)(\d+),(\d+)/;

var input = ``;

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

var total_brightness = 0;
for (var x = 0; x < 1000; x++) {
  for (var y = 0; y < 1000; y++) {
    total_brightness += lights[x][y];
  }
}

console.log("Total brightness: " + total_brightness);

function turnOn (start, end) {
  for (var x = start.x; x <= end.x; x++) {
    for (var y = start.y; y <= end.y; y++) {
      lights[x][y] += 1;
    }
  }
}

function turnOff (start, end) {
  for (var x = start.x; x <= end.x; x++) {
    for (var y = start.y; y <= end.y; y++) {
      if (lights[x][y] > 0) {
        lights[x][y] -= 1;
      } else {
        lights[x][y] = 0;
      }
    }
  }
}

function toggle (start, end) {
  for (var x = start.x; x <= end.x; x++) {
    for (var y = start.y; y <= end.y; y++) {
      lights[x][y] += 2;
    }
  }
}
