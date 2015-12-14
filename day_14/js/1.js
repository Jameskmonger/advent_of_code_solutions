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
  }
}

var reindeer = [];
reindeer.push(new Reindeer("Comet", 14, 10, 127));
reindeer.push(new Reindeer("Dancer", 16, 11, 162));
