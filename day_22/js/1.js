(function() {
  "use strict";

  class Spell {
    constructor(func, cost) {
      this.func = func;
      this.cost = cost;
    }

    attack(me, other) {
      this.func(me, other);
    }
  }

  class Wizard {
    constructor(hitpoints, mana) {
      this.hitpoints = hitpoints;
      this.mana = mana;
    }

    hit(count) {
      this.hitpoints -= count;
    }

    heal(count) {
      this.hitpoints += count;
    }
  }

  class Warrior {
    constructor(hitpoints, damage) {
      this.hitpoints = hitpoints;
      this.damage = damage;
    }

    hit(count) {
      this.hitpoints -= count;
    }

    heal(count) {
      this.hitpoints += count;
    }
  }

  const MAGIC_MISSILE = new Spell(function(me, other) {
    other.hit(4);
  }, 53);

  const DRAIN = new Spell(function(me, other) {
    other.hit(2);
    me.heal(2);
  }, 73);

  let Wiz = new Wizard(12, 25);
  let War = new Warrior(12, 5);

  MAGIC_MISSILE.attack(Wiz, War);

  console.log(Wiz);
  console.log(War);
})();
