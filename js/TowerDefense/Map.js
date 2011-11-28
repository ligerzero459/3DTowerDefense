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

var Map = Map || {};

Map.initialize = function (height, shw) {
	this.PathArray = [];
	this.PLANE_HEIGHT = height;
	this.PLANE_S_H_W = shw;
	this.x = 100;
	this.z = 100;
	
	this.PathArray.push(new THREE.Vector3(this.x, 0, this.z));
}

Map.generate = function () {
	var mergedGeo = new THREE.Geometry();
	
	this.material = new THREE.MeshLambertMaterial ( { color: 0xffffff, wireframe: true, opacity: 0.3, } );
	this.geometry = new THREE.PlaneGeometry ( PLANE_HEIGHT, PLANE_WIDTH, PLANE_S_H_W, PLANE_S_H_W );
	this.baseMesh = new THREE.Mesh ( this.geometry, this.material );
	this.baseMesh.meshType = "Map";
	this.baseMesh.position.set( 0, 0, 0 );
	this.baseMesh.scale.set( 1, 1, 1 );
	this.baseMesh.rotation.x = - 90 * Math.PI / 180;
	this.baseMesh.matrixAutoUpdate = false;
	this.baseMesh.updateMatrix();
	
	scene.add(this.baseMesh);
	
	for (var i = 1; i <= 20	; i ++)
	{
		this.x += 200;
		
		this.PathArray.push(new THREE.Vector3(this.x, 0, this.z));
		this.material = new THREE.MeshBasicMaterial ( { color: 0x999999, wireframe: false } );
		this.geometry = new THREE.PlaneGeometry ( PLANE_HEIGHT/PLANE_S_H_W, PLANE_HEIGHT/PLANE_S_H_W, 5, 5 );
		this.planeMesh = new THREE.Mesh ( this.geometry, this.material );
		this.planeMesh.meshType = "Map";
		this.planeMesh.position.set( this.x, 0, this.z );
		this.planeMesh.scale.set( 1, 1, 1 );
		this.planeMesh.rotation.x = - 90 * Math.PI / 180;
		this.planeMesh.matrixAutoUpdate = false;
		this.planeMesh.updateMatrix();
		
		scene.add(this.planeMesh);
	}
	
	for (var i = 1; i <= 15; i++)
	{
		this.z += -200;
		
		this.PathArray.push(new THREE.Vector3(this.x, 0, this.z));
		
		this.material = new THREE.MeshBasicMaterial ( { color: 0x999999, wireframe: false } );
		this.geometry = new THREE.PlaneGeometry ( PLANE_HEIGHT/PLANE_S_H_W, PLANE_HEIGHT/PLANE_S_H_W, 5, 5 );
		this.planeMesh = new THREE.Mesh ( this.geometry, this.material );
		this.planeMesh.meshType = "Map";
		this.planeMesh.position.set( this.x, 0, this.z );
		this.planeMesh.scale.set( 1, 1, 1 );
		this.planeMesh.rotation.x = - 90 * Math.PI / 180;
		this.planeMesh.matrixAutoUpdate = false;
		this.planeMesh.updateMatrix();

		scene.add(this.planeMesh);
	}
	
	for (var i = 1; i <= 5	; i ++)
	{
		this.x += -200;
		
		this.PathArray.push(new THREE.Vector3(this.x, 0, this.z));
		
		this.material = new THREE.MeshBasicMaterial ( { color: 0x999999, wireframe: false } );
		this.geometry = new THREE.PlaneGeometry ( PLANE_HEIGHT/PLANE_S_H_W, PLANE_HEIGHT/PLANE_S_H_W, 5, 5 );
		this.planeMesh = new THREE.Mesh ( this.geometry, this.material );
		this.planeMesh.meshType = "Map";
		this.planeMesh.position.set( this.x, 0, this.z );
		this.planeMesh.scale.set( 1, 1, 1 );
		this.planeMesh.rotation.x = - 90 * Math.PI / 180;
		this.planeMesh.matrixAutoUpdate = false;
		this.planeMesh.updateMatrix();

		scene.add(this.planeMesh);
	}
	
	for (var i = 1; i <= 30; i++)
	{
		this.z += 200;
		
		this.PathArray.push(new THREE.Vector3(this.x, 0, this.z));
		
		this.material = new THREE.MeshBasicMaterial ( { color: 0x999999, wireframe: false } );
		this.geometry = new THREE.PlaneGeometry ( PLANE_HEIGHT/PLANE_S_H_W, PLANE_HEIGHT/PLANE_S_H_W, 5, 5 );
		this.planeMesh = new THREE.Mesh ( this.geometry, this.material );
		this.planeMesh.meshType = "Map";
		this.planeMesh.position.set( this.x, 0, this.z );
		this.planeMesh.scale.set( 1, 1, 1 );
		this.planeMesh.rotation.x = - 90 * Math.PI / 180;
		this.planeMesh.matrixAutoUpdate = false;
		this.planeMesh.updateMatrix();

		scene.add(this.planeMesh);
	}
	
	for (var i = 1; i <= 25	; i ++)
	{
		this.x += -200;
		
		this.PathArray.push(new THREE.Vector3(this.x, 0, this.z));
		
		this.material = new THREE.MeshBasicMaterial ( { color: 0x999999, wireframe: false } );
		this.geometry = new THREE.PlaneGeometry ( PLANE_HEIGHT/PLANE_S_H_W, PLANE_HEIGHT/PLANE_S_H_W, 5, 5 );
		this.planeMesh = new THREE.Mesh ( this.geometry, this.material );
		this.planeMesh.meshType = "Map";
		this.planeMesh.position.set( this.x, 0, this.z );
		this.planeMesh.scale.set( 1, 1, 1 );
		this.planeMesh.rotation.x = - 90 * Math.PI / 180;
		this.planeMesh.matrixAutoUpdate = false;
		this.planeMesh.updateMatrix();

		scene.add(this.planeMesh);
	}
	
	for (var i = 1; i <= 25; i++)
	{
		this.z += -200;
		
		this.PathArray.push(new THREE.Vector3(this.x, 0, this.z));
		
		this.material = new THREE.MeshBasicMaterial ( { color: 0x999999, wireframe: false } );
		this.geometry = new THREE.PlaneGeometry ( PLANE_HEIGHT/PLANE_S_H_W, PLANE_HEIGHT/PLANE_S_H_W, 5, 5 );
		this.planeMesh = new THREE.Mesh ( this.geometry, this.material );
		this.planeMesh.meshType = "Map";
		this.planeMesh.position.set( this.x, 0, this.z );
		this.planeMesh.scale.set( 1, 1, 1 );
		this.planeMesh.rotation.x = - 90 * Math.PI / 180;
		this.planeMesh.matrixAutoUpdate = false;
		this.planeMesh.updateMatrix();

		scene.add(this.planeMesh);
	}
	
	for (var i = 1; i <= 10	; i ++)
	{
		this.x += -200;
		
		this.PathArray.push(new THREE.Vector3(this.x, 0, this.z));
		
		this.material = new THREE.MeshBasicMaterial ( { color: 0x999999, wireframe: false } );
		this.geometry = new THREE.PlaneGeometry ( PLANE_HEIGHT/PLANE_S_H_W, PLANE_HEIGHT/PLANE_S_H_W, 5, 5 );
		this.planeMesh = new THREE.Mesh ( this.geometry, this.material );
		this.planeMesh.meshType = "Map";
		this.planeMesh.position.set( this.x, 0, this.z );
		this.planeMesh.scale.set( 1, 1, 1 );
		this.planeMesh.rotation.x = - 90 * Math.PI / 180;
		this.planeMesh.matrixAutoUpdate = false;
		this.planeMesh.updateMatrix();

		scene.add(this.planeMesh);
	}
	
	for (var i = 1; i <= 6; i++)
	{
		this.z += 200;
		
		this.PathArray.push(new THREE.Vector3(this.x, 0, this.z));
		
		this.material = new THREE.MeshBasicMaterial ( { color: 0x999999, wireframe: false } );
		this.geometry = new THREE.PlaneGeometry ( PLANE_HEIGHT/PLANE_S_H_W, PLANE_HEIGHT/PLANE_S_H_W, 5, 5 );
		this.planeMesh = new THREE.Mesh ( this.geometry, this.material );
		this.planeMesh.meshType = "Map";
		this.planeMesh.position.set( this.x, 0, this.z );
		this.planeMesh.scale.set( 1, 1, 1 );
		this.planeMesh.rotation.x = - 90 * Math.PI / 180;
		this.planeMesh.matrixAutoUpdate = false;
		this.planeMesh.updateMatrix();

		scene.add(this.planeMesh);
	}
	
	for (var i = 1; i <= 13	; i ++)
	{
		this.x += 200;
		
		this.PathArray.push(new THREE.Vector3(this.x, 0, this.z));
		
		this.material = new THREE.MeshBasicMaterial ( { color: 0x999999, wireframe: false } );
		this.geometry = new THREE.PlaneGeometry ( PLANE_HEIGHT/PLANE_S_H_W, PLANE_HEIGHT/PLANE_S_H_W, 5, 5 );
		this.planeMesh = new THREE.Mesh ( this.geometry, this.material );
		this.planeMesh.meshType = "Map";
		this.planeMesh.position.set( this.x, 0, this.z );
		this.planeMesh.scale.set( 1, 1, 1 );
		this.planeMesh.rotation.x = - 90 * Math.PI / 180;
		this.planeMesh.matrixAutoUpdate = false;
		this.planeMesh.updateMatrix();

		scene.add(this.planeMesh);
	}
	
	for (var i = 1; i <= 21; i++)
	{
		this.z += -200;
		
		
		
		this.PathArray.push(new THREE.Vector3(this.x, 0, this.z));
		
		this.material = new THREE.MeshBasicMaterial ( { color: 0x999999, wireframe: false } );
		this.geometry = new THREE.PlaneGeometry ( PLANE_HEIGHT/PLANE_S_H_W, PLANE_HEIGHT/PLANE_S_H_W, 5, 5 );
		this.planeMesh = new THREE.Mesh ( this.geometry, this.material );
		this.planeMesh.meshType = "Map";
		this.planeMesh.position.set( this.x, 0, this.z );
		this.planeMesh.scale.set( 1, 1, 1 );
		this.planeMesh.rotation.x = - 90 * Math.PI / 180;
		this.planeMesh.matrixAutoUpdate = false;
		this.planeMesh.updateMatrix();

		scene.add(this.planeMesh);
	}
}

Map.checkPath = function (x, z) {
	for (var i in this.PathArray)
	{
		if (this.PathArray[i].x == x && this.PathArray[i].z == z)
		{
			return true;
		}
	}
	return false;
}