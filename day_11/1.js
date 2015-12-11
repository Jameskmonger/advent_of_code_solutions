var alphabet = ['a','b','c','d','e',
                'f','g','h','i','j',
                'k','l','m','n','o',
                'p','q','r','s','t',
                'u','v','w','x','y','z'];

function reverse(str) {
  return str.split('').reverse().join('');
}

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
    console.log(backwards[i]);

    i++;

    if (i >= backwards.length) {
      break;
    }
  }
}

incrementString("james");
