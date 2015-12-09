var input = `London to Dublin = 464
London to Belfast = 518
Dublin to Belfast = 141`;

var lines = input.split('\n');

var path = [],
    locations = [];

function setDistance(a, b, distance) {
  if (path[a] === undefined) {
    path[a] = [];
  }

  if (path[b] === undefined) {
    path[b] = [];
  }

  path[a][b] = parseInt(distance);
  path[b][a] = parseInt(distance);
}

function registerLocation(loc) {
  if (locations.indexOf(loc) === -1) {
    locations.push(loc);
  }
}

for (var line of lines) {
  var EXP = /^([a-zA-Z]+)\b to \b([a-zA-Z]+)\b = \b(\d+)$/g;

  var parsed = EXP.exec(line);

  var a = parsed[1],
      b = parsed[2],
      dist = parsed[3];

  registerLocation(a);
  registerLocation(b);

  setDistance(a, b, dist);
}

for (var loc of locations) {
  console.log(loc);
}
