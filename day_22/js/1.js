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

  let least_spent = 9999999;

  for (var i = 0; i < 5000000; i++) {
    let spells = [];
    let bossHealth = 51;
    let bossDamage = 9;
    let myHealth = 50;
    let myMana = 500;
    let spent = 0;

    function getEffects() {
      if (spells.length === 0) {
        return {
          mana: 0,
          damage: 0,
          armor: 0
        };
      }

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
      myMana += effects.mana;

      if (bossHealth <= 0) {
        console.log("boss has died (" + i + ")");

        if (spent < least_spent) {
          least_spent = spent;
        }

        return;
      }

      processSpellDurations();

      if (myTurn) {
        let available = getAvailableSpells();

        if (available.length === 0) {
          return;
        }

        let random = available[Math.floor(Math.random() * available.length)];

        myMana -= random.cost;
        spent += random.cost;

        if (random.duration === 1) {
          myHealth += random.heal;
          bossHealth -= random.damage;

          if (bossHealth <= 0) {
            console.log("boss has died (" + i + ")");

            if (spent < least_spent) {
              least_spent = spent;
            }

            return;
          }
        } else {
          spells.push(JSON.parse(JSON.stringify(random)));
        }

        if (spent < least_spent) {
          play(false);
        }
      } else {
        let damage = Math.max((bossDamage - effects.armor), 1);
        myHealth -= damage;

        if (myHealth <= 0) {
          return;
        }

        if (spent < least_spent) {
          play(true);
        }
      }
    }

    play(true);
  }

  console.log("lowest spend: " + least_spent);

})();
