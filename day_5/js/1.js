"use strict";

String.prototype.contains = function(it) { return this.indexOf(it) != -1; };

class Validator {
  validate (input) {
    var always_naughty = ["ab", "cd", "pq", "xy"];

    for (var a of always_naughty) {
      if (input.contains(a)) {
        return false;
      }
    }

    var last_c = undefined;
    var contains_double = false;
    for (var c of input) {
      if (c === last_c) {
        contains_double = true;
        break;
      }

      last_c = c;
    }

    if (!contains_double) {
      return false;
    }

    return true;
  }
}

var v = new Validator();
console.log(v.validate("hello james"));
