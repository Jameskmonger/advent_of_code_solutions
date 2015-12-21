(function() {
  "use strict";

  class Item {
    constructor(cost, damage, armor) {
      this.cost = cost;
      this.damage = damage;
      this.armor = armor;
    }
  }

  let WEAPONS = [
    new Item(8, 4, 0),
    new Item(10, 5, 0),
    new Item(25, 6, 0),
    new Item(40, 7, 0),
    new Item(74, 8, 0)
  ];

  let ARMORS = [
    new Item(13, 0, 1),
    new Item(31, 0, 2),
    new Item(53, 0, 3),
    new Item(75, 0, 4),
    new Item(102, 0, 5)
  ];

  let RINGS = [
    new Item(25, 1, 0),
    new Item(50, 2, 0),
    new Item(100, 3, 0),
    new Item(20, 0, 1),
    new Item(40, 0, 2),
    new Item(80, 0, 3)
  ];

  class Stats {
    constructor(hitpoints, damage, armor) {
      this.hitpoints = hitpoints;
      this.damage = damage;
      this.armor = armor;
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
  let boss = new Stats(12, 7, 2);

  player.attack(boss);
  boss.attack(player);
  player.attack(boss);
  boss.attack(player);
  player.attack(boss);
  boss.attack(player);
  player.attack(boss);
})();
