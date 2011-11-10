var Score = Score || {};

Score.TestBox = function ()
{
  alert("It Works");
}

Score.initialize = function ()
{
    //constructor
    this.myScore = 0;
}
  
Score.setScore = function (hit)
{
    //Increase score by 10?
    if (hit == true)
    {
      this.myScore += 10;
    }
}
  
Score.getScore = function ()
{
    //Return score
    return this.myScore;
}
  
Score.towerCheck = function ()
{
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




