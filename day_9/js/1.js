"use strict";

var input = `London to Dublin = 464
London to Belfast = 518
Dublin to Belfast = 141`;

var lines = input.split('\n');

var locations = {};

class Location {
  constructor(name) {
    this.name = name;

    this.links = [];
  }

  addLink(name, dist) {
    this.links[name] = dist;
  }
}

class Link {
  constructor(dist) {
    this.dist = parseInt(dist);
  }
}

for (var line of lines) {
  var EXP = /^([a-zA-Z]+)\b to \b([a-zA-Z]+)\b = \b(\d+)$/g;

  var parsed = EXP.exec(line);

  var a = parsed[1],
      b = parsed[2],
      dist = parsed[3];

  if (locations[a] === undefined) {
    locations[a] = new Location(a);
  }

  if (locations[b] === undefined) {
    locations[b] = new Location(b);
  }

  var l = new Link(dist);
  locations[a].addLink(locations[b].name, l);
  locations[b].addLink(locations[a].name, l);
}

for (var i in locations) {
  var me = locations[i];

  console.log(me);
}
