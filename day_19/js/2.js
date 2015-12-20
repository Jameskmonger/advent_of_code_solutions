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

let count = 0;

while (true) {
  if (INPUT === "e") {
    break;
  }

  for (let r of REPLACEMENTS) {
    if (INPUT.indexOf(r[1]) !== 0) {
      INPUT = replace(INPUT, r[1], r[0], INPUT.lastIndexOf(r[1]));

      count++;
    }
  }
}

console.log(count);

function replace(s, i, o, pos) {
  return s.substring(0, pos) + o + s.substring(pos + i.length);
}
