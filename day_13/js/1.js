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

function permutator(n){function t(n,r){for(var e,r=r||[],o=0;o<n.length;o++)e=n.splice(o,1),0===n.length&&c.push(r.concat(e)),t(n.slice(),r.concat(e)),n.splice(o,0,e[0]);return c}var c=[];return t(n)}

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

function getPersonForName(name) {
  return people.filter((p) => p.name === name)[0];
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
    var first = getPersonForName(parts[0]),
        last = getPersonForName(parts[parts.length - 1].replace('.', '')),
        modifier = parts[2],
        change = parseInt(parts[3]);

    if (modifier === "lose") {
      change = change * -1;
    }

    first.addPreference(last, change);
  }
}

createPeople();
storePreferences();

var highestChange = -99999999;

permutator(people).forEach(function(order, x) {
  var permutationChange = 0;

  for (var i = 0; i < order.length; i++) {
    var person = order[i];
    var before = order[(i - 1 + order.length) % order.length];
    var after = order[(i + 1) % order.length];

    var before_change = person.preferences.filter((p) => p.person.name === before.name)[0].change;
    var after_change = person.preferences.filter((p) => p.person.name === after.name)[0].change;

    permutationChange += before_change + after_change;
  }

  highestChange = Math.max(highestChange, permutationChange);
});

console.log(highestChange);
