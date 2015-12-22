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

  class Effect {
    constructor(func) {
      this.func = func;
    }

    apply(target) {
      this.func(target);
    }
  }

  class Wizard {
    constructor(hitpoints, mana) {
      this.hitpoints = hitpoints;
      this.mana = mana;
      this.armor = 0;

      this.effects = [];
    }

    hit(count) {
      this.hitpoints -= count;
    }

    heal(count) {
      this.hitpoints += count;
    }

    takeTurn(target) {
      if (this.effects.shield !== undefined && this.effects.shield >= 0) {
        SHIELD_EFFECT.apply(this);
        this.effects.shield--;
      }

      if (this.effects.poison !== undefined && this.effects.poison >= 0) {
        POISON_EFFECT.apply(target);
        this.effects.poison--;
      }

      if (this.effects.recharge !== undefined && this.effects.recharge >= 0) {
        RECHARGE_EFFECT.apply(this);
        this.effects.recharge--;
      }
    }
  }

  class Warrior {
    constructor(hitpoints, damage) {
      this.hitpoints = hitpoints;
      this.damage = damage;
      this.armor = 0;
    }

    hit(count) {
      this.hitpoints -= count;
    }

    heal(count) {
      this.hitpoints += count;
    }

    takeTurn(target) {
      target.hit(this.damage - target.armor);
    }
  }

  const MAGIC_MISSILE = new Spell(function(me, other) {
    other.hit(4);
  }, 53);

  const DRAIN = new Spell(function(me, other) {
    other.hit(2);
    me.heal(2);
  }, 73);

  const SHIELD_EFFECT = new Effect(function(target) {
    target.armor = 7;
  });

  const SHIELD = new Spell(function(me, other) {
    if (me.effects.shield === 0 || me.effects.shield === undefined) {
      me.effects.shield = 6;
    }
  }, 113);

  const POISON_EFFECT = new Effect(function(target) {
    target.hit(3);
  });

  const POISON = new Spell(function(me, other) {
    if (me.effects.poison === 0 || me.effects.poison === undefined) {
      me.effects.poison = 6;
    }
  }, 173);

  const RECHARGE_EFFECT = new Effect(function(target) {
    target.mana += 101;
  });

  const RECHARGE = new Spell(function(me, other) {
    if (me.effects.recharge === 0 || me.effects.recharge === undefined) {
      me.effects.recharge = 5;
    }
  }, 229);

  let player = new Wizard(10, 250);
  let boss = new Warrior(13, 8);
})();
