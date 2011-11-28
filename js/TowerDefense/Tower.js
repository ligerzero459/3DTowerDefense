/*

Copyright © 2011 by Ryan Mottley, Johnathon Wilkes, Kristin Krist, Garrick Aubé, & Chris Truitt

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

*/

var Tower = Tower || {};

Tower.initialize = function () {
	this.towers = [];
	this.towerType = [
		{"type": "Earth", "color": 0x0000FF, "geometry": new THREE.SphereGeometry(90, 10, 10), "damage": 15, "fireSpeed": 4, "range": 4, "shotPower": 100, "price": 60, "texture": THREE.ImageUtils.loadTexture( 'textures/earthmap1k.jpg' )},  // Tower
		{"type": "Pluto", "color": 0x7F7F7F, "geometry": new THREE.SphereGeometry(90, 10, 10), "damage": 0, "fireSpeed": 5, "range": 4, "shotPower": 100, "price": 150, "slowAmount": 0.7, "slowDuration": 1000, "texture": THREE.ImageUtils.loadTexture( 'textures/plutomap2k.jpg' )},   // Slow
		{"type": "Neptune", "color": 0x0198E1, "geometry": new THREE.SphereGeometry(90, 10, 10), "damage": 5, "fireSpeed": 20, "range": 3, "shotPower": 100, "price": 200, "texture": THREE.ImageUtils.loadTexture( 'textures/neptunemap.jpg' )},  // Laser
		{"type": "Uranus", "color": 0x778899, "geometry": new THREE.SphereGeometry(90, 10, 10), "damage": 0, "fireSpeed": 1, "range": 4, "shotPower": 100, "poisonDamage": 0.2, "poisonDuration": 2000, "price": 250, "texture": THREE.ImageUtils.loadTexture( 'textures/uranusmap.jpg' )},  // Poison
		{"type": "Saturn", "color": 0xFFA500, "geometry": new THREE.SphereGeometry(90, 10, 10), "damage": 500, "fireSpeed": 0.15, "range": 12, "shotPower": 100, "price": 350, "texture": THREE.ImageUtils.loadTexture( 'textures/saturnmap.jpg' )},  // Sniper
		{"type": "Jupiter", "color": 0xFF2400, "geometry": new THREE.SphereGeometry(90, 10, 10),"damage": 15, "fireSpeed": 0.5, "range": 4, "shotPower": 100, "price": 300, "texture": THREE.ImageUtils.loadTexture( 'textures/jupitermap.jpg' )},  // Splash
		{"type": "Mars", "color": 0xFF0000, "geometry": new THREE.SphereGeometry(90, 10, 10), "damage": 0, "fireSpeed": 1, "range": 4, "shotPower": 100, "fireDamage": 0.5, "fireDuration": 2000, "price": 400, "texture": THREE.ImageUtils.loadTexture( 'textures/mars_1k_color.jpg' )},  // Fire
		{"type": "Venus", "color": 0xFFB90F, "geometry": new THREE.SphereGeometry(90, 10, 10), "damage": 6, "fireSpeed": 40, "range": 3, "shotPower": 100, "price": 2000, "texture": THREE.ImageUtils.loadTexture( 'textures/venusmap.jpg' )},  // Rapid
		{"type": "Mercury", "color": 0xD2691E, "geometry": new THREE.SphereGeometry(90, 10, 10), "damage": 125, "fireSpeed": 10, "range": 15, "shotPower": 100, "price": 5000, "texture": THREE.ImageUtils.loadTexture( 'textures/mercurymap.jpg' )},  // Ultimate	
	 ];
	 this.towerIndex = 0;
	 
	 this.load();
	 Gui.initialize();
}

Tower.load = function () {
	Loader.loadTexture("Earth", "textures/earthmap1k.jpg");
	Loader.loadTexture("Pluto", "textures/plutomap2k.jpg");
	Loader.loadTexture("Neptune", "textures/neptunemap.jpg");
	Loader.loadTexture("Uranus", "textures/uranusmap.jpg");
	Loader.loadTexture("Saturn", "textures/saturnmap.jpg");
	Loader.loadTexture("Jupiter", "textures/jupitermap.jpg");
	Loader.loadTexture("Mars", "textures/mars_1k_color.jpg");
	Loader.loadTexture("Venus", "textures/venusmap.jpg");
	Loader.loadTexture("Mercury", "textures/mercurymap.jpg");
}

Tower.create = function ( x, z, type ) {
	this.material = new THREE.MeshLambertMaterial ( { map: Loader.getTexture(this.towerType[type].type) } );
	this.geometry = this.towerType[type].geometry;
	this.mesh = new THREE.Mesh ( this.geometry, this.material );
	this.mesh.position.set( x, 100, z );
	this.mesh.meshType = "Tower";
	this.mesh.shotPower = this.towerType[type].shotPower;
	this.mesh.charge = 100;
	this.mesh.fireSpeed = this.towerType[type].fireSpeed;
	this.mesh.damage = this.towerType[type].damage;
	this.mesh.range = this.towerType[type].range;
	this.mesh.charging = false;
	this.mesh.towerType = this.towerType[type].type;
	this.mesh.price = this.towerType[type].price;
	this.mesh.matrixAutoUpdate = false;
	this.mesh.updateMatrix();
	if (this.mesh.towerType == "Uranus") {
		this.mesh.poisonDamage = this.towerType[type].poisonDamage;
		this.mesh.poisonDuration = this.towerType[type].poisonDuration;
		this.towers.push( this.mesh );
	}
	else if (this.mesh.towerType == "Mars") {
		this.mesh.fireDamage = this.towerType[type].fireDamage;
		this.mesh.fireDuration = this.towerType[type].fireDuration;
		this.towers.push( this.mesh );
	}
	else if (this.mesh.towerType == "Pluto") {
		this.mesh.slowAmount = this.towerType[type].slowAmount;
		this.mesh.slowDuration = this.towerType[type].slowDuration;
		this.towers.push( this.mesh );
	} 
	else {
	this.towers.push( this.mesh );
	}
	
	scene.add( this.mesh );
	Score.buyTower(this.mesh.price);
}

Tower.update = function() {
	for (var i in this.towers)
	{
		if (this.towers[i].charging != true)
			{
			// Check if any targets are in range
			var targets = Tower.creepsInRange(i);
			
			// If there are targets in range, select the one furthest along the track
			if (this.towers[i].towerType == "Jupiter") {
				for (var j in targets)
				{
					var target = targets[j];
					var firingTower = this.towers[i];
					Bullet.create(firingTower, target);
					Tower.hit(firingTower, target);
					this.towers[i].charging = true;
				}
			}
			else if (this.towers[i].towerType == "Pluto") {
				for (var j in targets)
				{
					var target = targets[j];
					var firingTower = this.towers[i];
					if (target.isSlowed == false) {
						Bullet.create(firingTower, target);
						Tower.hit(firingTower, target);
						this.towers[i].charging = true;
					}
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
			this.towers[i].charge += this.towers[i].fireSpeed * speedModifier;
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
		var xDistance = Math.abs(Creep.creeps[j].position.x - this.towers[i].position.x);
		var yDistance = Math.abs(Creep.creeps[j].position.z - this.towers[i].position.z);
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
	target.healthMesh.scale.x -= firingTower.damage/target.startingHealth;
	
	if (target.healthMesh.scale.x < 0) {
			target.healthMesh.scale.x = 0;
	}
		
	target.health -= firingTower.damage;
	firingTower.charge -= firingTower.shotPower;
	if (firingTower.towerType == "Uranus") {
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
	else if (firingTower.towerType == "Mars") {
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
	else if (firingTower.towerType == "Pluto") {
		if (target.isSlowed == false) {
			target.isSlowed = true;
			target.slowAmount = firingTower.slowAmount;
			target.slowDuration = firingTower.slowDuration;
			target.speed *= target.slowAmount;
		}
		else if (target.isSlowed == true && target.slowAmount < firingTower.slowAmount) {
			target.slowAmount = firingTower.slowAmount;
			target.slowDuration = firingTower.slowDuration;
			target.speed *= target.slowAmount;
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
	if (gameOn == true) {
		if (towerName == "Earth") {
			this.towerIndex = 0;
		}
		else if (towerName == "Pluto") {
			this.towerIndex = 1;
		}
		else if (towerName == "Neptune") {
			this.towerIndex = 2;
		}
		else if (towerName == "Uranus") {
			this.towerIndex = 3;
		}
		else if (towerName == "Saturn") {
			this.towerIndex = 4;
		}
		else if (towerName == "Jupiter") {
			this.towerIndex = 5;
		}
		else if (towerName == "Mars") {
			this.towerIndex = 6;
		}
		else if (towerName == "Venus") {
			this.towerIndex = 7;
		}
		else if (towerName == "Mercury") {
			this.towerIndex = 8;
		}
		
		if (Score.getCash() >= Tower.getPrice(Tower.towerIndex)) {
			towerMode = true;
		}
	}
}

Tower.restartGame = function () {
	for (var i in this.towers)
	{
		scene.remove(this.towers[i]);
	}
	Tower.deactivate("Mercury");
	Tower.deactivate("Venus");
	Tower.deactivate("Mars");
	Tower.deactivate("Jupiter");
	Tower.deactivate("Saturn");
	Tower.deactivate("Uranus");
	Tower.deactivate("Neptune");
	Tower.deactivate("Pluto");
	Tower.deactivate("Earth");
	
	this.towers = new Array();
	this.towerIndex = 0;
}

Tower.getPrice = function (type) {
	return this.towerType[type].price;
}

Tower.checkTower = function (x, z) {
	for (var i in this.towers)
	{
		if (this.towers[i].position.x == x && this.towers[i].position.z == z) {
			return true;
		}
	}
	
	return false;
}