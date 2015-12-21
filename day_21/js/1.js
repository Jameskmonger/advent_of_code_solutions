(function() {
  "use strict";

  class Stats {
    constructor(hitpoints, armor, damage) {
      this.hitpoints = hitpoints;
      this.armor = armor;
      this.damage = damage;
    }

    attack(other) {
      let damage = (this.damage - other.armor);

      if (damage < 1) {
        damage = 1;
      }

      other.hitpoints -= damage;

      console.log(other);
    }
  }

  let player = new Stats(8, 5, 5);
  let boss = new Stats(12, 2, 7);

  player.attack(boss);
  boss.attack(player);
  player.attack(boss);
  boss.attack(player);
  player.attack(boss);
  boss.attack(player);
  player.attack(boss);
})();
