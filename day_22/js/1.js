(function() {
  "use strict";

  class Spell {
    constructor(func, cost) {
      this.func = func;
      this.cost = cost;
    }

    attack(me, other) {
      this.func(other);
    }
  }

  const MAGIC_MISSILE = new Spell(function(me, other) {
    other.damage(4);
  }, 53);
})();
