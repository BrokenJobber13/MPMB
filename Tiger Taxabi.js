var iFileName = "Tiger Taxabi.js";
RequiredSheetVersion(12.999); 

RaceList["tiger taxabi"] = { 
	regExpSearch : /^(?=.*tiger)(?=.*taxabi).*$/i, 
	name : "Tiger Taxabi", 
	sortname : "Taxabi Tiger", 
	source : ["HB", 0], 
	plural : "Tiger Taxabi's", 
	size : 3, 
	speed : { 
		walk : { spd : 35, enc : 25 }, 
		},

	languageProfs : ["Common", 1], 
	weapons : ["talons"], //o
	addarmor : "Natural Armor", //o
	vision : ["Darkvision", 60], 
	
	skills : ["Athletics"], 
	
	age : " reach adulthood in their late teens and live around 100 years", 
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")", 
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)", 
	improvements : "Something Catlike: +1 Charisma, +2 Strength;", 
	scores : [2, 0, 0, 0, 0, 1], 
	trait : "Something Catlike (+1 Charisma, +2 Strength)\n  ",  //R
	

	features : { 
		"pounce" : { 
			name : "Pounce", 
			minlevel : 1, 
			usages : 1, 
			recovery : "short rest", 
			tooltip : " (Taxabi Legacy)", 
			action : ["action", ""], 
			},
 
	}

};
