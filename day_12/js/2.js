var input = [1,"red",5];

var count = 0;

function doesObjectContainRed(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (obj[prop] === "red") {
        return true;
      }
    }
  }

  return false;
}

function processProperties(obj) {
  if (obj instanceof Array === false) {
    if (doesObjectContainRed(obj)) {
      return;
    }
  }

  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      var val = obj[prop];

      if (typeof val === "number") {
        count += parseInt(val);
      } else if (typeof val !== "string") {
        processProperties(val);
      }
    }
  }
}

processProperties(input);

console.log(count);
