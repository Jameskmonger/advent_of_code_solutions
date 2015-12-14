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

function permutator(inputArr) {
  var results = [];

  function permute(arr, memo) {
    var cur;

    if (memo === undefined) {
      memo = [];
    }

    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }

    return results;
  }

  return permute(inputArr);
}

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

function getRelationship(a, b) {
  if (a.name === "local_person" || b.name === "local_person") {
    return 0;
  }

  return a.preferences.filter((p) => p.person.name === b.name)[0].change;
}

function calculateHighestChange() {
  var highestChange = -99999999;

  permutator(people).forEach(function(order, x) {
    var permutationChange = 0;

    for (var i = 0; i < order.length; i++) {
      var person = order[i];
      var before = order[(i - 1 + order.length) % order.length];
      var after = order[(i + 1) % order.length];

      var before_change = getRelationship(person, before);
      var after_change = getRelationship(person, after);

      permutationChange += before_change + after_change;
    }

    highestChange = Math.max(highestChange, permutationChange);
  });

  return highestChange;
}

createPeople();
storePreferences();

people.push(new Person("local_person"));

console.log(calculateHighestChange());
