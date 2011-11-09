var Gui = Gui || {};

Gui.initialize = function() {
	// Create Score/Cash Box
	this.createDiv("TL", "score", 170, 32, 10, 10, "gui"); //Background to score box
	$("#score").css("background-color", "#000000");
	$("#score").css("border-radius", "3px");
	$("#score").css("border", "2px solid white");
	
	this.createDiv("TL", "scoreDisplay", 170, 32, 0, 0, "score");
	$("#scoreDisplay").text("Score: 0  Cash: $0");
	$("#scoreDisplay").css("text-align", "center");
	$("#scoreDisplay").css("font-size", "16px");
	
	// Create Tower Selection Box
	this.createDiv("TR", "towerBox", 270, 460, 10, 10, "gui");
	$("#towerBox").css("background-color", "#ffffff");
	$("#towerBox").css("border-radius", "3px");
	$("#towerBox").css("border", "2px solid black");
	
	for (var i in Tower.towers)
	{
		var top = 10 + (i * 80);
		this.createDiv("TL", Tower.towers[i].towerType, 250, 70, top, 8, "towerBox");
		
		var towerID = "#" + Tower.towers[i].towerType;
		$(towerID).css("background-color", "#7A7A7A");
		$(towerID).css("border-radius", "3px");
		$(towerID).css("border", "2px solid black");
		
		this.createDiv("TL", towerID + "pic", 40, 40, 15, 10, towerID);
		$(towerID + "pic").css("background-color", "#ffffff");
		
		this.createDiv("TL", towerID + "info", 180, 60, 5, 60, towerID);
		$(towerID + "info").css("background-color", "#ffffff");
	}
	
	Gui.display();
}

Gui.createDiv = function(type, id, width, height, p1, p2, appendTo) {
	var appendToElement = document.getElementById(appendTo);
	var newdiv = document.createElement('div');
    newdiv.setAttribute('id', id);
    if(width > 0)
        newdiv.style.width = width;
    if(height > 0)
        newdiv.style.height = height;
    newdiv.style.position = "absolute";
    switch(type){
        case "TL":
            newdiv.style.top = p1;
            newdiv.style.left = p2;
            break;
        case "TR":
            newdiv.style.top = p1;
            newdiv.style.right = p2;
            break;
        case "BL":
            newdiv.style.bottom = p1;
            newdiv.style.left = p2;
            break;
        case "BR":
            newdiv.style.bottom = p1;
            newdiv.style.right = p2;
            break;
    }
    appendToElement.appendChild(newdiv);
}

Gui.display = function() {
	$("#score").css("display", "block");
	$("#towerBox").css("display", "block");
}