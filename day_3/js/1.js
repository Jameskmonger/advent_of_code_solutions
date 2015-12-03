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
				this.location[1]--;
			}
			if (d === Directions.EAST) {
				this.location[0]++;
			}
			if (d === Directions.SOUTH) {
				this.location[1]++;
			}
			if (d === Directions.WEST) {
				this.location[0]--;
			}
			
			var x = this.location[0];
			var y = this.location[1];
			
			if (this.houses[x] === undefined) {
				this.houses[x] = [];
			}
			
			console.log(this.houses[x][y]);
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
