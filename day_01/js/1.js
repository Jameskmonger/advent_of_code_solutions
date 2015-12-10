// http://adventofcode.com/day/1

var input = "))(((((";

var characterCount = [];

for (var i = 0; i < input.length; i++) {
    if (characterCount[input[i]] === undefined) {
    	characterCount[input[i]] = 0;   
    }
    
	characterCount[input[i]]++;
}

var current_floor = characterCount['('] - characterCount[')'];

console.log(current_floor);