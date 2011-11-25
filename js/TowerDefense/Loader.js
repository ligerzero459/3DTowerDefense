/*

Copyright © 2011 by Jacob Bovatsek

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

/**
* @name LOADER
* @author Jacob Bovatsek / http://jbovatsek.com
* @description implements loading geometries and textures to arrays, checking load status, and accessing loaded objects
*/

var Loader = Loader || {};

Loader.init = function() {
    this.count = 0;
    this.textures = [];
    this.tiles = []
    this.models = [];
    this.loader = new THREE.JSONLoader( false );
}

Loader.loadTexture = function(identifier, url) {
    var callbackLoadTexture = function() {
        Loader.count++;
    }
    var index = this.textures.length;

    this.textures.push({});
    this.textures[index].identifier = identifier;

    if(url instanceof Array){
        this.textures[index].texture = THREE.ImageUtils.loadTextureCube(url, null, callbackLoadTexture);
        this.count -= 5; //Ugly fix for texturecube calling callback 6 times
    } else {
        this.textures[index].texture = THREE.ImageUtils.loadTexture(url, null, callbackLoadTexture);
    }
}

Loader.getTexture = function(identifier) {
    for(var i = 0; i < this.textures.length; i++){
        if(this.textures[i].identifier == identifier)
            return this.textures[i].texture;
    }
    console.log("Loader: Texture "+identifier+" not found!");
    return false;
}

Loader.loadModel = function(identifier, url) {
  var callbackLoadModel = function( geometry) {
      var index = Loader.models.length;
      Loader.models.push({});
      Loader.models[index].identifier = identifier;
      Loader.models[index].geometry = geometry;
      Loader.count++;
  };
  this.loader.load( {
    model: url,
    callback: callbackLoadModel
  } );
}

Loader.getModel = function(identifier){
    for(var i = 0; i < this.models.length; i++){
        if(this.models[i].identifier == identifier)
            return this.models[i].geometry;
    }
    console.log("Loader: Model "+identifier+" not found!");
    return false;
}

Loader.loadTile = function(identifier, url) {
    var callbackLoadTile = function() {
        Loader.count++;
    }
    var index = this.tiles.length;

    this.tiles.push({});
    this.tiles[index].identifier = identifier;

    this.tiles[index].texture = THREE.ImageUtils.loadTexture(url, null, callbackLoadTile);
}

Loader.getTile = function(identifier) {
    for(var i = 0; i < this.tiles.length; i++){
        if(this.tiles[i].identifier == identifier)
            return this.tiles[i].texture;
    }
    console.log("Loader: Tile "+identifier+" not found!");
    return false;
}

Loader.checkLoad = function() {
    if(this.count == (this.textures.length + this.models.length + this.tiles.length))
        return true
    return false;
}