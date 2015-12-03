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
	}
	
	parseDirections(input) {
		var output = [];
		
		for (var i = 0; i < input.length; i++) {
			
		}
	}
}

var mgr = new DeliveryManager("^>v<");
