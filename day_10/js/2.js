"use strict";

String.prototype.repeat = function(num) {
    return new Array(num + 1).join(this);
};

// Find out the indexes where the string needs splitting
function getSplitIndexes(str) {
  // Initialise the last checked character as the first in the string
  var last_char = str[0];

  // We need to include the first segment
  var splits = [0];
  for (var i in str) {
    // If this char is different to the last one we checked, add it to the list
    if (str[i] !== last_char) {
      splits.push(i);
    }

    last_char = str[i];
  }

  return splits;
}

function getParts(str) {
  var splits = getSplitIndexes(str);

  var parts = [];

  for (var i = 0; i < splits.length; i++) {
    var now = splits[i];
    var next = splits[i + 1];

    if (next === undefined) {
      parts.push(str.substring(now));
    } else {
      parts.push(str.substring(now, next));
    }
  }

  return parts;
}

function process(str) {
  var parts = getParts(str);

  var output = "";

  for (var part of parts) {
    output += (part.length + "" + part[0]);
  }

  return output;
}

var input = "1113122113";

for (var i = 0; i < 50; i++) {
  input = process(input);
}

console.log(input.length);
