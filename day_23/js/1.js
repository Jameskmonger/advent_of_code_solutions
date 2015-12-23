(function() {
  "use strict";

  const INSTRUCTIONS = `inc a
jio a, +2
tpl a
inc a`.split('\n');

  let registers = [];

  let pointer = 0;
  while (true) {

  }

  function processInstruction(instruction) {
    let parts = instruction.split(' ');
    let tag = parts[0];

    switch (tag) {
      case "hlf":
        let reg = parts[1];
        registers[reg] /= 2;
        break;
      case "tpl":
        let reg = parts[1];
        registers[reg] *= 3;
        break;
      case "inc":
        let reg = parts[1];
        registers[reg] += 1;
        break;
      case "jmp":
        let reg = parts[1];
        pointer += parseInt(parts[2]);
        break;
      case "jie":
        let reg = parts[1].replace(',', '');
        if (registers[reg] % 2 === 0) {
          pointer += parseInt(parts[2]);
        }
        break;
      case "jio":
        let reg = parts[1].replace(',', '');
        if (registers[reg] === 1) {
          pointer += parseInt(parts[2]);
        }
        break;
    }
  }
})();
