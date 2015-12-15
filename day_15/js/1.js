"use strict";

class Ingredient {
  constructor(capacity, durability, flavor, texture, calories) {
    this.capacity = parseInt(capacity);
    this.durability = parseInt(durability);
    this.flavor = parseInt(flavor);
    this.texture = parseInt(texture);
    this.calories = parseInt(calories);
  }
}

var lines = `Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8
Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3`.split('\n');

var ingredients = {};

for (var line of lines) {
  var parsed = /([a-zA-Z]+): capacity (-?\d+), durability (-?\d+), flavor (-?\d+), texture (-?\d+), calories (-?\d+)/g.exec(line);

  ingredients[parsed[1]] = new Ingredient(parsed[2], parsed[3], parsed[4], parsed[5], parsed[6]);
}

console.log(ingredients);
