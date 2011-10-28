var Creep = Creep || {};

Creep.initialize = function () {
	this.x = xPathArray[xLength];
	this.y = yPathArray[yLength];
	this.creeps = [];
	this.creepWaypoint = [];
	this.totalCreeps = 0;
	
}

Creep.create = function () {
	this.material = new THREE.MeshLambertMaterial ( { color: 0x00FFFF } );
	this.geometry = new THREE.SphereGeometry( 100, 20, 20 );
	this.geometry.computeTangents();
	this.mesh = new THREE.Mesh ( this.geometry, this.material );
	this.mesh.position.set( this.x, this.y, 0 );
	this.mesh.health = 100;
	this.MOVE_N = [false, false, false, false];
	this.MOVE_S = [false, false, false, false];
	this.MOVE_E = [false, false, false, false];
	this.MOVE_W = [false, false, false, false];
	this.creeps.push ( this.mesh );
	this.creepWaypoint.push (xLength - 1);
	this.totalCreeps++;
	
	scene.add(this.mesh);
}

Creep.update = function() {
	if (this.totalCreeps > 0)
	{
		for (var i in this.creeps)
		{
				
			if (this.creeps[i].position.x != xPathArray[this.creepWaypoint[i]])
			{
				if (this.creeps[i].position.x > xPathArray[this.creepWaypoint[i]] && this.MOVE_E[i] == false)
				{
					this.creeps[i].position.x -= 1.7;
					this.MOVE_W[i] = true;
				}
				else if (this.creeps[i].position.x < xPathArray[this.creepWaypoint[i]] && this.MOVE_W[i] == false)
				{
					this.creeps[i].position.x += 1.7;
					this.MOVE_E[i] = true;
				}
				else
				{
					this.creeps[i].position.x = xPathArray[this.creepWaypoint[i]];
					
					if (this.creeps[i].position.x == 3 && this.creeps[i].position.y == 1)
					{
						this.creepWaypoint[i] = xPathArray.length - 2;
						this.creeps[i].position.x = xPathArray[xPathArray.length - 1];
						this.creeps[i].position.y = yPathArray[xPathArray.length - 1];
						this.MOVE_E[i] = false;
						this.MOVE_W[i] = false;
					}
					else
					{
						this.creepWaypoint[i]--;
						this.MOVE_E[i] = false;
						this.MOVE_W[i] = false;
					}
				}
			}
			
			if (this.creeps[i].position.y != yPathArray[this.creepWaypoint[i]])
			{
				if (this.creeps[i].position.y > yPathArray[this.creepWaypoint[i]] && this.MOVE_N[i] == false)
				{
					this.creeps[i].position.y -= 1.7;
					this.MOVE_S[i] = true;
				}					
				else if (this.creeps[i].position.y < yPathArray[this.creepWaypoint[i]] && this.MOVE_S[i] == false)
				{
					this.creeps[i].position.y += 1.7;
					this.MOVE_N[i] = true;
				}	
				else
				{
					this.creeps[i].position.y = yPathArray[this.creepWaypoint[i]];
					
					if (this.creeps[i].position.x == 1 && this.creeps[i].position.y == 1)
					{
						
						this.creepWaypoint[i] = xPathArray.length - 2;
						this.creeps[i].position.x = xPathArray[xPathArray.length - 1];
						this.creeps[i].position.y = yPathArray[xPathArray.length - 1];
						this.MOVE_N[i] = false;
						this.MOVE_S[i] = false;
					}
					else
					{
						this.creepWaypoint[i]--;
						this.MOVE_N[i] = false;
						this.MOVE_S[i] = false;
					}
				}
			}
		}
		this.creeps[i].health -= .5
		if (this.creeps[i].health <= 0)
		{
			Creep.isdead();
		}
		info.innerHTML = 'Health: ' + this.creeps[i].health;
	}
}

Creep.isdead = function (i) {
	scene.remove(this.creeps[i]);
	this.creeps.splice(i, 1);
	this.totalCreeps--;
}