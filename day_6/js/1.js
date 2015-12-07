"use strict";

const GRID_SIZE = 1000;

var lights = [];

for (var i = 0; i < GRID_SIZE; i++) {
  lights[i] = [];
}

var exp = /^(\bturn off \b|\btoggle \b|\bturn on \b)(\d+),(\d+)(\b through \b)(\d+),(\d+)/gm;

var input = `turn off 660,55 through 986,197
turn off 341,304 through 638,850
turn off 199,133 through 461,193
toggle 322,558 through 977,958
toggle 537,781 through 687,941
turn on 226,196 through 599,390
turn on 240,129 through 703,297
turn on 317,329 through 451,798
turn on 957,736 through 977,890
turn on 263,530 through 559,664`;

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
  console.log("on!");
}

function turnOff (start, end) {
  console.log("off!");
}

function toggle (start, end) {
  console.log("toggle");
}
