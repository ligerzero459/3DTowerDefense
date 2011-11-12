var Score = Score || {};

Score.initialize = function () {
    this.myScore = 0;
	this.myCash = 0;
}
  
Score.setScore = function (score, cash) {
	this.myCash +=;
    this.myScore += score;
	Score.towerCheck();
}
  
Score.getScore = function () {
    return this.myScore;
}

Score.getCash = function () {
	return this.myCash;
}
  
Score.towerCheck = function () {
		
	
	if (this.myScore >= 50) {
		Tower.activate("Slow");
	}
	else if (this.myScore >= 100) {
		Tower.activate("Laser");
	}
	else if (this.myScore >= 150) {
		Tower.activate("Poison");
	}
	else if (this.myScore >= 200) {
		Tower.activate("Sniper");
		}
	else if (this.myScore >= 250) {
		Tower.activate("Splash");
		}
	else if (this.myScore >= 300) {
		Tower.activate("Fire");
		}
	else if (this.myScore >= 400) {
		Tower.activate("Rapid");
		}
	else if (this.myScore >= 500) {
		Tower.activate("Ultimate");
		}
}




