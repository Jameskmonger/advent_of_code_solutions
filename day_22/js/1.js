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

  function processSpellDurations() {
    spells = spells.map(s => {
      s.duration -= 1;
      return s;
    }).filter(s => s.duration > 0);
  }

  function getAvailableSpells() {
    // Return the spells where the cost is less than or equal to our mana
    // And where there are 0 spells with a matching name currently in play
    return SPELLS.filter(s => s.cost <= myMana).filter(s => {
      return (spells.filter(o => o.name === s.name).length === 0);
    });
  }

  function play(myTurn) {
    let effects = getEffects();

    bossHealth -= effects.damage;

    if (bossHealth <= 0) {
      console.log("boss has died");
      return;
    }

    processSpellDurations();

    if (myTurn) {
      let available = getAvailableSpells();

      if (available.length === 0) {
        console.log("no more spells to cast");
        return;
      }
    } else {
      let damage = Math.max((bossDamage - effects.armor), 1);
      myHealth -= damage;

      if (myHealth <= 0) {
        console.log("player has died");
        return;
      }
    }
  }

  console.log(SPELLS[3]);
  spells.push(JSON.parse(JSON.stringify(SPELLS[3])));
  processSpellDurations();
  console.log(SPELLS[3]);

})();
