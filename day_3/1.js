"use strict";

var Directions = {
	NORTH: '^',
	EAST: '>',
	SOUTH: 'v',
	WEST: '<'
}

class House {
	constructor() {
		this._presentsDelivered = 0;
	}
	
	deliver() {
		this._presentsDelivered += 1;
	}
}

class DeliveryManager {
	constructor(input) {
		this.houses = [];
		
		this.directions = this.parseDirections(input);
		
		this.location = [0, 0];
		
		for (var d of this.directions) {
			if (d === Directions.NORTH) {
				console.log("up");
			}
			if (d === Directions.EAST) {
				console.log("right");
			}
			if (d === Directions.SOUTH) {
				console.log("down");
			}
			if (d === Directions.WEST) {
				console.log("left");
			}
		}
	}
	
	parseDirections(input) {
		var output = [];
		
		for (var i = 0; i < input.length; i++) {
			output.push(input[i]);
		}
		
		return output;
	}
}

var mgr = new DeliveryManager("^>v<");
