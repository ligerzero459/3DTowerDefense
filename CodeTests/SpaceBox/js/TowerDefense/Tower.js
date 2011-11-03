var Tower = Tower || {};

Tower.initialize = function () {
	this.towers = [];
	this.towerType = [{"type": "Tower", "color": 0xFFFF00, "geometry": "new THREE.CubeGeometry(80, 80, 80, 10, 10, 10)", "damage": 5, "firespeed": 10, "range": 3}, {"type": "Sniper", "color": 0x00CC00, "geometry": "new THREE.CubeGeometry(80, 80, 80, 10, 10, 10)", "damage": 15, "firespeed": 2, "range": 10}];
	this.towerIndex = {"Tower": 0, "Sniper": 1};
}
