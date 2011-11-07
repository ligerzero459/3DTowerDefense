var Creep = Creep || {};

Creep.initialize = function () {
	this.pathLength = Map.xPathArray.length - 1
	this.x = Map.xPathArray[this.pathLength];
	this.y = Map.yPathArray[this.pathLength];
	this.creeps = [];
	this.creepWaypoint = [];
	this.currentWave = 0;
	this.wave = [{"color": 0x00FFFF, "health": 100, "amount": 10, "speed": 3.7, "spawnwait": 5000, "nextwave": 10000}, {"color": 0xFF0000, "health": 150, "amount": 10, "speed": 5, "spawnwait": 8000, "nextwave": 10000}];
	
}

Creep.runLevel = function() {
	if (this.currentWave < ( this.wave.length )) {
		if (this.wave[this.currentWave].amount > 0)
		{
			Creep.create(this.wave[this.currentWave].color, this.wave[this.currentWave].health, this.wave[this.currentWave].speed);
			this.wave[this.currentWave].amount -= 1;
			setTimeout("Creep.runLevel()", this.wave[this.currentWave].spawnwait);
		}
		else {
			setTimeout("Creep.runLevel()", this.wave[this.currentWave].nextwave);
			this.currentWave += 1;
		}
	}
}

Creep.create = function ( color, health, speed ) {
	//Creep geometry
	//Will be changed to include models soon
	this.material = new THREE.MeshLambertMaterial ( { color: color } );
	this.geometry = new THREE.SphereGeometry( 100, 20, 20 );
	this.geometry.computeTangents();
	this.mesh = new THREE.Mesh ( this.geometry, this.material );
	this.mesh.position.set( this.x, this.y, 100 );
	this.mesh.health = health;
	this.mesh.speed = speed;
	
	// Sets move direction to prevent creep from moving backwards
	// if it passes the waypoint
	this.mesh.MOVE_N = false;
	this.mesh.MOVE_S = false;
	this.mesh.MOVE_E = false;
	this.mesh.MOVE_W = false;
	
	// Creep poison code
	// Determines if it's poisoned, for how long and how much damage
	this.mesh.poison.isPoisoned = false;
	this.mesh.poison.damage = 0;
	this.mesh.poison.duration = 0;
	this.mesh.poison.moves = 0;
	
	this.creeps.push ( this.mesh );
	this.creepWaypoint.push ( this.pathLength - 1 );
	
	scene.add( this.mesh );
}

Creep.update = function() {
	for (var i in this.creeps)
	{
		if (this.creeps[i].position.x != Map.xPathArray[this.creepWaypoint[i]])
		{
			if (this.creeps[i].position.x > Map.xPathArray[this.creepWaypoint[i]] && this.creeps[i].MOVE_E == false)
			{
				this.creeps[i].position.x -= this.creeps[i].speed;
				this.creeps[i].MOVE_W = true;
			}
			else if (this.creeps[i].position.x < Map.xPathArray[this.creepWaypoint[i]] && this.creeps[i].MOVE_W == false)
			{
				this.creeps[i].position.x += this.creeps[i].speed;
				this.creeps[i].MOVE_E = true;
			}
			else
			{
				this.creeps[i].position.x = Map.xPathArray[this.creepWaypoint[i]];
				this.creeps[i].position.y = Map.yPathArray[this.creepWaypoint[i]];
				this.creepWaypoint[i]--;
				this.creeps[i].MOVE_N = false;
				this.creeps[i].MOVE_S = false;
				this.creeps[i].MOVE_E = false;
				this.creeps[i].MOVE_W = false;
			}
		}
		else if (this.creeps[i].position.y != Map.yPathArray[this.creepWaypoint[i]])
		{
			if (this.creeps[i].position.y > Map.yPathArray[this.creepWaypoint[i]] && this.creeps[i].MOVE_N == false)
			{
				this.creeps[i].position.y -= this.creeps[i].speed;
				this.creeps[i].MOVE_S = true;
			}					
			else if (this.creeps[i].position.y < Map.yPathArray[this.creepWaypoint[i]] && this.creeps[i].MOVE_S == false)
			{
				this.creeps[i].position.y += this.creeps[i].speed;
				this.creeps[i].MOVE_N = true;
			}
			else
			{
				this.creeps[i].position.x = Map.xPathArray[this.creepWaypoint[i]];
				this.creeps[i].position.y = Map.yPathArray[this.creepWaypoint[i]];
				this.creepWaypoint[i]--;
				this.creeps[i].MOVE_N = false;
				this.creeps[i].MOVE_S = false;
				this.creeps[i].MOVE_E = false;
				this.creeps[i].MOVE_W = false;
			}
		}
		else
		{
			this.creeps[i].position.x = Map.xPathArray[this.creepWaypoint[i]];
			this.creeps[i].position.y = Map.yPathArray[this.creepWaypoint[i]];
			this.creepWaypoint[i]--;
			this.creeps[i].MOVE_N = false;
			this.creeps[i].MOVE_S = false;
			this.creeps[i].MOVE_E = false;
			this.creeps[i].MOVE_W = false;
		}
	
		info.innerHTML = 'Total Creeps Remaining: ' + this.wave[this.currentWave].amount;
		if (this.creeps[i].poison == true) {
			this.creeps[i].health -= this.creeps[i].poisonDamage;
		}
		if (this.creeps[i].health <= 0)
		{
			Creep.isDead(i);
		}
	}
}

Creep.isDead = function ( i ) {
	scene.remove(this.creeps[i]);
	this.creeps.splice(i, 1);
}