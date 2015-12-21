"use strict";

let houses = [];
let ELF_COUNT = 2147483647;
let HOUSE_COUNT = 8648640;

let first_house = HOUSE_COUNT;

for (let e = 0; e < ELF_COUNT; e++) {
  if (e % 5000 === 0) {
    console.log("starting elf " + e);
  }

  if (e > first_house) {
    break;
  }

  for (let h = (e + 1); h < first_house + 1; h += (e + 1)) {
    if (houses[h] === undefined) {
      houses[h] = 0;
    }

    houses[h] += ((e + 1) * 10);

    if (houses[h] > 29000000) {
      if (h < first_house) {
        first_house = h;
      }

      break;
    }
  }
}

console.log(first_house);
