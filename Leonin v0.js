var iFileName = "Royal Leonin.js"; 
RequiredSheetVersion(12.999); 

RaceList["royal leonin"] = { 
	regExpSearch : /^(?=.*royal)(?=.*leonin).*$/i, 
	name : "Royal Leonin", 
	sortname : "Leonin, Royal", 
	source : ["HB", 0], 
	plural : "Royal Leonins", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 	},
	languageProfs : ["Common", 3], 
	weaponsadd : ["Leonin Jaws"], 
    		weaponOptions : {
		baseWeapon : "leonin jaws",
		regExpSearch : /Leonin Jaws/i,
		name : "Leonin Jaws",
		source : ["HB", 0],
		damage : [1, 6, "piercing"]},
	dmgres : ["Radiant"], 
	savetxt : { 
		text : ["Adv on Cha checks if only one to interpret"], 	},
	skillstxt : "Choose one of Intimidation, Performance or Persuasion.",  
	age : "Leonin reach adulthood around the age of 15, and generally live to be about 150 years old.", 
	height : " range from 6 to over 7 feet tall (5'9\" + 2d8\")", 
	weight : " weigh around 230 lb (210 + 2d8 \xD7 2d4 lb)", 
	improvements : "Royal Leonin: +1 Charisma, +2 Strength;", 
	scores : [1, 0, 0, 0, 0, 1], 
	trait : "Royal Leonin (+1 Charisma, +2 Strength)\nRoar: As can action, release an almightly roar. All in 20ft who hear must make a Wis DC save (8+Cha+Prof) or be frightened for 1min. Once per short rest.\n Interpeter: I have advantage on Cha checks when I'm the only one to interpret between two or more groups.", 
	abilitySave : 6, 
  
	features : { 
		"leonin roar" : { 
			name : "Leonin Roar", 
			minlevel : 1, 
			usages : 1, 
			recovery : "short rest", 
			tooltip : "", 
			action : ["action", ""], 

},
  },
};

WeaponsList["leonin jaws"] = { 
	regExpSearch : /leonin jaws/i, 
	name : "Leonin Jaws", 
	source : ["HB", 0], 
	list : "melee", 
	ability : 1, 
	type : "Natural", 
	damage : [1, 6, "slashing"], 
	range : "Melee", 
	description : "Natural, Light, Brutal: Re-roll dmg 1's.", 
	abilitytodamage : true,  
};

WeaponsList["leonin claws"] = { 
	regExpSearch : /leonin claws/i, 
	name : "Leonin Claws", 
	source : ["HB", 0], 
	list : "melee", 
	ability : 1, 
	type : "Natural", 
	damage : [1, 6, "slashing"], 
	range : "Melee", 
	description : "Natural, Light", 
	abilitytodamage : true,  
};
