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