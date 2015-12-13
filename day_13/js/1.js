"use strict";

var input = `Alice would gain 54 happiness units by sitting next to Bob.
Alice would lose 79 happiness units by sitting next to Carol.
Alice would lose 2 happiness units by sitting next to David.
Bob would gain 83 happiness units by sitting next to Alice.
Bob would lose 7 happiness units by sitting next to Carol.
Bob would lose 63 happiness units by sitting next to David.
Carol would lose 62 happiness units by sitting next to Alice.
Carol would gain 60 happiness units by sitting next to Bob.
Carol would gain 55 happiness units by sitting next to David.
David would gain 46 happiness units by sitting next to Alice.
David would lose 7 happiness units by sitting next to Bob.
David would gain 41 happiness units by sitting next to Carol.`;

class Person {
  constructor(name) {
    this.name = name;
    this.preferences = [];
  }

  addPreference(person, change) {
    var pref = new Preference(person, change);
    this.preferences.push(pref);
  }
}

class Preference {
  constructor(person, change) {
    this.person = person;
    this.change = change;
  }
}

var people = [];

function personStored(name) {
  return (people.filter((p) => p.name === name).length === 1);
}

function createPeople() {
  for (var line of input.split('\n')) {
    var parts = line.split(' ');
    var first = parts[0];
    var last = parts[parts.length - 1].replace('.', '');

    if (!personStored(first)) {
      people.push(new Person(first));
    }

    if (!personStored(last)) {
      people.push(new Person(last));
    }
  }
}

function storePreferences() {
  for (var line of input.split('\n')) {
    var parts = line.split(' ');
    var first = parts[0],
        last = parts[parts.length - 1].replace('.', ''),
        modifier = parts[2],
        change = parseInt(parts[3]);

    if (modifier === "lose") {
      change = change * -1;
    }


  }
}

createPeople();
storePreferences();

console.log(people);
