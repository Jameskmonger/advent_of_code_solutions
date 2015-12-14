"use strict";

const STATE_FLYING = 1;
const STATE_RESTING = 2;

class Reindeer {
  constructor(speed, stamina, rest) {
    this.speed = speed;
    this.stamina = stamina;
    this.rest = rest;

    this.state = STATE_FLYING;
    this.time = this.stamina;
  }
}
