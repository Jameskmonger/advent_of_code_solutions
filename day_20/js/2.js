"use strict";

let houses = [];
let ELF_COUNT = 2147483647;

let first_house = 2147483647;

for (let e = 1; e < ELF_COUNT; e++) {
  if (e > first_house) {
    break;
  }

  for (let i = 1; i <= 50; i++) {
    let h = e * i;

    if (houses[h] === undefined) {
      houses[h] = 0;
    }

    houses[h] += (e * 11);

    if (houses[h] > 29000000) {
      if (h < first_house) {
        first_house = h;
      }

      break;
    }
  }
}

console.log(first_house);
