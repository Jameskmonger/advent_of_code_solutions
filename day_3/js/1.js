// http://adventofcode.com/day/3

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
	
	getPresentsDelivered() {
		return this._presentsDelivered;
	}
}

class DeliveryManager {
	constructor(input) {
		this.houses = [];
		
		this.directions = this.parseDirections(input);
		
		this.location = [0, 0];
		
		this.deliveredCount = 0;
		
		this.deliverToHouse(x, y);
		
		for (var d of this.directions) {
			this.processDirection(d);
			
			var x = this.location[0];
			var y = this.location[1];
			
			this.deliverToHouse(x, y);
		}
		
		console.log(this.deliveredCount);
	}
	
	parseDirections(input) {
		var output = [];
		
		for (var i = 0; i < input.length; i++) {
			output.push(input[i]);
		}
		
		return output;
	}
	
	processDirection(dir) {
		if (dir === Directions.NORTH) {
			this.location[1]--;
		}
		if (dir === Directions.EAST) {
			this.location[0]++;
		}
		if (dir === Directions.SOUTH) {
			this.location[1]++;
		}
		if (dir === Directions.WEST) {
			this.location[0]--;
		}
	}
	
	deliverToHouse(x, y) {
		if (this.houses[x] === undefined) {
			this.houses[x] = [];
		}
			
		if (this.houses[x][y] === undefined) {
			this.houses[x][y] = new House();
		}
			
		this.houses[x][y].deliver();
		
		if (this.houses[x][y].getPresentsDelivered() === 1) {
			this.deliveredCount++;
		}
	}
}

var mgr = new DeliveryManager("^>v<");
