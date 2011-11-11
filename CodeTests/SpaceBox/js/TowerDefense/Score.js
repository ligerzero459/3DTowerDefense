var Score = Score || {};

Score.initialize = function () {
    this.myScore = 0;
	this.myCash = 0;
}
  
Score.setScore = function () {
    this.myScore += 10;
	this.myCash += 100;
	Score.towerCheck();
}
  
Score.getScore = function () {
    return this.myScore;
}

Score.getCash = function () {
	return this.myCash;
}
  
Score.towerCheck = function () {
    switch(this.myScore)
	{
	case 10: //Venus
		Tower.activate("Rapid");
		break;
	case 20: //Mars
		Tower.activate("Fire");
		break;
	case 30: //Jupiter
		Tower.activate("Splash");
		break;
	case 40: //Saturn
		Tower.activate("Sniper");
		break;	
	case 50: //Uranus
		Tower.activate("Poison");
		break;
	case 60: //Neptune
		Tower.activate("Laser");
		break;
	case 70: //Pluto
		Tower.activate("Slow");
		break;	
	case 80: //Mercury
		Tower.activate("Ultimate");
		break;	
	default:  //Earth
		break;
	}
}




