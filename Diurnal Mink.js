var iFileName = "Diurnal Mink.js";
RequiredSheetVersion(12.999); 

RaceList["diurnal mink"] = { 
	regExpSearch : /^(?=.*diurnal)(?=.*mink).*$/i, 
	name : "Diurnal Mink",
	sortname : "Mink",
	source : ["HB", 0], 
	plural : "Mink's", 
	size : 3, 
	speed : { 
		walk : { spd : 35, enc : 25 }, 
		},
	toolProfs : [["Woodcarver's tools", "Int"]], 
	languageProfs : ["Common", 1], 
	vision : [["Darkvision", 60]], 
	skillstxt : "Choose any two skills",  
	age : " reach adulthood in their late teens and live around 100 years", 
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")", 
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)", 
	improvements : "Diurnal Mink: +2 Dexterity, +1 Intelligence;", 
	scores : [0, 2, 0, 1, 0, 0],
	trait : "Diurnal Mink (+2 Dexterity, +1 Intelligence)\nElectrro\nAs Part of my Action, I can produce my own electricity and channel it into my strikes giving an extra 1d6 Lightning damage.\nInnner Beast\nAs a Bonus Action I can increase my Strength and Speed, +10ft and +3 to hit/damage. Electro Unlimited times. Lasts for 1 minute and after I take one lvl of exhaustion.  ", 

	features : { 
		"eletro" : { 
			name : "Electro", 
			minlevel : 1, 
			usages : 3, 
			recovery : "short rest", 
			tooltip : " (Mink Heritage)", 
			action : ["action", ""], 
			},
      		"inner beast" : { 
			name : "Inner Beast", 
			minlevel : 1, 
			usages : 1, 
			recovery : "long rest", 
			tooltip : " (Mink Heritage)", 
			action : ["bonus action", ""], 
			},
 
		},
	};
