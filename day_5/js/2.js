"use strict";

class Validator {
  validate (input) {
    var last_but_one = undefined;
    var last = undefined;
    var contains_double = false;
    for (var c of input) {
      if (c === last_but_one) {
          contains_double = true;
          break;
      }

      last_but_one = last;
      last = c;
    }

    if (!contains_double) {
      return false;
    }

    var alphabet = ['a', 'b', 'c', 'd', 'e',
                  'f', 'g', 'h', 'i', 'j',
                  'k', 'l', 'm', 'n', 'o',
                  'p', 'q', 'r', 's', 't',
                  'u', 'v', 'w', 'x', 'y',
                  'z'];
    var doubles = 0;
    for (var l of alphabet) {
      var exp = new RegExp(l, "g");
      var count = (input.match(exp) || []).length;

      if (count % 2 === 0) {
        doubles += count;
      }
    }

    if (doubles < 4) {
      return false;
    }

    return true;
  }
}

var input = `qjhvhtzxzqqjkmpb`;

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
