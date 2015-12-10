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

    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var vowel_count = 0;
    for (var v of vowels) {
      var exp = new RegExp(v, "g");

      var count = (input.match(exp) || []).length;
      vowel_count += count;
    }

    if (vowel_count < 3) {
      return false;
    }

    return true;
  }
}

var input = `hello james
i am a mouse`;

var nice_count = 0;

var v = new Validator();
for (var i of input.split('\n'))
{
  if (v.validate(i) === true)
  {
    nice_count++;
  }
}

console.log(nice_count + " nice strings");
