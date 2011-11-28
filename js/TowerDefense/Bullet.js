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

var Bullet = Bullet || {};

Bullet.initialize = function () {
	this.geometry = new THREE.SphereGeometry( 15, 15, 15 );
	this.material = new THREE.MeshLambertMaterial( { color: 0xFF2400 } );
	this.bulletArray = [];
}

Bullet.create = function (tower, target) {
	var mesh = new THREE.Mesh(this.geometry, this.material);
	mesh.position.copy(tower.position);
	mesh.bulletSpeed = 50;
	mesh.meshType = "Bullet";
	mesh.targetX = Map.PathArray[target.waypoint].x;
	mesh.targetZ = Map.PathArray[target.waypoint].z;
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
				this.bulletArray[i].position.x -= this.bulletArray[i].bulletSpeed * speedModifier;
				this.bulletArray[i].MOVE_W = true;
			}
			else if (this.bulletArray[i].position.x > this.bulletArray[i].targetX && this.bulletArray[i].MOVE_W == false)
			{
				this.bulletArray[i].position.x += this.bulletArray[i].bulletSpeed * speedModifier;
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
				this.bulletArray[i].position.z -= this.bulletArray[i].bulletSpeed * speedModifier;
				this.bulletArray[i].MOVE_S = true;
			}
			else if (this.bulletArray[i].position.z > this.bulletArray[i].targetZ && this.bulletArray[i].MOVE_S == false)
			{
				this.bulletArray[i].position.z += this.bulletArray[i].bulletSpeed * speedModifier;
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
	this.bulletArray = new Array();
}