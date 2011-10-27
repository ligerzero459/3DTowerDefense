var Creep = Creep || {};

Creep.initialize = function () {
	var health;
	
	this.health = health;
	this.x = xPathArray[xLength];
	this.y = yPathArray[yLength];
	
	this.load();
}

Creep.load = function () {
	
	this.material = new THREE.MeshLambertMaterial ( { color: 0x00FFFF } );
	this.geometry = new THREE.SphereGeometry( 100, 20, 20 );
	this.geometry.computeTangents();
	this.mesh = new THREE.Mesh ( geometry, material );
	this.mesh.position.set( this.x, this.y, 0 );
	scene.add( this.mesh );
}