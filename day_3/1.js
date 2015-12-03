"use strict";

var Directions = {
	NORTH: 0,
	EAST: 1,
	SOUTH: 2,
	WEST: 3
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
		
	}
}

var mgr = new DeliveryManager("^>v<");
