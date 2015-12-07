"use strict";

var input = `123 -> x
456 -> y
x AND y -> d
x OR y -> e
x LSHIFT 2 -> f
y RSHIFT 2 -> g
NOT x -> h
NOT y -> i`;

var lines = input.split('\n');

var ASSIGN_REGEX = /^(\d+)\b -> \b([a-zA-Z]+)/gm
var AND_OR_REGEX = /^([a-zA-Z]+)(\b AND \b|\b OR \b)([a-zA-z]+)\b -> \b([a-zA-z]+)/gm
var SHIFT_REGEX = /^([a-zA-Z]+)(\b LSHIFT \b|\b RSHIFT \b)(\d+)\b -> \b([a-zA-z]+)/gm
var NOT_REGEX = /^\bNOT \b([a-zA-z]+)\b -> \b([a-zA-z]+)/gm

var wires = [];

for (var l of lines) {
  if (l.match(ASSIGN_REGEX)) {
    var parsed = ASSIGN_REGEX.exec(l);

    wires[parsed[2]] = parsed[1];
  } else if (l.match(AND_OR_REGEX)) {
    var parsed = AND_OR_REGEX.exec(l);

    var instruction = parsed[2];

    var left = parsed[1];
    var right = parsed[3];
    var to = parsed[4];

    if (instruction === " AND ") {
      wires[to] = wires[left] & wires[right];
    } else if (instruction === " OR ") {
      wires[to] = wires[left] | wires[right];
    }
  } else if (l.match(SHIFT_REGEX)) {
    var parsed = SHIFT_REGEX.exec(l);

    var direction = parsed[2];

    var left = parsed[1];
    var right = parsed[3];
    var to = parsed[4];

    if (direction === " LSHIFT ") {
      wires[to] = wires[left] << right;
    } else if (direction === " RSHIFT ") {
      wires[to] = wires[left] >> right;
    }
  } else if (l.match(NOT_REGEX)) {
    console.log("not: " + l);
  }
}

console.log(wires);
