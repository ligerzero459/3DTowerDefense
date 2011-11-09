var Map = Map || {};

Map.initialize = function (height, shw) {
	this.xPathArray = [];
	this.yPathArray = [];
	this.PLANE_HEIGHT = height;
	this.PLANE_S_H_W = shw;
	this.x = 100;
	this.y = 100;
}

Map.generate = function () {
	for (var i = 1; i <= 20	; i ++)
	{
		this.x += 200;
		
		this.xPathArray.push(this.x);
		this.yPathArray.push(this.y);
		
		this.material = new THREE.MeshLambertMaterial ( { color: 0x999999, wireframe: false } );
		this.geometry = new THREE.PlaneGeometry ( PLANE_HEIGHT/PLANE_S_H_W, PLANE_HEIGHT/PLANE_S_H_W, 20, 20 );
		this.planeMesh = new THREE.Mesh ( this.geometry, this.material );
		this.planeMesh.position.set( this.x, this.y, 0 );
		this.planeMesh.scale.set( 1, 1, 1 );
		scene.add( this.planeMesh );
	}
	
	for (var i = 1; i <= 15; i++)
	{
		this.y += 200;
		
		this.xPathArray.push(this.x);
		this.yPathArray.push(this.y);
		
		this.material = new THREE.MeshLambertMaterial ( { color: 0x999999, wireframe: false } );
		this.geometry = new THREE.PlaneGeometry ( PLANE_HEIGHT/PLANE_S_H_W, PLANE_HEIGHT/PLANE_S_H_W, 20, 20 );
		this.planeMesh = new THREE.Mesh ( this.geometry, this.material );
		this.planeMesh.position.set( this.x, this.y, 0 );
		this.planeMesh.scale.set( 1, 1, 1 );
		scene.add( this.planeMesh );
	}
	
	for (var i = 1; i <= 5	; i ++)
	{
		this.x -= 200;
		
		this.xPathArray.push(this.x);
		this.yPathArray.push(this.y);
		
		this.material = new THREE.MeshLambertMaterial ( { color: 0x999999, wireframe: false } );
		this.geometry = new THREE.PlaneGeometry ( PLANE_HEIGHT/PLANE_S_H_W, PLANE_HEIGHT/PLANE_S_H_W, 20, 20 );
		this.planeMesh = new THREE.Mesh ( this.geometry, this.material );
		this.planeMesh.position.set( this.x, this.y, 0 );
		this.planeMesh.scale.set( 1, 1, 1 );
		scene.add( this.planeMesh );
	}
	
	for (var i = 1; i <= 30; i++)
	{
		this.y -= 200;
		
		this.xPathArray.push(this.x);
		this.yPathArray.push(this.y);
		
		this.material = new THREE.MeshLambertMaterial ( { color: 0x999999, wireframe: false } );
		this.geometry = new THREE.PlaneGeometry ( PLANE_HEIGHT/PLANE_S_H_W, PLANE_HEIGHT/PLANE_S_H_W, 20, 20 );
		this.planeMesh = new THREE.Mesh ( this.geometry, this.material );
		this.planeMesh.position.set( this.x, this.y, 0 );
		this.planeMesh.scale.set( 1, 1, 1 );
		scene.add( this.planeMesh );
	}
	
	for (var i = 1; i <= 25	; i ++)
	{
		this.x -= 200;
		
		this.xPathArray.push(this.x);
		this.yPathArray.push(this.y);
		
		this.material = new THREE.MeshLambertMaterial ( { color: 0x999999, wireframe: false } );
		this.geometry = new THREE.PlaneGeometry ( PLANE_HEIGHT/PLANE_S_H_W, PLANE_HEIGHT/PLANE_S_H_W, 20, 20 );
		this.planeMesh = new THREE.Mesh ( this.geometry, this.material );
		this.planeMesh.position.set( this.x, this.y, 0 );
		this.planeMesh.scale.set( 1, 1, 1 );
		scene.add( this.planeMesh );
	}
	
	for (var i = 1; i <= 25; i++)
	{
		this.y += 200;
		
		this.xPathArray.push(this.x);
		this.yPathArray.push(this.y);
		
		this.material = new THREE.MeshLambertMaterial ( { color: 0x999999, wireframe: false } );
		this.geometry = new THREE.PlaneGeometry ( PLANE_HEIGHT/PLANE_S_H_W, PLANE_HEIGHT/PLANE_S_H_W, 20, 20 );
		this.planeMesh = new THREE.Mesh ( this.geometry, this.material );
		this.planeMesh.position.set( this.x, this.y, 0 );
		this.planeMesh.scale.set( 1, 1, 1 );
		scene.add( this.planeMesh );
	}
	
	for (var i = 1; i <= 10	; i ++)
	{
		this.x -= 200;
		
		this.xPathArray.push(this.x);
		this.yPathArray.push(this.y);
		
		this.material = new THREE.MeshLambertMaterial ( { color: 0x999999, wireframe: false } );
		this.geometry = new THREE.PlaneGeometry ( PLANE_HEIGHT/PLANE_S_H_W, PLANE_HEIGHT/PLANE_S_H_W, 20, 20 );
		this.planeMesh = new THREE.Mesh ( this.geometry, this.material );
		this.planeMesh.position.set( this.x, this.y, 0 );
		this.planeMesh.scale.set( 1, 1, 1 );
		scene.add( this.planeMesh );
	}
	
	for (var i = 1; i <= 6; i++)
	{
		this.y -= 200;
		
		this.xPathArray.push(this.x);
		this.yPathArray.push(this.y);
		
		this.material = new THREE.MeshLambertMaterial ( { color: 0x999999, wireframe: false } );
		this.geometry = new THREE.PlaneGeometry ( PLANE_HEIGHT/PLANE_S_H_W, PLANE_HEIGHT/PLANE_S_H_W, 20, 20 );
		this.planeMesh = new THREE.Mesh ( this.geometry, this.material );
		this.planeMesh.position.set( this.x, this.y, 0 );
		this.planeMesh.scale.set( 1, 1, 1 );
		scene.add( this.planeMesh );
	}
	
	for (var i = 1; i <= 13	; i ++)
	{
		this.x += 200;
		
		this.xPathArray.push(this.x);
		this.yPathArray.push(this.y);
		
		this.material = new THREE.MeshLambertMaterial ( { color: 0x999999, wireframe: false } );
		this.geometry = new THREE.PlaneGeometry ( PLANE_HEIGHT/PLANE_S_H_W, PLANE_HEIGHT/PLANE_S_H_W, 20, 20 );
		this.planeMesh = new THREE.Mesh ( this.geometry, this.material );
		this.planeMesh.position.set( this.x, this.y, 0 );
		this.planeMesh.scale.set( 1, 1, 1 );
		scene.add( this.planeMesh );
	}
	
	for (var i = 1; i <= 20; i++)
	{
		this.y += 200;
		
		this.xPathArray.push(this.x);
		this.yPathArray.push(this.y);
		
		this.material = new THREE.MeshLambertMaterial ( { color: 0x999999, wireframe: false } );
		this.geometry = new THREE.PlaneGeometry ( PLANE_HEIGHT/PLANE_S_H_W, PLANE_HEIGHT/PLANE_S_H_W, 20, 20 );
		this.planeMesh = new THREE.Mesh ( this.geometry, this.material );
		this.planeMesh.position.set( this.x, this.y, 0 );
		this.planeMesh.scale.set( 1, 1, 1 );
		scene.add( this.planeMesh );
	}
};