(function() {
  'use strict';

  let current = {
    x: 1,
    y: 1,
    val: 20151125
  };

  let input_x = 3019;
  let input_y = 3010;

  while (true) {
    if (current.y === 1) {
      current.y = current.x + 1;
      current.x = 1;
    } else {
      current.y -= 1;
      current.y += 1;
    }

    current.val = (current.val * 252533) % 33554393;

    if (current.x === input_x && current.y === input_y) {
      console.log(current.val);
      break;
    }
  }
})();
