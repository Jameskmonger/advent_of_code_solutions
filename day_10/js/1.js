"use strict";

// Find out the indexes where the string needs splitting
function getSplitIndexes(str) {
  // Initialise the last checked character as the first in the string
  var last_char = str[0];

  var splits = [];
  for (var i in str) {
    // If this char is different to the last one we checked, add it to the list
    if (str[i] !== last_char) {
      splits.push(i);
    }

    last_char = str[i];
  }

  return splits;
}

function process(str) {
  var splits = getSplitIndexes(str);

  console.log(splits);
}

process("121");
process("1112215");
