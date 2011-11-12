var Map = Map || {};

Map.initialize = function (height, shw) {
	this.xPathArray = [];
	this.zPathArray = [];
	this.PLANE_HEIGHT = height;
	this.PLANE_S_H_W = shw;
	this.x = 100;
	this.z = 100;
}

Map.generate = function () {
	this.material = new THREE.MeshBasicMaterial ( { color: 0xffffff, wireframe: true, opacity: 0.1 } );
	this.geometry = new THREE.PlaneGeometry ( PLANE_HEIGHT, PLANE_WIDTH, PLANE_S_H_W, PLANE_S_H_W );
	this.baseMesh = new THREE.Mesh ( this.geometry, this.material );
	this.baseMesh.position.set( 0, 0, 0 );
	this.baseMesh.scale.set( 1, 1, 1 );
	this.baseMesh.rotation.x = - 90 * Math.PI / 180;
	
	THREE.GeometryUtils.merge(this.mergedGeo, this.baseMesh);
	
	for (var i = 1; i <= 20	; i ++)
	{
		this.x += 200;
		
		this.xPathArray.push(this.x);
		this.zPathArray.push(this.z);
		
		this.material = new THREE.MeshLambertMaterial ( { color: 0x999999, wireframe: false } );
		this.geometry = new THREE.PlaneGeometry ( PLANE_HEIGHT/PLANE_S_H_W, PLANE_HEIGHT/PLANE_S_H_W, 20, 20 );
		this.planeMesh = new THREE.Mesh ( this.geometry, this.material );
		this.planeMesh.position.set( this.x, 0, this.z );
		this.planeMesh.scale.set( 1, 1, 1 );
		this.planeMesh.rotation.x = - 90 * Math.PI / 180;
		THREE.GeometryUtils.merge(this.mergedGeo, this.planeMesh);
	}
	
	for (var i = 1; i <= 15; i++)
	{
		this.z += -200;
		
		this.xPathArray.push(this.x);
		this.zPathArray.push(this.z);
		
		this.material = new THREE.MeshLambertMaterial ( { color: 0x999999, wireframe: false } );
		this.geometry = new THREE.PlaneGeometry ( PLANE_HEIGHT/PLANE_S_H_W, PLANE_HEIGHT/PLANE_S_H_W, 20, 20 );
		this.planeMesh = new THREE.Mesh ( this.geometry, this.material );
		this.planeMesh.position.set( this.x, 0, this.z );
		this.planeMesh.scale.set( 1, 1, 1 );
		this.planeMesh.rotation.x = - 90 * Math.PI / 180;
		//scene.add( this.planeMesh );
		THREE.GeometryUtils.merge(this.mergedGeo, this.planeMesh);
	}
	
	for (var i = 1; i <= 5	; i ++)
	{
		this.x += -200;
		
		this.xPathArray.push(this.x);
		this.zPathArray.push(this.z);
		
		this.material = new THREE.MeshLambertMaterial ( { color: 0x999999, wireframe: false } );
		this.geometry = new THREE.PlaneGeometry ( PLANE_HEIGHT/PLANE_S_H_W, PLANE_HEIGHT/PLANE_S_H_W, 20, 20 );
		this.planeMesh = new THREE.Mesh ( this.geometry, this.material );
		this.planeMesh.position.set( this.x, 0, this.z );
		this.planeMesh.scale.set( 1, 1, 1 );
		this.planeMesh.rotation.x = - 90 * Math.PI / 180;
		//scene.add( this.planeMesh );
		THREE.GeometryUtils.merge(this.mergedGeo, this.planeMesh);
	}
	
	for (var i = 1; i <= 30; i++)
	{
		this.z += 200;
		
		this.xPathArray.push(this.x);
		this.zPathArray.push(this.z);
		
		this.material = new THREE.MeshLambertMaterial ( { color: 0x999999, wireframe: false } );
		this.geometry = new THREE.PlaneGeometry ( PLANE_HEIGHT/PLANE_S_H_W, PLANE_HEIGHT/PLANE_S_H_W, 20, 20 );
		this.planeMesh = new THREE.Mesh ( this.geometry, this.material );
		this.planeMesh.position.set( this.x, 0, this.z );
		this.planeMesh.scale.set( 1, 1, 1 );
		this.planeMesh.rotation.x = - 90 * Math.PI / 180;
		//scene.add( this.planeMesh );
		THREE.GeometryUtils.merge(this.mergedGeo, this.planeMesh);
	}
	
	for (var i = 1; i <= 25	; i ++)
	{
		this.x += -200;
		
		this.xPathArray.push(this.x);
		this.zPathArray.push(this.z);
		
		this.material = new THREE.MeshLambertMaterial ( { color: 0x999999, wireframe: false } );
		this.geometry = new THREE.PlaneGeometry ( PLANE_HEIGHT/PLANE_S_H_W, PLANE_HEIGHT/PLANE_S_H_W, 20, 20 );
		this.planeMesh = new THREE.Mesh ( this.geometry, this.material );
		this.planeMesh.position.set( this.x, 0, this.z );
		this.planeMesh.scale.set( 1, 1, 1 );
		this.planeMesh.rotation.x = - 90 * Math.PI / 180;
		//scene.add( this.planeMesh );
		THREE.GeometryUtils.merge(this.mergedGeo, this.planeMesh);
	}
	
	for (var i = 1; i <= 25; i++)
	{
		this.z += -200;
		
		this.xPathArray.push(this.x);
		this.zPathArray.push(this.z);
		
		this.material = new THREE.MeshLambertMaterial ( { color: 0x999999, wireframe: false } );
		this.geometry = new THREE.PlaneGeometry ( PLANE_HEIGHT/PLANE_S_H_W, PLANE_HEIGHT/PLANE_S_H_W, 20, 20 );
		this.planeMesh = new THREE.Mesh ( this.geometry, this.material );
		this.planeMesh.position.set( this.x, 0, this.z );
		this.planeMesh.scale.set( 1, 1, 1 );
		this.planeMesh.rotation.x = - 90 * Math.PI / 180;
		//scene.add( this.planeMesh );
		THREE.GeometryUtils.merge(this.mergedGeo, this.planeMesh);
	}
	
	for (var i = 1; i <= 10	; i ++)
	{
		this.x += -200;
		
		this.xPathArray.push(this.x);
		this.zPathArray.push(this.z);
		
		this.material = new THREE.MeshLambertMaterial ( { color: 0x999999, wireframe: false } );
		this.geometry = new THREE.PlaneGeometry ( PLANE_HEIGHT/PLANE_S_H_W, PLANE_HEIGHT/PLANE_S_H_W, 20, 20 );
		this.planeMesh = new THREE.Mesh ( this.geometry, this.material );
		this.planeMesh.position.set( this.x, 0, this.z );
		this.planeMesh.scale.set( 1, 1, 1 );
		this.planeMesh.rotation.x = - 90 * Math.PI / 180;
		//scene.add( this.planeMesh );
		THREE.GeometryUtils.merge(this.mergedGeo, this.planeMesh);
	}
	
	for (var i = 1; i <= 6; i++)
	{
		this.z += 200;
		
		this.xPathArray.push(this.x);
		this.zPathArray.push(this.z);
		
		this.material = new THREE.MeshLambertMaterial ( { color: 0x999999, wireframe: false } );
		this.geometry = new THREE.PlaneGeometry ( PLANE_HEIGHT/PLANE_S_H_W, PLANE_HEIGHT/PLANE_S_H_W, 20, 20 );
		this.planeMesh = new THREE.Mesh ( this.geometry, this.material );
		this.planeMesh.position.set( this.x, 0, this.z );
		this.planeMesh.scale.set( 1, 1, 1 );
		this.planeMesh.rotation.x = - 90 * Math.PI / 180;
		//scene.add( this.planeMesh );
		THREE.GeometryUtils.merge(this.mergedGeo, this.planeMesh);
	}
	
	for (var i = 1; i <= 13	; i ++)
	{
		this.x += 200;
		
		this.xPathArray.push(this.x);
		this.zPathArray.push(this.z);
		
		this.material = new THREE.MeshLambertMaterial ( { color: 0x999999, wireframe: false } );
		this.geometry = new THREE.PlaneGeometry ( PLANE_HEIGHT/PLANE_S_H_W, PLANE_HEIGHT/PLANE_S_H_W, 20, 20 );
		this.planeMesh = new THREE.Mesh ( this.geometry, this.material );
		this.planeMesh.position.set( this.x, 0, this.z );
		this.planeMesh.scale.set( 1, 1, 1 );
		this.planeMesh.rotation.x = - 90 * Math.PI / 180;
		//scene.add( this.planeMesh );
		THREE.GeometryUtils.merge(this.mergedGeo, this.planeMesh);
	}
	
	for (var i = 1; i <= 21; i++)
	{
		this.z += -200;
		
		this.xPathArray.push(this.x);
		this.zPathArray.push(this.z);
		
		this.material = new THREE.MeshLambertMaterial ( { color: 0x999999, wireframe: false } );
		this.geometry = new THREE.PlaneGeometry ( PLANE_HEIGHT/PLANE_S_H_W, PLANE_HEIGHT/PLANE_S_H_W, 20, 20 );
		this.planeMesh = new THREE.Mesh ( this.geometry, this.material );
		this.planeMesh.position.set( this.x, 0, this.z );
		this.planeMesh.scale.set( 1, 1, 1 );
		this.planeMesh.rotation.x = - 90 * Math.PI / 180;
		//scene.add( this.planeMesh );
		THREE.GeometryUtils.merge(this.mergedGeo, this.planeMesh);
	}
	this.mergedGeo.computeFaceNormals();
	this.material = new THREE.MeshNormalMaterial();
	this.group = new THREE.Mesh ( this.mergedGeo, this.material );
	scene.add( this.group );
};