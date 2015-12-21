"use strict";

let houses = [];
let ELF_COUNT = 2147483647;
let HOUSE_COUNT = 9424799;

for (let e = 0; e < ELF_COUNT; e++) {
  for (let h = (e + 1); h < HOUSE_COUNT + 1; h += (e + 1)) {
    if (houses[h] === undefined) {
      houses[h] = 0;
    }

    houses[h] += ((e + 1) * 10);

    if (houses[h] > 29000000) {
      console.log(h);
      return;
    }
  }
}
