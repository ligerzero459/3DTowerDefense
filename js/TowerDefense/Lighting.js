var Lighting = Lighting || {};

Lighting.initialize = function () {
	/*this.ambientLight = new THREE.AmbientLight( 0xffffff );
	scene.add( this.ambientLight );*/
	
	/*// Center Light
	this.pointLight = new THREE.PointLight ( 0xffffff, 5, 10000 );
	this.pointLight.position.x = 0;
	this.pointLight.position.y = 0;
	this.pointLight.position.z = 0;
	scene.add( this.pointLight );*/
	
	// Top Right Up
	this.pointLight = new THREE.PointLight ( 0xffffff, 5, 10000 );
	this.pointLight.position.x = 5000;
	this.pointLight.position.y = 5000;
	this.pointLight.position.z = 5000;
	scene.add( this.pointLight );
	
	// Bottom Left Up
	this.pointLight = new THREE.PointLight ( 0xffffff, 5, 10000 );
	this.pointLight.position.x = -5000;
	this.pointLight.position.y = 5000;
	this.pointLight.position.z = -5000;
	scene.add( this.pointLight );
	
	// Top Left Up
	this.pointLight = new THREE.PointLight ( 0xffffff, 5, 10000 );
	this.pointLight.position.x = -5000;
	this.pointLight.position.y = 5000;
	this.pointLight.position.z = 5000;
	scene.add( this.pointLight );
	
	// Bottom Right Up
	this.pointLight = new THREE.PointLight ( 0xffffff, 5, 10000 );
	this.pointLight.position.x = 5000;
	this.pointLight.position.y = 5000;
	this.pointLight.position.z = -5000;
	scene.add( this.pointLight );
	
	// Top Right Down
	this.pointLight = new THREE.PointLight ( 0xffffff, 5, 10000 );
	this.pointLight.position.x = 5000;
	this.pointLight.position.y = 0;
	this.pointLight.position.z = 5000;
	scene.add( this.pointLight );
	
	// Bottom Left Down
	this.pointLight = new THREE.PointLight ( 0xffffff, 5, 10000 );
	this.pointLight.position.x = -5000;
	this.pointLight.position.y = 0;
	this.pointLight.position.z = -5000;
	scene.add( this.pointLight );
	
	// Top Left Down
	this.pointLight = new THREE.PointLight ( 0xffffff, 5, 10000 );
	this.pointLight.position.x = -5000;
	this.pointLight.position.y = 0;
	this.pointLight.position.z = 5000;
	scene.add( this.pointLight );
	
	// Bottom Right Down
	this.pointLight = new THREE.PointLight ( 0xffffff, 5, 10000 );
	this.pointLight.position.x = 5000;
	this.pointLight.position.y = 0;
	this.pointLight.position.z = -5000;
	scene.add( this.pointLight );
}