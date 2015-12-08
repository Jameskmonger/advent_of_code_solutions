var fs = require('fs');
fs.readFile(".INPUTFILE", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }

  var lines = data.split('\n');

  var code_characters = getCodeCharacters(lines);

  var get_string_characters = getStringCharacters(lines);

  console.log(code_characters - get_string_characters);
});

function getCodeCharacters(input) {
  var count = 0;

  input.forEach(line => (count += line.length));

  return count;
}

function getStringCharacters(input) {
  var count = 0;

  input.forEach(line => {
    var l = line.substring(1, line.length - 1);
    l = l.replace(/\\\\/g, "\\");
    l = l.replace(/\\\"/g, "\"");
    l = l.replace(/\\x([0-9A-Fa-f]{2})/g, function() {
        return String.fromCharCode(parseInt(arguments[1], 16));
    });

    console.log(l);

    count += l.length;
  });

  return count;
}
