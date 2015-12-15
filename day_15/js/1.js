"use strict";

class Ingredient {
  constructor(name, capacity, durability, flavor, texture, calories) {
    this.name = name;
    this.capacity = parseInt(capacity);
    this.durability = parseInt(durability);
    this.flavor = parseInt(flavor);
    this.texture = parseInt(texture);
    this.calories = parseInt(calories);
  }
}

const lines = `Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8
Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3`.split('\n');
const SPOON_COUNT = 100;
const INGREDIENT_COUNT = lines.length;

var ingredients = [];

function maximumScore() {
  //while(true) {
    //var ratios = generate(SPOON_COUNT, INGREDIENT_COUNT);
    var ratios = [44, 56];

    var properties = { "capacity": 0, "durability": 0, "flavor": 0, "texture": 0 };

    for (var i in ratios) {
      var ing = ingredients[i], rat = ratios[i];
      properties.capacity += (rat * ing.capacity);
      properties.durability += (rat * ing.durability);
      properties.flavor += (rat * ing.flavor);
      properties.texture += (rat * ing.texture);
    }

    var score = (properties.capacity * properties.durability * properties.flavor * properties.texture);

    console.log(score);
  //}
}

for (var line of lines) {
  var parsed = /([a-zA-Z]+): capacity (-?\d+), durability (-?\d+), flavor (-?\d+), texture (-?\d+), calories (-?\d+)/g.exec(line);

  ingredients.push(new Ingredient(parsed[1], parsed[2], parsed[3], parsed[4], parsed[5], parsed[6]));
}

maximumScore();

function generate(max, thecount) {
  var r = [];
  var currsum = 0;
  for(var i = 0; i < thecount - 1; i++) {
     r[i] = randombetween(1, max - (thecount - i - 1) - currsum);
     currsum += r[i];
  }
  r[thecount-1] = max - currsum;
  return r;
}

function randombetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
