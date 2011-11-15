var Tower = Tower || {};

Tower.initialize = function () {
	this.towers = [];
	this.towerType = [
	{"type": "Tower", "color": 0xFFFF00, "geometry": new THREE.SphereGeometry(90, 10, 10), "damage": 15, "fireSpeed": 4, "range": 3, "shotPower": 100, "price": 75},  // Earth
	{"type": "Slow", "color": 0xFFFF00, "geometry": new THREE.SphereGeometry(90, 10, 10), "damage": 0, "fireSpeed": 5, "range": 4, "shotPower": 100, "price": 125},   // Pluto
	{"type": "Laser", "color": 0xFFFF00, "geometry": new THREE.SphereGeometry(90, 10, 10), "damage": 5, "fireSpeed": 20, "range": 2, "shotPower": 100, "price": 150},  // Neptune
	{"type": "Poison", "color": 0xFFFF00, "geometry": new THREE.SphereGeometry(90, 10, 10), "damage": 2, "fireSpeed": 3, "range": 3.5, "shotPower": 100, "poisonDamage": 3, "poisonDuration": 5, "price": 50},  // Uranus
	{"type": "Sniper", "color": 0x00CC00, "geometry": new THREE.SphereGeometry(90, 10, 10), "damage": 15, "fireSpeed": 0.5, "range": 10, "shotPower": 200, "price": 50},  // Saturn
	{"type": "Splash", "color": 0xFFFF00, "geometry": new THREE.SphereGeometry(90, 10, 10), "damage": 10, "fireSpeed": 1, "range": 7, "shotPower": 200, "price": 50},  // Jupiter
	{"type": "Fire", "color": 0xFFFF00, "geometry": new THREE.SphereGeometry(90, 10, 10), "damage": 2, "fireSpeed": 3, "range": 3.5, "shotPower": 100, "fireDamage": 0.5, "fireDuration": 8, "price": 50},  // Mars
	{"type": "Rapid", "color": 0xFFFF00, "geometry": new THREE.SphereGeometry(90, 10, 10), "damage": 1, "fireSpeed": 15, "range": 4, "shotPower": 100, "price": 50},  // Venus
	{"type": "Ultimate", "color": 0xFFFF00, "geometry": new THREE.SphereGeometry(90, 10, 10), "damage": 100, "fireSpeed": 0.1, "range": 5, "shotPower": 150, "price": 50},  // Mercury	
	 ];
	 this.towerIndex = 0;
}

Tower.create = function( x, z, type ) {
	this.material = new THREE.MeshLambertMaterial ( { color: this.towerType[type].color } );
	this.geometry = this.towerType[type].geometry;
	this.mesh = new THREE.Mesh ( this.geometry, this.material );
	this.mesh.position.set( x, 100, z );
	this.mesh.shotPower = this.towerType[type].shotPower;
	this.mesh.charge = 100;
	this.mesh.fireSpeed = this.towerType[type].fireSpeed;
	this.mesh.damage = this.towerType[type].damage;
	this.mesh.range = this.towerType[type].range;
	this.mesh.charging = false;
	this.mesh.towerType = this.towerType[type].type;
	this.mesh.price = this.towerType[type].price;
	if (this.mesh.towerType == "Poison") {
		this.mesh.poisonDamage = this.towerType[type].poisonDamage;
		this.mesh.poisonDuration = this.towerType[type].poisonDuration;
		this.towers.push( this.mesh );
	}
	else if (this.mesh.towerType == "Fire") {
		this.mesh.fireDamage = this.towerType[type].fireDamage;
		this.mesh.fireDuration = this.towerType[type].fireDuration;
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
				for (var j in targets)
				{
					var target = targets[j];
					var firingTower = this.towers[i];
					Bullet.create(firingTower, target);
					Tower.hit(firingTower, target);
					this.towers[i].charging = true;
				}
			}
			else {
				if (targets != 0)
				{
					var target = targets[0];
					var firingTower = this.towers[i];
					Bullet.create(firingTower, target);
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
		var yDistance = Creep.creeps[j].position.z - this.towers[i].position.z;
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
		if (target.isPoisoned == false) {
			target.isPoisoned = true;
			target.poisonDamage = firingTower.poisonDamage;
			target.poisonDuration = firingTower.poisonDuration;
		}
		else if (target.isPoisoned == true && target.poisonDamage < firingTower.poisonDamage) {
			target.poisonDamage = firingTower.poisonDamage;
			target.poisonDuration = firingTower.poisonDuration;
		}
	}
	else if (firingTower.towerType == "Fire") {
		if (target.isOnFire == false) {
			target.isOnFire = true;
			target.fireDamage = firingTower.fireDamage;
			target.fireDuration = firingTower.fireDuration;
		}
		else if (target.isOnFire == true && target.fireDamage < firingTower.fireDamage) {
			target.fireDamage = firingTower.fireDamage;
			target.fireDuration = firingTower.fireDuration;
		}
	}
}

Tower.activate = function (towerName) {
	$("#" + towerName).css("opacity", "1.0");
	$("#" + towerName).click(function(e) {
		Tower.placeTower(towerName);
	});
}

Tower.deactivate = function (towerName) {
	$("#" + towerName).css("opacity", "0.4");
	$("#" + towerName).click(function(e) {
		e.preventDefault();
	});
}

Tower.placeTower = function (towerName) {
	towerMode = true;
	if (towerName == "Tower") {
		this.towerIndex = 0;
	}
	else if (towerName == "Slow") {
		this.towerIndex = 1;
	}
	else if (towerName == "Laser") {
		this.towerIndex = 2;
	}
	else if (towerName == "Poison") {
		this.towerIndex = 3;
	}
	else if (towerName == "Sniper") {
		this.towerIndex = 4;
	}
	else if (towerName == "Splash") {
		this.towerIndex = 5;
	}
	else if (towerName == "Fire") {
		this.towerIndex = 6;
	}
	else if (towerName == "Rapid") {
		this.towerIndex = 7;
	}
	else if (towerName == "Ultimate") {
		this.towerIndex = 8;
	}
}

Tower.restartGame = function () {
	for (var i in this.towers)
	{
		scene.remove(this.towers[i]);
	}
	Tower.deactivate("Ultimate");
	Tower.deactivate("Rapid");
	Tower.deactivate("Fire");
	Tower.deactivate("Splash");
	Tower.deactivate("Sniper");
	Tower.deactivate("Poison");
	Tower.deactivate("Laser");
	Tower.deactivate("Slow");
	Tower.deactivate("Tower");
	Tower.initialize();
}