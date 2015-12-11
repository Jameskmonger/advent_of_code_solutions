var alphabet = ['a','b','c','d','e',
                'f','g','h','i','j',
                'k','l','m','n','o',
                'p','q','r','s','t',
                'u','v','w','x','y','z'];

function reverse(str) {
  return str.split('').reverse().join('');
}

String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index + character.length);
};

function getCharacterIndex(char) {
  return alphabet.indexOf(char);
}

function getAlphabetSize() {
  return alphabet.length;
}

function getNextCharacter(char) {
  var index = getCharacterIndex(char);

  if (index === getAlphabetSize() - 1) {
    return alphabet[0];
  }

  return alphabet[index + 1];
}

function incrementString(str) {
  var backwards = reverse(str);

  var i = 0;
  while (true) {
    backwards = backwards.replaceAt(i, getNextCharacter(backwards[i]));

    if (backwards[i] != alphabet[0]) {
      break;
    }

    i++;

    if (i >= backwards.length) {
      break;
    }
  }

  return reverse(backwards);
}

function isValid(str) {
  if (str.indexOf('i') !== -1 || str.indexOf('o') !== -1 || str.indexOf('l') !== -1) {
    return false;
  }

  var pairs = 0;
  for (var i = 0; i < alphabet.length; i++) {
    var exp = new RegExp(alphabet[i] + '' + alphabet[i], "g");

    pairs += (str.match(exp) || []).length;
  }

  if (pairs < 2) {
    return false;
  }

  var chain_found = false;
  for (var a = 0; a < alphabet.length - 2; a++) {
    var check = (alphabet[a] + alphabet[a + 1] + alphabet[a + 2]);

    if (str.indexOf(check) !== -1) {
      chain_found = true;
    }
  }

  if (!chain_found) {
    return false;
  }

  return true;
}

var current_password = "abcdefgh";

while (!isValid(current_password)) {
  current_password = incrementString(current_password);
}

console.log(current_password);
