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
  }
}

var v = new Validator();
console.log(v.validate("haegwjzuvuyypxyu"));
