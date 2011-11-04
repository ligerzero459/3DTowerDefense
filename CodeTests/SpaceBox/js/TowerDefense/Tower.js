var Tower = Tower || {};

Tower.initialize = function () {
	this.towers = [];
	this.towerType = [{"type": "Tower", "color": 0xFFFF00, "geometry": "new THREE.CubeGeometry(80, 80, 80, 10, 10, 10)", "damage": 5, "firespeed": 10, "range": 3}, {"type": "Sniper", "color": 0x00CC00, "geometry": "new THREE.CubeGeometry(80, 80, 80, 10, 10, 10)", "damage": 15, "firespeed": 2, "range": 10}];
	this.towerIndex = {"Tower": 0, "Sniper": 1};
	this.towerFired = [];
}

Tower.create = function( x, y ) {
	this.material = new THREE.MeshLambertMaterial ( { color: 0xFFFF00 } );
	this.geometry = new THREE.CubeGeometry( 80, 80, 80, 10, 10, 10 );
	this.mesh = new THREE.Mesh ( this.geometry, this.material );
	this.mesh.position.set( x, y, 100 );
	this.mesh.charge = 100;
	this.mesh.firespeed = 10;
	this.mesh.damage = 5;
	this.mesh.range = 3;
	this.towers.push( this.mesh );
	this.towerFired.push ( false );
	
	scene.add( this.mesh );
}

Tower.update = function() {
	for (var i in this.towers)
	{
		// Check if any targets are in range
		var targets = Tower.creepsInRange(i);
		
		// If there are targets in range, select the one furthest along the track
		if (targets != null)
		{
			var target = targets[0];
		}
	}
}

Tower.creepsInRange = function(i) {
	var inRange = [];
	
	for (var j in Creep.creeps)
	{
		var xDistance = Creep.creeps[j].position.x - this.towers[i].position.x;
		var yDistance = Creep.creeps[j].position.y - this.towers[i].position.y;
		var Distance = Math.sqrt(Math.pow( xDistance, 2 ) + Math.pow( yDistance, 2 ));
		
		if ( Distance <= ( 200 * this.towers[i].range ) )
		{
			inRange.push( Creep.creeps[j] );
		}
	}
	
	return inRange;
}

Tower.hit = function(target) {

}