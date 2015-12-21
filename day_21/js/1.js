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
    }
  }

  function getRandomOutfit() {
    let weapon = WEAPONS[Math.floor(Math.random() * WEAPONS.length)];

    let armorCount = getRandomInt(0, 1);
    let armors = [];

    if (armorCount === 0) {
      armors = [];
    } else if (armorCount === 1) {
      armors = [ARMORS[Math.floor(Math.random() * ARMORS.length)]];
    }

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

    for (let a of armors) {
      total_cost += a.cost;
      total_dmg += a.damage;
      total_arm += a.armor;
    }

    for (let r of rings) {
      total_cost += r.cost;
      total_dmg += r.damage;
      total_arm += r.armor;
    }

    return new Item(total_cost, total_dmg, total_arm);
  }

  let lowest_cost = 9999999999;

  for (let i = 0; i < 5000; i++) {
    let boss = new Stats(104, 8, 1);

    let outfit = getRandomOutfit();

    let player = new Stats(100, outfit.damage, outfit.armor);

    let player_won = false;

    while (true) {
      player.attack(boss);

      if (player.hitpoints <= 0) {
        player_won = false;
        break;
      }

      boss.attack(player);

      if (boss.hitpoints <= 0) {
        player_won = true;
        break;
      }
    }

    if (player_won) {
      console.log("Player won with " + outfit.cost);

      if (outfit.cost < lowest_cost) {
        lowest_cost = outfit.cost;
      }
    }
  }

  console.log(lowest_cost);
})();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
