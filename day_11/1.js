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

console.log(incrementString("xz"));
