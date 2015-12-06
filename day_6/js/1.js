"use strict";

var SIZE = 1000;

var State = {
  OFF: 0,
  ON: 1
}

class Light {
  constructor() {
    this.state = State.OFF;
  }

  toggle() {
    if (this.state === State.ON) {
      this.state = State.OFF;
      return;
    } else if (this.state === State.OFF) {
      this.state = State.ON;
      return;
    }
  }
}

var lights = [];

function setupLights() {
  for (var i = 0; i < SIZE; i++) {
    lights[i] = [];

    for (var l = 0; l < SIZE; l++) {
      lights[i][l] = new Light();
    }
  }
}

class Point {
  constructor(str) {
    var parts = str.split(',');

    this.x = parts[0];
    this.y = parts[1];
  }
}

var InstructionType = {
  OFF: 0,
  ON: 1,
  TOGGLE: 2
}

class Instruction {
  constructor(type, start, end) {
    this.type = type;
    this.start = start;
    this.end = end;
  }
}

function parseInstructions(input) {
  var instructions = [];

  for (var line of input.split('\n')) {
    var type = undefined;

    if (line.startsWith("turn off ")) {
      type = InstructionType.OFF;
      line = line.slice(9);
    }

    if (line.startsWith("turn on ")) {
      type = InstructionType.ON;
      line = line.slice(8);
    }

    if (line.startsWith("toggle ")) {
      type = InstructionType.TOGGLE;
      line = line.slice(7);
    }

    var parts = line.split(" through ");

    var start = new Point(parts[0]);
    var end = new Point(parts[1]);

    var ins = new Instruction(type, start, end);

    instructions.push(ins);
  }

  return instructions;
}

function applyInstruction(ins) {
  for (var x = ins.start.x; x < ins.end.x; x++) {
    for (var y = ins.start.y; y < ins.end.y; y++) {
      if (ins.type === InstructionType.OFF) {
        lights[x][y].state = State.OFF;
      } else if (ins.type === InstructionType.ON) {
        lights[x][y].state = State.ON;
      } else if (ins.type === InstructionType.TOGGLE) {
        lights[x][y].toggle();
      }
    }
  }
}

setupLights();

var input = `turn off 199,133 through 461,193
toggle 322,558 through 977,958
turn on 226,196 through 599,390`;

var instructions = parseInstructions(input);

for (var i of instructions) {
  applyInstruction(i);
}
