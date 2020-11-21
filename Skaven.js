
var iFileName = "Homebrew Syntax - RaceList.js"; 
RequiredSheetVersion(12.999); 

RaceList["Skaven"] = { 
	regExpSearch : /Skaven/i, 
	name : "Skaven", 
	source : ["HB", 0], 
	plural : "Skaven", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 
		swim : { spd : 30, enc : 20 }, 	},

	toolProfs : ["Mason's tool or Tinkers", 1], 
	languageProfs : ["Skaven", "Undercommon"], 
  		weaponOptions : {
		baseWeapon : "skaven claws",
		regExpSearch : /Skaven Claws/i,
		name : "Skaven Claws",
		source : ["HB", 0],
		damage : [1, 6, "slashing"]},
  		weaponOptions : {
		baseWeapon : "skaven bite",
		regExpSearch : /Skaven Bite/i,
		name : "Skaven Bite",
		source : ["HB", 0],
		damage : [1, 6, "piercing"]},
	weaponsAdd : ["Skaven Bite"],
  weaponAdd : ["Skaven Claws"],
	vision : ["Darkvision", 120], 
	savetxt : { 
		adv_vs : ["Wis checks relying on smell", "Effects of disease", "Wis insight on emotions"],
	},
	skillstxt : "Choose any two skills",  
	age : " reach adulthood in one year, and rarely live longer than 30 years.", 
	height : " range from 4 to over 5 feet tall (3'9\" + 2d8\")", 
	weight : " weigh around 55 lb (50 + 2d8 \xD7 2d4 lb)", 
	improvements : "Skaven: +1 Dexterity, +1 Wisdom, +1 Intelligence;", 
	scores : [0, 1, 0, 1, 1, 0], 
	trait : "Skaven (+1 Dexterity, 12 Wisdom, +1 Intelligence)\n .", //required; Racial Trait  (note that "\n" is a line break).

	abilitySave : 5,  

	spellcastingAbility : 5, 
	spellcastingBonus : { 
		name : "Oil Magic", 
		spells : ["grease"], 
		selection : ["grease"], 
		times : 2, 
		prepared : true, 
		oncelr : true, 	},

};

WeaponsList["skaven bite"] = { 
	regExpSearch : /skaven bite/i, 
	name : "Skaven Bite", 
	source : ["HB", 0], 
	list : "melee", 
	ability : 1, 
	type : "Natural", 
	damage : [1, 6, "piercing"], 
	range : "Melee", 
  description : "Brutal: Reroll 1's. Target-DC15 Con save or take 1d6poison damage.", 
	abilitytodamage : true, 
	modifiers : [1, 1], 
};
WeaponsList["skaven claws"] = { 
	regExpSearch : /skaven claws/i, 
	name : "Skaven Claws", 
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
