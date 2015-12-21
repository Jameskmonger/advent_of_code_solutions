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

  function getRandomOutfit() {
    let weapon = WEAPONS[Math.floor(Math.random() * WEAPONS.length)];
    let armor = ARMORS[Math.floor(Math.random() * ARMORS.length)];

    let ringCount = getRandomInt(0, 2);
    let rings = [];

    if (ringCount === 0) {
      rings = [];
    } else if (ringCount === 1) {
      rings = [RINGS[Math.floor(Math.random() * RINGS.length)]];
    } else if (ringCount === 2) {
      let temp = RINGS.slice(0);

      let first = temp[Math.floor(Math.random() * temp.length)];
      rings.push(first);
      temp.splice(temp.indexOf(first), 1);

      let second = temp[Math.floor(Math.random() * temp.length)];
      rings.push(second);
      temp.splice(temp.indexOf(second), 1);
    }

    let total_cost = 0, total_dmg = 0, total_arm = 0;
    total_cost += weapon.cost;
    total_dmg += weapon.damage;
    total_arm += weapon.armor;

    total_cost += armor.cost;
    total_dmg += armor.damage;
    total_arm += armor.armor;

    for (let r of rings) {
      total_cost += r.cost;
      total_dmg += r.damage;
      total_arm += r.armor;
    }

    return new Item(total_cost, total_dmg, total_arm);
  }

  let player = new Stats(8, 5, 5);
  let boss = new Stats(12, 7, 2);

  for (var i = 0; i < 10; i++) {
    console.log(getRandomOutfit());
  }
})();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
