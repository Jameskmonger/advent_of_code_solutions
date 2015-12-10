var fs = require('fs');
fs.readFile(".INPUTFILE", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }

  var lines = data.split('\n');

  var code_characters = getCodeCharacters(lines);

  var get_string_characters = getStringCharacters(lines);

  console.log((get_string_characters - code_characters) + "   (" + get_string_characters + " - " + code_characters+ ")");
});

function escapeWithSlashes(input) {
    return (input + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
}

function getCodeCharacters(input) {
  var count = 0;

  input.forEach(line => (count += line.length));

  return count;
}

function getStringCharacters(input) {
  var count = 0;

  input.forEach(line => {
    var new_line_count = (escapeWithSlashes(line).length + 2)

    if (new_line_count != 2) {
      count += new_line_count;
    }
  });

  return count;
}
