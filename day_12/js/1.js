var input = [[[3]]];

var count = 0;

function processProperties(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      var val = obj[prop];

      if (typeof val === "number") {
        count += parseInt(val);
      } else {
        processProperties(val);
      }
    }
  }
}

processProperties(input);

console.log(count);
