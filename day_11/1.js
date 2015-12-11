var alphabet = ['a','b','c','d','e',
                'f','g','h','i','j',
                'k','l','m','n','o',
                'p','q','r','s','t',
                'u','v','w','x','y','z'];

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

console.log(getNextCharacter("a"));
console.log(getNextCharacter("b"));
console.log(getNextCharacter("y"));
console.log(getNextCharacter("z"));
