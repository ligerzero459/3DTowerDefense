var Bullet = Bullet || {};

Bullet.initialize = function () {
	this.geometry = new THREE.SphereGeometry( 15, 15, 15 );
	this.material = new THREE.MeshLambertMaterial( { color: 0xFF2400 } );
	this.bulletArray = [];
}

Bullet.create = function (tower, target) {
	var mesh = new THREE.Mesh(this.geometry, this.material);
	mesh.position.copy(tower.position);
	mesh.bulletSpeed = 30;
	mesh.targetX = Map.xPathArray[target.waypoint];
	mesh.targetZ = Map.zPathArray[target.waypoint];
	mesh.MOVE_N = false;
	mesh.MOVE_S = false;
	mesh.MOVE_E = false;
	mesh.MOVE_W = false;
	/*
	var moveTarget = { x: mesh.targetX, z: mesh.targetZ };
	var update = function () {
		mesh.position.x = position.x;
		mesh.position.z = position.z;
	}
	var tween = new TWEEN.Tween(mesh.position).to( moveTarget, 1000 ).onUpdate(update);*/
	
	this.bulletArray.push( mesh );
	scene.add( mesh );
	
	//tween.start();
}

Bullet.remove = function (i) {
	scene.remove(this.bulletArray[i]);
	this.bulletArray.splice(i, 1);
}

Bullet.update = function () {
	for (var i in this.bulletArray)
	{
		if (this.bulletArray[i].position.x != this.bulletArray[i].targetX)
		{
			if (this.bulletArray[i].position.x > this.bulletArray[i].targetX && this.bulletArray[i].MOVE_E == false)
			{
				this.bulletArray[i].position.x -= this.bulletArray[i].bulletSpeed;
				this.bulletArray[i].MOVE_W = true;
			}
			else if (this.bulletArray[i].position.x > this.bulletArray[i].targetX && this.bulletArray[i].MOVE_W == false)
			{
				this.bulletArray[i].position.x += this.bulletArray[i].bulletSpeed;
				this.bulletArray[i].MOVE_E = true;
			}
			else
			{
				this.bulletArray[i].position.x = this.bulletArray[i].targetX;			}
		}
		if (this.bulletArray[i].position.z != this.bulletArray[i].targetZ)
		{
			if (this.bulletArray[i].position.z > this.bulletArray[i].targetZ && this.bulletArray[i].MOVE_N == false)
			{
				this.bulletArray[i].position.z -= this.bulletArray[i].bulletSpeed;
				this.bulletArray[i].MOVE_S = true;
			}
			else if (this.bulletArray[i].position.z > this.bulletArray[i].targetZ && this.bulletArray[i].MOVE_S == false)
			{
				this.bulletArray[i].position.z += this.bulletArray[i].bulletSpeed;
				this.bulletArray[i].MOVE_N = true;
			}
			else
			{
				this.bulletArray[i].position.z = this.bulletArray[i].targetZ;
			}
		}
		if (this.bulletArray[i].position.z == this.bulletArray[i].targetZ && this.bulletArray[i].position.x == this.bulletArray[i].targetX)
		{
			Bullet.remove(i);
		}
	}
}

Bullet.restartGame = function () {
	for (var i in this.bulletArray)
	{
		scene.remove( this.bulletArray[i] );	
	}
	
	Bullet.initialize();
}