"use strict";

class Ingredient {
  constructor(capacity, durability, flavor, texture, calories) {
    this.capacity = capacity;
    this.durability = durability;
    this.flavor = flavor;
    this.texture = texture;
    this.calories = calories;
  }
}

var lines = `Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8
Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3`.split('\n');

var ingredients = {};

for (var line in lines) {
  var EXP = /([a-zA-Z]+): capacity (-?\d+), durability (-?\d+), flavor (-?\d+), texture (-?\d+), calories (-?\d+)/g;
  
}
