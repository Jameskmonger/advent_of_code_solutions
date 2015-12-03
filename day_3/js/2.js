// http://adventofcode.com/day/3

"use strict";

Math.isEven = function(value) {
	return (value % 2 === 0);
}

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

class Location {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

class Postman {
	constructor() {
		this.location = new Location(0, 0);
	}
	
	move(direction) {
		if (direction === Directions.NORTH) {
			this.location.y--;
		}
		if (direction === Directions.EAST) {
			this.location.x++;
		}
		if (direction === Directions.SOUTH) {
			this.location.y++;
		}
		if (direction === Directions.WEST) {
			this.location.x--;
		}
	}
}

class DeliveryManager {
	constructor(input) {
		this.resetState();
		
		this.directions = this.parseDirections(input);
	}
	
	resetState() {
		this.houses = [];
		
		this.postmen = [];
		
		this.postmen[0] = new Postman();
		this.postmen[1] = new Postman();
		
		this.location = new Location(0, 0);
		
		this.deliveredCount = 0;
	}
	
	getHousesDeliveredTo() {
		this.resetState();
		
		this.deliverToHouse(this.location);
		
		for (var index in this.directions) {
			var dir = this.directions[index];
		
			if (Math.isEven(index)) {
				this.postmen[0].move(dir);
				
				this.deliverToHouse(this.postmen[0].location);
			} else {
				this.postmen[1].move(dir);
				
				this.deliverToHouse(this.postmen[1].location);
			}
		}
		
		return this.deliveredCount;
	}
	
	parseDirections(input) {
		var output = [];
		
		for (var i = 0; i < input.length; i++) {
			output.push(input[i]);
		}
		
		return output;
	}
	
	processDirection(dir) {
		
	}
	
	deliverToHouse(location) {
		var x = location.x;
		var y = location.y;
		
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

var mgr = new DeliveryManager("^v^v^v^v^v");

console.log(mgr.getHousesDeliveredTo());