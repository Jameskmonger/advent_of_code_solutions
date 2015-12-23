(function() {
  "use strict";

  const INSTRUCTIONS = `inc a
jio a, +2
tpl a
inc a`.split('\n');

  let registers = [];

  let pointer = 0;
  while (true) {
    let line = INSTRUCTIONS[pointer];

    if (line === undefined) {
      break;
    }
    
    processInstruction(line);
  }

  console.log(registers);

  function checkReg(reg) {
    if (registers[reg] === undefined) {
      registers[reg] = 0;
    }
  }

  function processInstruction(instruction) {
    let parts = instruction.split(' ');
    let tag = parts[0];
    let reg;

    switch (tag) {
      case "hlf":
        reg = parts[1];
        checkReg(reg);
        registers[reg] /= 2;
        pointer++;
        break;
      case "tpl":
        reg = parts[1];
        checkReg(reg);
        registers[reg] *= 3;
        pointer++;
        break;
      case "inc":
        reg = parts[1];
        checkReg(reg);
        registers[reg] += 1;
        pointer++;
        break;
      case "jmp":
        pointer += parseInt(parts[1]);
        break;
      case "jie":
        reg = parts[1].replace(',', '');
        checkReg(reg);
        if (registers[reg] % 2 === 0) {
          pointer += parseInt(parts[2]);
        }
        break;
      case "jio":
        reg = parts[1].replace(',', '');
        checkReg(reg);
        if (registers[reg] === 1) {
          pointer += parseInt(parts[2]);
        }
        break;
    }
  }
})();
