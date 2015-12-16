var lines = `Sue 1: children: 1, samoyeds: 2, trees: 3
Sue 2: children: 3, cats: 8, perfumes: 1
Sue 3: samoyeds: 2, trees: 3, akitas: 2`.split('\n');

var requirements = {
  children: 3,
  cats: 7,
  samoyeds: 2,
  pomeranians: 3,
  akitas: 0,
  vizslas: 0,
  goldfish: 5,
  trees: 3,
  cars: 2,
  perfumes: 1
};

for (var line of lines) {
  var parsed = /Sue (\d+): ([a-z]+): (\d+), ([a-z]+): (\d+), ([a-z]+): (\d+)/.exec(line);

  var details = [
    [ parsed[2], parseInt(parsed[3]) ],
    [ parsed[4], parseInt(parsed[5]) ],
    [ parsed[6], parseInt(parsed[7]) ]
  ];

  var matches_all = true;

  for (var detail of details) {
    var expected = requirements[detail[0]];
    var actual = detail[1];

    if (detail[0] === "cats" || detail[0] === "trees") {
      if (expected > actual) {
        matches_all = false;
        break;
      }
    } else if (detail[0] === "pomeranians" || detail[0] === "goldfish") {
      if (expected < actual) {
        matches_all = false;
        break;
      }
    } else {
      if (expected !== actual) {
        matches_all = false;
        break;
      }
    }
  }

  if (matches_all) {
    console.log(parsed[1] + " is the correct Sue.");
  }
}
