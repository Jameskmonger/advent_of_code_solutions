(function() {
  'use strict';

  let current_x = 1;
  let current_y = 1;

  let current_val = 20151125;

  let input_x = 3019;
  let input_y = 3010;

  while (true) {
    if (current_y === 1) {
      current_y = current_x + 1;
      current_x = 1;
    } else {
      current_y -= 1;
      current_x += 1;
    }

    current_val = (current_val * 252533) % 33554393;

    if (current_x === input_x && current_y === input_y) {
      console.log(current_val);
      break;
    }
  }
})();
