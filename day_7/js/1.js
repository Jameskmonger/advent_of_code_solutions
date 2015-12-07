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

for (var l of lines) {
  if (l.match(ASSIGN_REGEX)) {
    console.log("assign: " + l);
  } else if (l.match(AND_OR_REGEX)) {
    console.log("and or: " + l);
  } else if (l.match(SHIFT_REGEX)) {
    console.log("shift: " + l);
  } else if (l.match(NOT_REGEX)) {
    console.log("not: " + l);
  }
}
