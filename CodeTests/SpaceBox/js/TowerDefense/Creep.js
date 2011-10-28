var Creep = Creep || {};

Creep.initialize = function () {
	this.x = xPathArray[xLength];
	this.y = yPathArray[yLength];
	this.creeps = [];
	this.creepWaypoint = [];
	
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
	
	scene.add(this.mesh);
}

Creep.update = function() {
	for (var i in this.creeps)
	{
			
		if (this.creeps[i].mesh.position.x != xPathArray[this.creepWaypoint[i]])
		{
			if (this.creeps[i].mesh.position.x > xPathArray[this.creepWaypoint[i]] && this.MOVE_E[i] == false)
			{
				this.creeps[i].mesh.position.x -= 1.7;
				this.MOVE_W[i] = true;
			}
			else if (this.creeps[i].mesh.position.x < xPathArray[this.creepWaypoint[i]] && this.MOVE_W[i] == false)
			{
				this.creeps[i].mesh.position.x += 1.7;
				this.MOVE_E[i] = true;
			}
			else
			{
				this.creeps[i].mesh.position.x = xPathArray[this.creepWaypoint[i]];
				
				if (this.creeps[i].mesh.position.x == 3 && this.creeps[i].mesh.position.y == 1)
				{
					this.creepWaypoint[i] = xPathArray.length - 2;
					this.creeps[i].mesh.position.x = xPathArray[xPathArray.length - 1];
					this.creeps[i].mesh.position.y = yPathArray[xPathArray.length - 1];
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
		
		if (this.creeps[i].mesh.position.y != yPathArray[this.creepWaypoint[i]])
		{
			if (this.creeps[i].mesh.position.y > yPathArray[this.creepWaypoint[i]] && this.MOVE_N[i] == false)
			{
				this.creeps[i].mesh.position.y -= 1.7;
				this.MOVE_S[i] = true;
			}					
			else if (this.creeps[i].mesh.position.y < yPathArray[this.creepWaypoint[i]] && this.MOVE_S[i] == false)
			{
				this.creeps[i].mesh.position.y += 1.7;
				this.MOVE_N[i] = true;
			}	
			else
			{
				this.creeps[i].mesh.position.y = yPathArray[this.creepWaypoint[i]];
				
				if (this.creeps[i].mesh.position.x == 1 && this.creeps[i].mesh.position.y == 1)
				{
					
					this.creepWaypoint[i] = xPathArray.length - 2;
					this.creeps[i].mesh.position.x = xPathArray[xPathArray.length - 1];
					this.creeps[i].mesh.position.y = yPathArray[xPathArray.length - 1];
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
}

Creep.isdead = function () {
	scene.remove(this.mesh);
}