"use strict";

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

var input = "";

var lines = input.split('\n');

var ASSIGN_REGEX = /^(\d+)\b -> \b([a-zA-Z]+)/gm
var AND_OR_REGEX = /^([a-zA-Z]+)(\b AND \b|\b OR \b)([a-zA-z]+)\b -> \b([a-zA-z]+)/gm
var SHIFT_REGEX = /^([a-zA-Z]+)(\b LSHIFT \b|\b RSHIFT \b)(\d+)\b -> \b([a-zA-z]+)/gm
var NOT_REGEX = /^\bNOT \b([a-zA-z]+)\b -> \b([a-zA-z]+)/gm

var NUMERIC_AND_REGEX = /^(\d+)\b AND \b([a-zA-Z]+)\b -> \b([a-zA-Z]+)/gm
var WIRE_ASSIGN_REGEX = /^([a-zA-Z]+)\b -> \b([a-zA-Z]+)/gm

var wires = [];

while (lines.length > 0) {
  var removals = [];

  for (var i in lines) {
    var l = String(lines[i]);

    var processed = false;

    if (l.match(ASSIGN_REGEX)) {
      var parsed = ASSIGN_REGEX.exec(l);

      wires[parsed[2]] = parsed[1];

      processed = true;
    } else if (l.match(AND_OR_REGEX)) {
      var parsed = AND_OR_REGEX.exec(l);

      var instruction = parsed[2];

      var left = parsed[1];
      var right = parsed[3];
      var to = parsed[4];

      if (wires[left] === undefined || wires[right] === undefined) {
        processed = false;
      } else {
        if (instruction === " AND ") {
          wires[to] = wires[left] & wires[right];
        } else if (instruction === " OR ") {
          wires[to] = wires[left] | wires[right];
        }

        processed = true;
      }
    } else if (l.match(SHIFT_REGEX)) {
      var parsed = SHIFT_REGEX.exec(l);

      var direction = parsed[2];

      var left = parsed[1];
      var right = parsed[3];
      var to = parsed[4];

      if (wires[left] === undefined) {
        processed = false;
      } else {
        if (direction === " LSHIFT ") {
          wires[to] = wires[left] << right;
        } else if (direction === " RSHIFT ") {
          wires[to] = wires[left] >> right;
        }

        processed = true;
      }
    } else if (l.match(NOT_REGEX)) {
      var parsed = NOT_REGEX.exec(l);

      var from = parsed[1];
      var to = parsed[2];

      if (wires[from] === undefined) {
        processed = false;
      } else {
        wires[parsed[2]] = 65536 + (~ wires[parsed[1]]);

        processed = true;
      }
    } else if (l.match(NUMERIC_AND_REGEX)) {
      var parsed = NUMERIC_AND_REGEX.exec(l);

      var right = parsed[2];

      if (wires[right] === undefined) {
        processed = false;
      } else {
        wires[parsed[3]] = parsed[1] & wires[parsed[2]];

        processed = true;
      }
    } else if (l.match(WIRE_ASSIGN_REGEX)) {
      var parsed = WIRE_ASSIGN_REGEX.exec(l);

      var right = parsed[1];

      if (wires[right] === undefined) {
        processed = false;
      } else {
        wires[parsed[2]] = wires[parsed[1]];

        processed = true;
      }
    }

    if (processed) {
      removals.push(l);
    }
  }

  for (var r of removals) {
    var i = lines.indexOf(r);

    lines.splice(i, 1);
  }
}

console.log(wires['a']);
