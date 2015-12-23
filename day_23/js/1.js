(function() {
  "use strict";

  const INSTRUCTIONS = `inc a
jio a, +2
tpl a
inc a`.split('\n');

  let registers = [];

  function processInstruction(instruction) {
    let parts = instruction.split(' ');
    let tag = parts[0];

    switch (tag) {
      case "hlf":
        let reg = parts[1];
        registers[reg] /= 2;
        break;
    }
  }
})();
