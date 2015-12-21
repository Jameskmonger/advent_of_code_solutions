(function() {
  "use strict";

  class Stats {
    constructor(hitpoints, armor, damage) {
      this.hitpoints = hitpoints;
      this.armor = armor;
      this.damage = damage;
    }
  }

  let player = new Stats(8, 5, 5);
  let boss = new Stats(12, 7, 2);
})();
