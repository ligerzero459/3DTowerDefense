var Creep = Creep || {};

Creep.initialize = function () {
	this.pathLength = Map.xPathArray.length - 1
	this.runThrough = 1;
	this.runThroughHealth = 1;
	this.runThroughSpeed = 1;
	this.runThroughScore = 1;
	this.runThroughCash = 1;
	this.x = Map.xPathArray[this.pathLength];
	this.z = Map.zPathArray[this.pathLength];
	this.creeps = [];
	this.currentWave = 0;
	this.wave = [
			{"color": 0x003366, "health": 75, "amount": 10, "speed": 7, "score": 100, "cash": 15, "spawnwait": 5000, "nextwave": 5000},
			{"color": 0xFF0000, "health": 400, "amount": 6, "speed": 5, "score": 200, "cash": 25, "spawnwait": 7500, "nextwave": 5000}, 
			{"color": 0xFF6600, "health": 120, "amount": 25, "speed": 22, "score": 75, "cash": 10, "spawnwait": 1000, "nextwave": 10000}, 
			{"color": 0xFAFAD2, "health": 150, "amount": 15, "speed": 7, "score": 100, "cash": 12, "spawnwait": 500, "nextwave": 10000}, 
			{"color": 0x000000, "health": 1000, "amount": 1, "speed": 6, "score": 2500, "cash": 450, "spawnwait": 7500, "nextwave": 10000},
			/*{"color": 0xFFFFFF, "health": 85000, "amount": 1, "speed": 200, "score": 150000, "cash": 666, "spawnwait": 2000, "nextwave": 10000}*/
	];
		//10 base, 6 armor, 25 speed, 15 swarm, 1 boss,
		//15 base, 9 armor, 35 speed, 25 swarm, 1 boss,
		//25 base, 15 armor, 50 speed, 50 swarm, 2 bosses, nyan (jk)
	this.waveCounter = 1;
	
	this.load();
}

Creep.load = function () {
	//	Loader.loadModel("viper", "obj/viper/viperThree.js");
	Loader.loadModel("arwing", "obj/Arwing/Arwing.js");
}

Creep.runLevel = function() {
	if (gameOn == true) {
		if (this.currentWave < ( this.wave.length )) {
			if (this.wave[this.currentWave].amount > 0)
			{
				Creep.create(this.wave[this.currentWave].color, (this.wave[this.currentWave].health * this.runThroughHealth), (this.wave[this.currentWave].speed * this.runThroughSpeed), (this.wave[this.currentWave].score * this.runThroughScore), (this.wave[this.currentWave].cash * this.runThroughCash));
				this.wave[this.currentWave].amount -= 1;
				setTimeout("Creep.runLevel()", this.wave[this.currentWave].spawnwait);
			}
			else {
				setTimeout("Creep.runLevel()", this.wave[this.currentWave].nextwave);
				this.currentWave += 1;
				this.waveCounter += 1;
			}
		}
		else {
			this.runThroughHealth = this.runThroughHealth * 1.45;
			this.runThroughSpeed = this.runThroughSpeed * 1.15;
			this.runThroughScore = this.runThroughScore * 1.3;
			this.runThroughCash = this.runThroughCash * 1.2;
			this.currentWave = 0;
			this.wave = [
				{"color": 0x003366, "health": 75, "amount": 10, "speed": 7, "score": 100, "cash": 15, "spawnwait": 5000, "nextwave": 5000},
				{"color": 0xFF0000, "health": 400, "amount": 6, "speed": 5, "score": 200, "cash": 25, "spawnwait": 7500, "nextwave": 5000}, 
				{"color": 0xFF6600, "health": 120, "amount": 25, "speed": 22, "score": 75, "cash": 10, "spawnwait": 1000, "nextwave": 10000}, 
				{"color": 0xFAFAD2, "health": 150, "amount": 15, "speed": 7, "score": 100, "cash": 12, "spawnwait": 500, "nextwave": 10000}, 
				{"color": 0x000000, "health": 1000, "amount": 1, "speed": 6, "score": 2500, "cash": 450, "spawnwait": 7500, "nextwave": 10000},
				/*{"color": 0xFFFFFF, "health": 85000, "amount": 1, "speed": 200, "score": 150000, "cash": 666, "spawnwait": 2000, "nextwave": 10000}*/
			];
			setTimeout("Creep.runLevel()", 10000);
		}
	}
}

Creep.create = function ( color, health, speed, score, cash ) {
	//Creep geometry
	//Will be changed to include models soon
	
	
	this.material = new THREE.MeshFaceMaterial ();
	//this.geometry = new THREE.SphereGeometry( 100, 20, 20 );
	//this.geometry.computeTangents();
	this.mesh = new THREE.Mesh ( Loader.getModel("arwing"), this.material );
	this.mesh.position.set( this.x, 100, this.z );
	this.mesh.scale.set( 80, 80, 80 );
	this.mesh.rotation.y = - 180 * Math.PI / 180;
	this.mesh.overdraw = true;
	this.mesh.waypoint = this.pathLength - 1;
	this.mesh.health = Math.floor(health);
	this.mesh.speed = Math.floor(speed);
	this.mesh.score = Math.floor(score);
	this.mesh.cash = Math.floor(cash);
	
	// Sets move direction to prevent creep from moving backwards
	// if it passes the waypoint
	this.mesh.MOVE_N = false;
	this.mesh.MOVE_S = false;
	this.mesh.MOVE_E = false;
	this.mesh.MOVE_W = false;
	
	// Creep poison properties
	// Determines if it's poisoned, for how long and how much damage occurs
	this.mesh.isPoisoned = false;
	this.mesh.poisonDamage = 0;
	this.mesh.poisonDuration = 0;
	this.mesh.poisonMoves = 0;
	
	// Creep slow properties
	// Will determine if the creep is slowed, for how many turns and by how much
	this.mesh.isSlowed = false;
	this.mesh.slowAmount = 0;
	this.mesh.slowDuration = 0;
	this.mesh.slowMoves = 0;
	
	// Creep fire properties
	// Determines if it's on fire, for how long and how much damage occurs
	this.mesh.isOnFire = false;
	this.mesh.fireDamage = 0;
	this.mesh.fireDuration = 0;
	this.mesh.fireMoves = 0;
	
	this.mesh.updateMatrix();
	
	this.creeps.push ( this.mesh );
	
	scene.add( this.mesh );
}

Creep.update = function() {
	for (var i in this.creeps)
	{
		if (this.creeps[i].isSlowed == true) {
			this.creeps[i].slowMoves += 1;
			if (this.creeps[i].slowDuration == this.creeps[i].slowMoves) {
				this.creeps[i].isSlowed = false;
				this.creeps[i].slowMoves = 0;
				this.creeps[i].speed /= this.creeps[i].slowAmount;
			}
		}
		
		if (this.creeps[i].position.x != Map.xPathArray[this.creeps[i].waypoint])
		{
			if (this.creeps[i].position.x > Map.xPathArray[this.creeps[i].waypoint] && this.creeps[i].MOVE_E == false)
			{
				this.creeps[i].rotation.y = 90 * Math.PI / 180;
				this.creeps[i].position.x -= this.creeps[i].speed;
				this.creeps[i].MOVE_W = true;
			}
			else if (this.creeps[i].position.x < Map.xPathArray[this.creeps[i].waypoint] && this.creeps[i].MOVE_W == false)
			{
				this.creeps[i].rotation.y = 270 * Math.PI / 180;
				this.creeps[i].position.x += this.creeps[i].speed;
				this.creeps[i].MOVE_E = true;
			}
			else
			{
				this.creeps[i].position.x = Map.xPathArray[this.creeps[i].waypoint];
				this.creeps[i].position.z = Map.zPathArray[this.creeps[i].waypoint];
				this.creeps[i].waypoint--;
				this.creeps[i].MOVE_N = false;
				this.creeps[i].MOVE_S = false;
				this.creeps[i].MOVE_E = false;
				this.creeps[i].MOVE_W = false;
				if (this.creeps[i].waypoint < 0) {
					scene.remove(this.creeps[i]);
					this.creeps.splice(i, 1);
					Score.setHealth();
				}
			}
		}
		else if (this.creeps[i].position.z != Map.zPathArray[this.creeps[i].waypoint])
		{
			if (this.creeps[i].position.z > Map.zPathArray[this.creeps[i].waypoint] && this.creeps[i].MOVE_N == false)
			{
				this.creeps[i].rotation.y = 0 * Math.PI / 180;
				this.creeps[i].position.z -= this.creeps[i].speed;
				this.creeps[i].MOVE_S = true;
			}					
			else if (this.creeps[i].position.z < Map.zPathArray[this.creeps[i].waypoint] && this.creeps[i].MOVE_S == false)
			{
				this.creeps[i].rotation.y = 180 * Math.PI / 180;
				this.creeps[i].position.z += this.creeps[i].speed;
				this.creeps[i].MOVE_N = true;
			}
			else
			{
				this.creeps[i].position.x = Map.xPathArray[this.creeps[i].waypoint];
				this.creeps[i].position.z = Map.zPathArray[this.creeps[i].waypoint];
				this.creeps[i].waypoint--;
				this.creeps[i].MOVE_N = false;
				this.creeps[i].MOVE_S = false;
				this.creeps[i].MOVE_E = false;
				this.creeps[i].MOVE_W = false;
				if (this.creeps[i].waypoint < 0) {
					scene.remove(this.creeps[i]);
					this.creeps.splice(i, 1);
					Score.setHealth();
				}
			}
		}
		else
		{
			this.creeps[i].position.x = Map.xPathArray[this.creeps[i].waypoint];
			this.creeps[i].position.z = Map.zPathArray[this.creeps[i].waypoint];
			this.creeps[i].waypoint--;
			this.creeps[i].MOVE_N = false;
			this.creeps[i].MOVE_S = false;
			this.creeps[i].MOVE_E = false;
			this.creeps[i].MOVE_W = false;
			if (this.creeps[i].waypoint < 0) {
				scene.remove(this.creeps[i]);
				this.creeps.splice(i, 1);
				Score.setHealth();
			}
		}
		
		if (this.creeps[i].isPoisoned == true) {
			this.creeps[i].health -= this.creeps[i].poisonDamage;
			this.creeps[i].poisonMoves += 1;
			if (this.creeps[i].poisonDuration == this.creeps[i].poisonMoves) {
				this.creeps[i].isPoisoned = false;
				this.creeps[i].poisonMoves = 0;
			}
		}
		else if (this.creeps[i].isOnFire == true) {
			this.creeps[i].health -= this.creeps[i].fireDamage;
			this.creeps[i].fireMoves += 1;
			if (this.creeps[i].fireDuration == this.creeps[i].fireMoves) {
				this.creeps[i].isOnFire = false;
				this.creeps[i].fireMoves = 0;
			}
		}
		
		if (this.creeps[i].health <= 0)
		{
			Creep.isDead(i);
		}
	}
}

Creep.isDead = function ( i ) {
	Score.setScore(this.creeps[i].score, this.creeps[i].cash);
	scene.remove(this.creeps[i]);
	this.creeps.splice(i, 1);
}

Creep.restartGame = function () {
	for (var i in this.creeps)
	{
		scene.remove(this.creeps[i]);
	}
	this.currentWave = 0;
	this.runThrough = 1;
	this.runThroughHealth = 1;
	this.runThroughSpeed = 1;
	this.runThroughScore = 1;
	this.runThroughCash = 1;
	this.waveCounter = 1;
	this.wave = [
			{"color": 0x003366, "health": 75, "amount": 10, "speed": 7, "score": 100, "cash": 15, "spawnwait": 5000, "nextwave": 5000},
			{"color": 0xFF0000, "health": 400, "amount": 6, "speed": 5, "score": 200, "cash": 25, "spawnwait": 7500, "nextwave": 5000}, 
			{"color": 0xFF6600, "health": 120, "amount": 25, "speed": 22, "score": 75, "cash": 10, "spawnwait": 1000, "nextwave": 10000}, 
			{"color": 0xFAFAD2, "health": 150, "amount": 15, "speed": 7, "score": 100, "cash": 12, "spawnwait": 500, "nextwave": 10000}, 
			{"color": 0x000000, "health": 1000, "amount": 1, "speed": 6, "score": 2500, "cash": 450, "spawnwait": 7500, "nextwave": 10000},
			/*{"color": 0xFFFFFF, "health": 85000, "amount": 1, "speed": 200, "score": 150000, "cash": 666, "spawnwait": 2000, "nextwave": 10000}*/
		];
}

Creep.getWave = function() {
	return this.waveCounter;
}