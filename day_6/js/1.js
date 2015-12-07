"use strict";

const GRID_SIZE = 1000;

var lights = [];

for (var i = 0; i < GRID_SIZE; i++) {
  lights[i] = [];
}

var exp = /^(\bturn off \b|\btoggle \b|\bturn on \b)(\d+),(\d+)(\b through \b)(\d+),(\d+)/gm;

var input = ``;

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
}
