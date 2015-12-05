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
