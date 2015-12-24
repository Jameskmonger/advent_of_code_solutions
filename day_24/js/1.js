(function() {
  "use strict";

  const PACKAGES = `1
2
3
4
5
7
8
9
10
11`.split('\n').map(n => parseInt(n));

  let total = PACKAGES.reduce((a, b) => a + b);

  let compartment = total / 3;

  let best = {
    legroom: 99999,
    qe: 99999
  };

  let successes = 0;

  while (true) {
    let compartments = [];

    for (let c = 0; c < 3; c++) {
      compartments[c] = [];
    }

    let compartment_sizes = [ compartment, compartment, compartment ];

    let _clone = shuffle(PACKAGES.slice(0));

    for (let p of _clone) {
      for (let c = 0; c < 3; c++) {
        if (compartment_sizes[c] < p) {
          continue;
        }

        compartments[c].push(p);
        compartment_sizes[c] -= p;
      }
    }

    if (compartment_sizes[0] === 0 && compartment_sizes[1] === 0 && compartment_sizes[2] === 0) {
      let legroom = compartments[0].length;

      if (legroom < best.legroom) {
        best.legroom = legroom;

        best.qe = compartments[0].reduce((a, b) => a * b);
      } else if (legroom === best.legroom) {
        let qe = compartments[0].reduce((a, b) => a * b);

        if (qe < best.qe) {
          best.qe = qe;
        }
      }

      successes++;
    }

    if (successes > 500) {
      break;
    }
  }

  console.log(best);

  function shuffle(o) {
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  }
})();
