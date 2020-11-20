var iFileName = "Fishmen.js";
RequiredSheetVersion(12.999); 

RaceList["fishmen"] = { 
	regExpSearch : /fishmen/i, 
	name : "Fishmen", 
	source : ["HB", 0], 
	plural : "Fishmen", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 
		swim : { spd : "fixed 40", enc : "fixed 40" },
	},

	languageProfs : ["Common", 1], 
	weapons : ["Bite"], 
	vision : ["Darkvision", 60], 
	savetxt : { 
		adv_vs : ["on athletics in water"] 	},
	skillstxt : "Choose any two skills",  
	age : " reach adulthood in their late teens and live around 100 years", 
	height : " range from 7 to over 14 feet tall (6'9\" + 2d8\")", 
	weight : " weigh around 255 lb (210 + 2d8 \xD7 2d4 lb)", 
	heightMetric : " range from 2,5 to over 2,8 metres tall (245 + 5d8 cm)", 
	weightMetric : " weigh around 90 kg (80 + 5d8 \xD7 4d4 / 10 kg)", 
	improvements : "Fishmen: +1 Charisma, +2 Strength;", 
	scores : [2, 0, 0, 0, 0, 1], 
	trait : "Fishmen (+1 Charisma, +2 Strength)\nAquatic Adaption\nI can breath Air and Water and also communicate simple ideas to fishlife. While in water I have adventage to all Athletics checks.\nNatural Weapons\nI can attack with my bite which I am prof with.", 
	abilitySave : 1,  
	carryingCapacity : 2

};
