var Tower = Tower || {};

Tower.initialize = function () {
	this.towers = [];
	this.towerType = [
	{"type": "Tower", "color": 0xFFFF00, "geometry": new THREE.CubeGeometry(90, 90, 90, 10, 10, 10), "damage": 5, "fireSpeed": 5, "range": 3, "shotPower": 100},  // Earth
	{"type": "Sniper", "color": 0x00CC00, "geometry": new THREE.CubeGeometry(90, 90, 90, 10, 10, 10), "damage": 15, "fireSpeed": 2, "range": 10, "shotPower": 100},  // Saturn
	{"type": "Ultimate", "color": 0xFFFF00, "geometry": new THREE.CubeGeometry(90, 90, 90, 10, 10, 10), "damage": 5, "fireSpeed": 5, "range": 3, "shotPower": 100},  // Mercury
	{"type": "Rapid", "color": 0xFFFF00, "geometry": new THREE.CubeGeometry(90, 90, 90, 10, 10, 10), "damage": 5, "fireSpeed": 5, "range": 3, "shotPower": 100},  // Venus
	{"type": "Fire", "color": 0xFFFF00, "geometry": new THREE.CubeGeometry(90, 90, 90, 10, 10, 10), "damage": 5, "fireSpeed": 5, "range": 3, "shotPower": 100},  // Mars
	{"type": "Splash", "color": 0xFFFF00, "geometry": new THREE.CubeGeometry(90, 90, 90, 10, 10, 10), "damage": 5, "fireSpeed": 5, "range": 3, "shotPower": 100},  // Jupiter
	{"type": "Poison", "color": 0xFFFF00, "geometry": new THREE.CubeGeometry(90, 90, 90, 10, 10, 10), "damage": 5, "fireSpeed": 5, "range": 3, "shotPower": 100, "poisonDamage": 3, "poisonDuration": 5},  // Uranus
	{"type": "Laser", "color": 0xFFFF00, "geometry": new THREE.CubeGeometry(90, 90, 90, 10, 10, 10), "damage": 5, "fireSpeed": 5, "range": 3, "shotPower": 100},  // Neptune
	{"type": "Slow", "color": 0xFFFF00, "geometry": new THREE.CubeGeometry(90, 90, 90, 10, 10, 10), "damage": 5, "fireSpeed": 5, "range": 3, "shotPower": 100},   // Pluto
	 ];
}

Tower.create = function( x, y, type ) {
	this.material = new THREE.MeshLambertMaterial ( { color: this.towerType[type].color } );
	this.geometry = this.towerType[type].geometry;
	this.mesh = new THREE.Mesh ( this.geometry, this.material );
	this.mesh.position.set( x, y, 100 );
	this.mesh.shotPower = this.towerType[type].shotPower;
	this.mesh.charge = 100;
	this.mesh.fireSpeed = this.towerType[type].fireSpeed;
	this.mesh.damage = this.towerType[type].damage;
	this.mesh.range = this.towerType[type].range;
	this.mesh.charging = false;
	this.mesh.towerType = this.towerType[type].type;
	this.mesh.originalMaterial = new THREE.MeshLambertMaterial ( { color: this.towerType[type].color } );
	if (this.mesh.towerType == "Poison") {
		this.mesh.poisonDamage = this.towerType[type].poisonDamage;
		this.mesh.poisonDuration = this.towerType[type].poisonDuration;
		this.towers.push( this.mesh );
	}
	else {
	this.towers.push( this.mesh );
	}
	
	scene.add( this.mesh );
}

Tower.update = function() {
	for (var i in this.towers)
	{
		if (this.towers[i].charging != true)
			{
			// Check if any targets are in range
			var targets = Tower.creepsInRange(i);
			
			// If there are targets in range, select the one furthest along the track
			if (this.towers[i].towerType == "Splash") {
				break;
			}
			else {
				if (targets != 0)
				{
					var target = targets[0];
					var firingTower = this.towers[i];
					Tower.hit(firingTower, target);
					this.towers[i].charging = true;
				}
			}
		}
		else
		{
			this.towers[i].charge += this.towers[i].fireSpeed;
			if (this.towers[i].charge >= 100)
			{
				this.towers[i].charging = false;
			}
		}
	}
}

Tower.creepsInRange = function(i) {
	var inRange = [];
	var creepCounter = 0;
	
	for (var j in Creep.creeps) {
		var xDistance = Creep.creeps[j].position.x - this.towers[i].position.x;
		var yDistance = Creep.creeps[j].position.y - this.towers[i].position.y;
		var Distance = Math.sqrt(Math.pow( xDistance, 2 ) + Math.pow( yDistance, 2 ));
		
		if ( Distance <= ( 200 * this.towers[i].range ) )
		{
			inRange.push( Creep.creeps[j] );
			creepCounter++;
		}
	}
	
	if (creepCounter > 0) {
		return inRange;
	}
	else {
		return 0;
	}
}

Tower.hit = function(firingTower, target) {
	target.health -= firingTower.damage;
	firingTower.charge -= firingTower.shotPower;
	if (firingTower.towerType == "Poison") {
		break;
	}
}