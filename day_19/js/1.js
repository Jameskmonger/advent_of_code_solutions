"use strict";

let REPLACEMENTS = [
  ["Al", "ThF"],
  ["Al", "ThRnFAr"],
  ["B", "BCa"],
  ["B", "TiB"],
  ["B", "TiRnFAr"],
  ["Ca", "CaCa"],
  ["Ca", "PB"],
  ["Ca", "PRnFAr"],
  ["Ca", "SiRnFYFAr"],
  ["Ca", "SiRnMgAr"],
  ["Ca", "SiTh"],
  ["F", "CaF"],
  ["F", "PMg"],
  ["F", "SiAl"],
  ["H", "CRnAlAr"],
  ["H", "CRnFYFYFAr"],
  ["H", "CRnFYMgAr"],
  ["H", "CRnMgYFAr"],
  ["H", "HCa"],
  ["H", "NRnFYFAr"],
  ["H", "NRnMgAr"],
  ["H", "NTh"],
  ["H", "OB"],
  ["H", "ORnFAr"],
  ["Mg", "BF"],
  ["Mg", "TiMg"],
  ["N", "CRnFAr"],
  ["N", "HSi"],
  ["O", "CRnFYFAr"],
  ["O", "CRnMgAr"],
  ["O", "HP"],
  ["O", "NRnFAr"],
  ["O", "OTi"],
  ["P", "CaP"],
  ["P", "PTi"],
  ["P", "SiRnFAr"],
  ["Si", "CaSi"],
  ["Th", "ThCa"],
  ["Ti", "BP"],
  ["Ti", "TiTi"],
  ["e", "HF"],
  ["e", "NAl"],
  ["e", "OMg"]
];

let INPUT = "CRnSiRnCaPTiMgYCaPTiRnFArSiThFArCaSiThSiThPBCaCaSiRnSiRnTiTiMgArPBCaPMgYPTiRnFArFArCaSiRnBPMgArPRnCaPTiRnFArCaSiThCaCaFArPBCaCaPTiTiRnFArCaSiRnSiAlYSiThRnFArArCaSiRnBFArCaCaSiRnSiThCaCaCaFYCaPTiBCaSiThCaSiThPMgArSiRnCaPBFYCaCaFArCaCaCaCaSiThCaSiRnPRnFArPBSiThPRnFArSiRnMgArCaFYFArCaSiRnSiAlArTiTiTiTiTiTiTiRnPMgArPTiTiTiBSiRnSiAlArTiTiRnPMgArCaFYBPBPTiRnSiRnMgArSiThCaFArCaSiThFArPRnFArCaSiRnTiBSiThSiRnSiAlYCaFArPRnFArSiThCaFArCaCaSiThCaCaCaSiRnPRnCaFArFYPMgArCaPBCaPBSiRnFYPBCaFArCaSiAl";

let output = [];

for (let r of REPLACEMENTS) {
  let position = 0;
  while (true) {
    position = INPUT.indexOf(r[0], position);

    if (position === -1) {
      break;
    }

    let rep = replace(INPUT, r[0], r[1], position);

    if (output.indexOf(rep) === -1) {
      output.push(rep);
    }

    position += r[0].length;
  }
}

console.log(output.length);

function replace(s, i, o, pos) {
  return s.substring(0, pos) + o + s.substring(pos + i.length);
}
