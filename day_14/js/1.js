"use strict";

const STATE_FLYING = 1;
const STATE_RESTING = 2;

class Reindeer {
  constructor(name, speed, stamina, rest) {
    this.name = name;
    this.speed = speed;
    this.stamina = stamina;
    this.rest = rest;

    this.state = STATE_FLYING;
    this.time = this.stamina;
    this.distance = 0;
  }

  move() {
    if (this.state === STATE_FLYING) {
      this.distance += this.speed;
      this.time -= 1;

      if (this.time === 0) {
        this.state = STATE_RESTING;
        this.time = this.rest;
        return;
      }
    } else if (this.state === STATE_RESTING) {
      this.time -= 1;

      if (this.time === 0) {
        this.state = STATE_FLYING;
        this.time = this.stamina;
        return;
      }
    }
  }
}

var reindeer = [];
reindeer.push(new Reindeer("Comet", 14, 10, 127));
reindeer.push(new Reindeer("Dancer", 16, 11, 162));

const RACE_TIME = 1000;

for (var i = 0; i < RACE_TIME; i++) {
  for (var r of reindeer) {
    r.move();
  }
}

for (var r of reindeer) {
  console.log(r.name + ": " + r.distance);
}
