// http://adventofcode.com/day/2

var input = `2x3x4`;

Array.min = function( array ){
  return array.reduce(function(a, b, i, array) {return Math.min(a,b)});
};

var total_paper = 0;

var lines = input.split('\n');

for (var line of lines) {
  var dimensions = line.split('x');
  
  var length = parseInt(dimensions[0]);
  var width = parseInt(dimensions[1]);
  var height = parseInt(dimensions[2]);
  
  var sides = [];
  
  sides[1] = (length * width);
  sides[2] = (width * height);
  sides[3] = (height * length);
  
  var box_paper = (2 * sides[1]) + (2 * sides[2]) + (2 * sides[3]) + Array.min(sides);
  
  total_paper += box_paper;
}

console.log(total_paper);