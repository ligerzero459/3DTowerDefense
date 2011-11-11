var Score = Score || {};

Score.initialize = function () {
    this.myScore = 0;
	this.myCash = 0;
}
  
Score.setScore = function () {
    this.myScore += 10;
	this.myCash += 100;
}
  
Score.getScore = function () {
    return this.myScore;
}

Score.getCash = function () {
	return this.myCash;
}
  
Score.towerCheck = function () {
    switch(this.myscore)
	{
	case 800: //Mercury
		Tower.activate("Ultimate");
		break;
	case 700: //Pluto
		Tower.activate("Slow");
		break;
	case 600: //Neptune
		Tower.activate("Laser");
		break;
	case 500: //Uranus
		Tower.activate("Poison");
		break;
	case 400: //Saturn
		Tower.activate("Sniper");
		break;
	case 300: //Jupiter
		Tower.activate("Splash");
		break;
	case 200: //Mars
		Tower.activate("Fire");
		break;
	case 100: //Venus
		Tower.activate("Rapid");
		break;
	default:  //Earth
		break;
	}
}




