(function() {
  "use strict";

  class Spell {
    constructor(name, cost, damage, heal, armor, mana, duration) {
      this.name = name;
      this.cost = cost;
      this.damage = damage;
      this.heal = heal;
      this.armor = armor;
      this.mana = mana;
      this.duration = duration;
    }
  }

  const SPELLS = [
    new Spell("Magic Missile", 53, 4, 0, 0, 0, 1),
    new Spell("Drain", 73, 2, 2, 0, 0, 1),
    new Spell("Shield", 113, 0, 0, 7, 0, 6),
    new Spell("Poison", 173, 3, 0, 0, 0, 6),
    new Spell("Recharge", 229, 0, 0, 0, 101, 5)
  ];

  console.log(SPELLS);

})();