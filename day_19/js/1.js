"use strict";

let REPLACEMENTS = {
  "H": ["HO", "OH"],
  "O": ["HH"]
};

for (let r in REPLACEMENTS) {
  console.log(REPLACEMENTS[r]);
}
