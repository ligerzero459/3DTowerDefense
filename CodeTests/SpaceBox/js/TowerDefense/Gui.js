var Gui = Gui || {};

Gui.initialize = function() {
	// Create Score/Cash Box
	this.createDiv("TL", "score", 325, 50, 10, 10, "gui"); // Background to score box
	$("#score").css("background-color", "#000000");
	$("#score").css("border-radius", "3px");
	$("#score").css("border", "2px solid white");
	
	this.createDiv("TL", "scoreDisplay", 325, 50, 4, 0, "score");
	$("#scoreDisplay").html("<div>Score: " + Score.getScore() + " Cash: $" + Score.getCash() + "<br>Time to deep freeze: " + Score.getHealth() + "</div>");
	$("#scoreDisplay").css("text-align", "center");
	$("#scoreDisplay").css("font-size", "16px");
	
	// Pause/Unpause
	this.createDiv("BL", "pauseBox", 60, 25, 60, 15, "gui");	// Background for pause box
	$("#pauseBox").css("background-color", "#000000");
	$("#pauseBox").css("border-radius", "3px");
	$("#pauseBox").css("border", "2px solid white");
	
	this.createDiv("TL", "pauseText", 60, 25, 0, 0, "pauseBox");
	$("#pauseText").text("Pause");
	$("#pauseText").css("text-align", "center");
	$("#pauseText").css("font-size", "16px");
	
	// Create Tower Selection Box
	this.createDiv("TR", "towerBox", 270, 524, 10, 10, "gui");
	$("#towerBox").css("background-color", "#ffffff");
	$("#towerBox").css("border-radius", "3px");
	$("#towerBox").css("border", "2px solid black");
	
	for (var i in Tower.towerType)
	{
		var top = 10 + (i * 56);
		this.createDiv("TL", Tower.towerType[i].type, 250, 50, top, 8, "towerBox");
		
		var towerID = Tower.towerType[i].type;
		var towerPic = towerID + "Pic";
		var towerInfo = towerID + "Info";
		
		$("#" + towerID).css("background-color", "#7A7A7A");
		$("#" + towerID).css("border-radius", "2px");
		$("#" + towerID).css("border", "1px solid black");
		$("#" + towerID).css("opacity", "0.4");
		
		this.createDiv("TL", towerPic, 40, 40, 5, 10, towerID);
		$("#" + towerPic).css("background-color", "#ffffff");
		
		this.createDiv("TL", towerInfo, 180, 40, 5, 60, towerID);
		$("#" + towerInfo).css("color", "#ffffff");
		
		var towerHTML = "<div style='position: absolute; top: 0; left: 0;'>" + Tower.towerType[i].type + " Price: $" + Tower.towerType[i].price + "<br>Power: " + Tower.towerType[i].damage + " Range: " + Tower.towerType[i].range + "</div>";
		$("#" + towerInfo).html(towerHTML);
	}
	
	// GameOver Box
	this.createDiv("TL", "GameOver", 256,  128, (SCREEN_HEIGHT/2 - 128), (SCREEN_WIDTH/2 - 128), "gui");
	$("#GameOver").css("background-color", "#000000");
	$("#GameOver").css("border", "2px solid white");
	$("#GameOver").css("border-radius", "4px");
	
	this.createDiv("TL", "GameOverText", 256, 32, 15, 0, "GameOver");
	$("#GameOverText").text("Game Over");
	$("#GameOverText").css("text-align", "center");
	$("#GameOverText").css("font-size", "24px");
	
	this.createDiv("TL", "GameOverButtonShadow", 155, 50, 62, 57, "GameOver");
	$("#GameOverButtonShadow").css("background-color", "#363636");
	$("#GameOverButtonShadow").css("border-radius", "4px");
	$("#GameOverButtonShadow").click(function(e) {
		Gui.gameOver();
	});

	this.createDiv("TL", "GameOverButton", 155, 50, 55, 50, "GameOver");
	$("#GameOverButton").css("background-color", "#7A7A7A");
	$("#GameOverButton").css("border", "2px solid white");
	$("#GameOverButton").css("border-radius", "4px");
	$("#GameOverButton").click(function(e) {
		Gui.gameOver();
	});
	
	this.createDiv("TL", "GameOverBText", 155, 32, 15, 3, "GameOverButton");
	$("#GameOverBText").text("Try Again?");
	$("#GameOverBText").css("text-align", "center");
	$("#GameOverBText").css("font-size", "16px");
	$("#GameOverBText").click(function(e) {
		Gui.gameOver();
	});
	
	Gui.hide();
	
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
	$("#pauseBox").css("display", "block");
}

Gui.hide = function() {
	$("#score").css("display", "none");
	$("#towerBox").css("display", "none");
	$("#pauseBox").css("display", "none");
	$("#GameOver").css("display", "none");
}

Gui.gameOver = function() {
	$("#GameOver").css("display", "none");
	Gui.restartGame();
	setTimeout("Gui.startGame()", 3000);
}

Gui.restartGame = function() {
	Gui.hide();
	gameOn = false;
	firstStart = false;
	
	Tower.restartGame();
	Bullet.restartGame();
	Creep.restartGame();
	Score.restartGame();
}

Gui.startGame = function() {
	Gui.display();
	setTimeout("Creep.runLevel()", 10000);
	
	Tower.activate("Tower");
	
	gameOn = true;
	firstStart = true;
	$("#pauseBox").click(function(e) {
		e.preventDefault();
		pauseGame();
	});
}