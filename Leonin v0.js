var iFileName = "Homebrew Syntax - RaceList.js"; 
RequiredSheetVersion(12.999); 

RaceList["grey leonin"] = { 
	regExpSearch : /^(?=.*grey)(?=.*leonin).*$/i, 
	name : "Grey Leonin", 
	sortname : "Leonin, Grey", 
	source : ["HB", 0], 
	plural : "Grey Leonins", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, },
	languageProfs : ["Common"], 
	weaponsadd : ["Leonin Jaws"], 
    		weaponOptions : {
		baseWeapon : "leonin jaws",
		regExpSearch : /Leonin Jaws/i,
		name : "Leonin Jaws",
		source : ["HB", 0],
		damage : [1, 6, "piercing"],
		range : "Melee",
		description : "Natural, Brutal Reroll 1's.",
		abilitytodamage : true, },
		},
	skillstxt : "Choose one of Intimidation, Performance or Persuasion.",  
	age : "Leonin reach adulthood around the age of 15, and generally live to be about 150 years old.", 
	height : " range from 6 to over 7 feet tall (5'9\" + 2d8\")", 
	weight : " weigh around 230 lb (210 + 2d8 \xD7 2d4 lb)", 
	improvements : "Grey Leonin: +1 Strength, +2 Intelligence;", 
	scores : [1, 0, 0, 2, 0, 0], 
	trait : "Grey Leonin (+1 Strength, +2 Intelligence)\nRoar: As can action, release an almightly roar. All in 20ft who hear must make a Wis DC save (8+Cha+Prof) or be frightened for 1min. Once per short rest.\nLegacy of Shadow: I am innately magic using Int for spellcasting", 
	spellcastingAbility : 4, 
	features : { 
		"leonin roar" : { 
			name : "Leonin Roar", 
			minlevel : 1, 
			usages : 1, 
			recovery : "short rest", 
			tooltip : "", 
			action : ["action", ""], 
},
		"toll the dead" : { 
			name : "Legacy of Shadow (Level 1)", 
      			limfeaname : "Toll the Dead",
			minlevel : 1, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Legacy of Shadow (level 1)",
				spells : ["toll the dead"],
				selection : ["toll the dead"],
				atwill : true,
			},
    },
      "dissonant whispers" : { 
			name : "Legacy of Shadow (Level 3)", 
      			limfeaname : "dissonant whispers",
			minlevel : 3, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Legacy of Shadow (level 3)",
				spells : ["dissonant whispers"],
				selection : ["dissonant whispers"],
				oncelr : true,
			},
      },
     "shadow blade" : { 
			name : "Legacy of Shadow (Level 5)", 
      			limfeaname : "Shadow Blade",
			minlevel : 5, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Legacy of Shadow (level 5)",
				spells : ["shadow blade"],
				selection : ["shadow blade"],
				atwill : true,
			},
     },
      },

			

};

RaceList["wild leonin"] = { 
	regExpSearch : /^(?=.*wild)(?=.*leonin).*$/i, 
	name : "Wild Leonin", 
	sortname : "Leonin, Wild", 
	source : ["HB", 0], 
	plural : "Wild Leonins", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 	},
	languageProfs : ["Common", 1], 
	weaponsadd : ["Leonin Jaws"], 
    		weaponOptions : {
		baseWeapon : "leonin jaws",
		regExpSearch : /Leonin Jaws/i,
		name : "Leonin Jaws",
		source : ["HB", 0],
		damage : [1, 6, "piercing"],
		range : "Melee",
		description : "Natural, Brutal Reroll 1's.",
		abilitytodamage : true, },
		},
	skills : ["Survival"], 
	skillstxt : "Choose one of Intimidation, Performance or Persuasion.",  
	age : "Leonin reach adulthood around the age of 15, and generally live to be about 150 years old.", 
	height : " range from 6 to over 7 feet tall (5'9\" + 2d8\")", 
	weight : " weigh around 230 lb (210 + 2d8 \xD7 2d4 lb)", 
	improvements : "Wild Leonin: +1 Dexterity, +2 Strength;", 
	scores : [2, 1, 0, 0, 0, 0], 
	trait : "Wild Leonin (+1 Dexterity, +2 Strength)\nRoar: As can action, release an almightly roar. All in 20ft who hear must make a Wis DC save (8+Cha+Prof) or be frightened for 1min. Once per short rest.\nSavage Attacks: When you score a critical hit with a melee weapon attack, you can roll one of the weapon’s damage dice one additional time and add it to the extra damage of the critical hit.", 
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
		damage : [1, 6, "piercing"],
		range : "Melee",
		description : "Natural, Brutal Reroll 1's.",
		abilitytodamage : true, },
		},
	dmgres : ["Radiant"], 
	savetxt : { 
		text : ["Adv on Cha checks if only one to interpret"], 	},
	skillstxt : "Choose one of Intimidation, Performance or Persuasion.",  
	age : "Leonin reach adulthood around the age of 15, and generally live to be about 150 years old.", 
	height : " range from 6 to over 7 feet tall (5'9\" + 2d8\")", 
	weight : " weigh around 230 lb (210 + 2d8 \xD7 2d4 lb)", 
	improvements : "Royal Leonin: +1 Charisma, +2 Strength;", 
	scores : [2, 0, 0, 0, 0, 1], 
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
