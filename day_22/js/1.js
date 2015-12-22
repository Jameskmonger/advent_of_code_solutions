(function() {
  "use strict";

  class Spell {
    constructor(func, cost) {
      this.func = func;
      this.cost = cost;
    }

    attack(other) {
      this.func(other);
    }
  }

  const MAGIC_MISSILE = new Spell(function(other) {
    other.damage(4);
  }, 53);
})();
