var Creep = Creep || {};

Creep.initialize = function () {
	var health;
	
	this.health = health;
	this.x = xPathArray[xLength];
	this.y = yPathArray[yLength];
	
	this.load();
}

Creep.load = function () {
	var material, geometry, mesh;
	
	material = new THREE.MeshLambertMaterial ( { color: 0x00FFFF } );
	geometry = new THREE.SphereGeometry( 100, 20, 20 );
	geometry.computeTangents();
	mesh = new THREE.Mesh ( geometry, material );
	mesh.position.set( this.x, this.y, 0 );
	
	scene.add( mesh );
	this.mesh = mesh;
}