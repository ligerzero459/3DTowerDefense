var Score = Score || {};

Score.initialize = function () {
    this.myScore = 0;
	this.myCash = 0;
}
  
Score.setScore = function (score, cash) {
	this.myCash += cash;
    this.myScore += score;
	$("#scoreDisplay").html("<div>Score: " + Score.getScore() + " Cash: $" + Score.getCash() + "</div>");
	Score.towerCheck();
}
  
Score.getScore = function () {
    return this.myScore;
}

Score.getCash = function () {
	return this.myCash;
}
  
Score.towerCheck = function () {
	Tower.activate("Ultimate");
	Tower.activate("Rapid");
	Tower.activate("Fire");
	Tower.activate("Splash");
	Tower.activate("Sniper");
	Tower.activate("Poison");
	Tower.activate("Laser");
	Tower.activate("Slow");
	
	/*if (this.myScore >= 500) {
		Tower.activate("Ultimate");
	}
	else if (this.myScore >= 400) {
		Tower.activate("Rapid");
	}
	else if (this.myScore >= 300) {
		Tower.activate("Fire");
	}
	else if (this.myScore >= 250) {
		Tower.activate("Splash");
		}
	else if (this.myScore >= 200) {
		Tower.activate("Sniper");
		}
	else if (this.myScore >= 150) {
		Tower.activate("Poison");
		}
	else if (this.myScore >= 100) {
		Tower.activate("Laser");
		}
	else if (this.myScore >= 50) {
		Tower.activate("Slow");
		}*/
}

Score.buyTower = function(towerPrice) {
	this.myCash -= towerPrice;
	$("#scoreDisplay").html("<div>Score: " + Score.getScore() + " Cash: $" + Score.getCash() + "</div>");
}

Score.restartGame = function () {
	Score.initialize();
	$("#scoreDisplay").html("<div>Score: " + Score.getScore() + " Cash: $" + Score.getCash() + "</div>");
}