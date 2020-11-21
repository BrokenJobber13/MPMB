var iFileName = "Hald Taxabi.js"; 
RequiredSheetVersion(12.999); 

RaceList["half taxabi"] = { 
	regExpSearch : /half taxabi/i, 
	name : "Half Taxabi",
	source : ["HB", 0], 
	plural : "Half Taxabi", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 
		climb : { spd : "20", enc : 10 }, 	},
	toolProfs : ["Artisan's Tools", 2], 
	languageProfs : ["Common", 1], 
		weaponOptions : {
		baseWeapon : "taxabi claws",
		regExpSearch : /Taxabi Claws/i,
		name : "Taxabi Claws",
		source : ["HB", 0],
		damage : [1, 6, "piercing"]},
	weaponsAdd : ["Taxabi Claws"], 
	vision : ["Darkvision", 60], 
	savetxt : { 
		text : ["Investigating places,objects,people", "Perception checks that rely on hearing"], 	},
	skills : ["Perception"], 
	skillstxt : "Choose Intimidiation or Persuasion and another skill.",  
	age : " reach adulthood in their late teens and live around 100 years", 
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")", 
	weight : " weigh around 55 lb (49 + 2d8 \xD7 2d4 lb)", 
	improvements : "Half Taxabi: +1 Dexterity, +1 Free Choice, +1 Free Choice;", 
	scores : [0, 1, 0, 0, 0, 0], 
	trait : "Half Taxabi (+1 Dexterity, +1 Free Choice, +1 Free Choice)\n  .", 

};

WeaponsList["taxabi claws"] = { 
	regExpSearch : /taxabi claws/i, 
	name : "Taxabi Claws", 
	source : ["HB", 0], 
	list : "melee", 
	ability : 1, 
	type : "Natural", 
	damage : [1, 6, "slashing"], 
	range : "Melee", 
	description : "Light. Concealed", 
	abilitytodamage : true, 
	modifiers : [1, 1], 
};
