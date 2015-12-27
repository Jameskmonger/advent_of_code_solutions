(function() {
  'use strict';

  let current = {
    x: 1,
    y: 1,
    val: 20151125
  };

  let input = {
    x: 3019,
    y: 3010
  };

  while (true) {
    if (current.y === 1) {
      current.y = current.x + 1;
      current.x = 1;
    } else {
      current.y -= 1;
      current.x += 1;
    }

    current.val = (current.val * 252533) % 33554393;

    if (current.x === input.x && current.y === input.y) {
      console.log(current.val);
      break;
    }
  }
})();
