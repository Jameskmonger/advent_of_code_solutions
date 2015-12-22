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

  let spells = [];
  let bossHealth = 51;
  let bossDamage = 9;
  let myHealth = 50;
  let myMana = 500;

  function getEffects() {
    let mana = spells.map(s => s.mana).reduce((a, b) => a + b);
    let damage = spells.map(s => s.damage).reduce((a, b) => a + b);
    let armor = spells.map(s => s.armor).reduce((a, b) => a + b);

    return {
      mana: mana,
      damage: damage,
      armor: armor
    };
  }

  function play() {
    let effects = getEffects();

    bossHealth -= effects.damage;

    if (bossHealth <= 0) {
      console.log("boss has died");
      return;
    }

    
  }

})();
