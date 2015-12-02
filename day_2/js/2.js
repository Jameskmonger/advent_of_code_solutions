var input = `2x3x4`;

Array.max = function(array) {
	return array.reduce(function(a, b, i, array) {return Math.max(a,b)});
}

Array.integerise = function (array) {
	var output = [];
	
	for (var i in array) {
		output[i] = parseInt(array[i]);
	}
	
	return output;
}

getPresentRibbon = function (dimensions) {
	var clone = dimensions.slice(0);
	
	var highest = Array.max(clone);
	var highestIndex = clone.indexOf(highest);
	clone.splice(highestIndex, 1);
	
	var total = 0;
	
	for (var d of clone) {
		total += (d + d);
	}
	
	return total;
}

getBowRibbon = function (dimensions) {
	return (dimensions[0] * dimensions[1] * dimensions[2]);
}

var total_ribbon = 0;

var lines = input.split('\n');

for (var line of lines) {
	var dimensions = Array.integerise(line.split('x'));
  
	var presentRibbon = getPresentRibbon(dimensions);

	var bowRibbon = getBowRibbon(dimensions);
	
	total_ribbon += (presentRibbon + bowRibbon);
}

console.log(total_ribbon);