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

const lines = `Sprinkles: capacity 2, durability 0, flavor -2, texture 0, calories 3
Butterscotch: capacity 0, durability 5, flavor -3, texture 0, calories 3
Chocolate: capacity 0, durability 0, flavor 5, texture -1, calories 8
Candy: capacity 0, durability -1, flavor 0, texture 5, calories 8`.split('\n');
const SPOON_COUNT = 100;
const INGREDIENT_COUNT = lines.length;

var ingredients = [];
var highestScore = 0, scoreCount = 0;

function maximumScore() {
  while (true) {
    var ratios = generate(SPOON_COUNT, INGREDIENT_COUNT);

    var properties = { "capacity": 0, "durability": 0, "flavor": 0, "texture": 0, "calories": 0 };

    for (var i in ratios) {
      var ing = ingredients[i], rat = ratios[i];
      properties.capacity += (rat * ing.capacity);
      properties.durability += (rat * ing.durability);
      properties.flavor += (rat * ing.flavor);
      properties.texture += (rat * ing.texture);
      properties.calories += (rat * ing.calories);
    }

    if (properties.calories !== 500) {
      continue;
    }

    if (properties.capacity < 0) {
      properties.capacity = 0;
    }

    if (properties.durability < 0) {
      properties.durability = 0;
    }

    if (properties.flavor < 0) {
      properties.flavor = 0;
    }

    if (properties.texture < 0) {
      properties.texture = 0;
    }

    var score = (properties.capacity * properties.durability * properties.flavor * properties.texture);

    if (score > highestScore) {
      highestScore = score;
      scoreCount = 0;
    } else {
      scoreCount++;
    }

    if (scoreCount > Math.pow(SPOON_COUNT, 2)) {
      console.log(highestScore);
      break;
    }
  }
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
