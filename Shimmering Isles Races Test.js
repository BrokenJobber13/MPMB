var iFileName = "Shimmering Isles Races Test.js"; 
RequiredSheetVersion(12.999); 


RaceList["mountainborn human"] = { 
	regExpSearch : /Mountainborn Human/i, 

	name : "Mountainborn Human", 
	source : ["HB", 0], 
	plural : "Mountainborn Human", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, },
	toolProfs : ["Smith's or Mason's tools", 1], 
	languageProfs : ["Common", 1], 
	savetxt : { 
		text : ["I can ignore difficult Rocky terrain and double Prof for Str checks."], 	},
	weaponprofs : [false, false, ["light hammer", "warhammer"]], 
	armor : [false, false, false, false], 
	skillstxt : "Choose any two skills",  
	age : " reach adulthood in their late teens and live around 100 years", 
	height : " range from 5 to over 8 feet tall (4'9\" + 3d8\")", 
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)", 
	improvements : "Mountainborn Human: +1 Free Choice, +2 Strength;", 
	scores : [2, 0, 0, 0, 0, 0], 
	trait : "Mountainborn Human (+1 Free Choice, +2 Strength)\nMountaineer\nWhenever you make a Strength(Athletics) check to climb rocks, you are considered proficient in the Athletics skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.\nStrong as a Rock\nYour hit point maximum increases by 1 and by 1 every time you gain a level.",
	carryingCapacity : 2

};

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
	trait : "Skaven (+1 Dexterity, +1 Wisdom, +1 Intelligence)\n .", //required; Racial Trait  (note that "\n" is a line break).

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
  description : "Brutal: Reroll 1's. Target-DC15 Con save or take extra 1d6poison damage.", 
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

RaceList["succubus"] = { 
	regExpSearch : /Succubus/i, 
	name : "Succubus", 
	source : ["HB", 0], 
	plural : "Succubus", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 
		fly : { spd : "walk", enc : 0 }, 	},
	languageProfs : [ "Common", "Abyssal", "Infernal", "Telepathy 30ft"], 
	weapons : ["claws"], 
	vision : ["Darkvision", 120], 
	dmgres : ["Necrotic"], 
	skillstxt : "Choose any two skills",  
	age : " reach adulthood in their late teens and live around 600 years while retaining their youngful appearence", 
	height : " range from 4 to over 5 feet tall (3'9\" + 2d8\")", 
	weight : " weigh around 85 lb (70 + 2d8 \xD7 2d4 lb)", 
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)", 
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)", 
	improvements : "Succubus: +2 Charisma, +1 Intelligence;", 
	scores : [0, 0, 0, 1, 0, 2], 
	trait : "Succubus (+2 Charisma, +1 Intelligence)\nTraits Details here.", 
	spellcastingAbility : 6, 
		
	features : { 
		"druidcraft" : { 
			name : "Dark Arts", 
     			limfeaname : "Charm Person",
			minlevel : 1, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Dark Arts",
				spells : ["charm person"],
				selection : ["cham person"],
				atwill : true,
			},
    },
		"transmorph" : { 
			name : "Transmorph", 
			minlevel : 3, 
			usages : 5, 
			recovery : "long rest", 
			tooltip : "", 
			action : ["action", ""], 
			spellcastingBonus : { 
				name : "Succubus Arts (level 3)",
				spells : ["polymorph"],
				selection : ["polymorph"],
				oncelr : true,			},
    				},
  "draining kiss" : {
			name : "Draining Kiss",
			minlevel : 1,
			usages : 2,
			additional : ["1d10", "1d10", "1d10", "1d10", "2d10", "2d10", "2d10", "2d10", "2d10", "3d10", "3d10", "3d10", "3d10", "3d10", "4d10", "4d10", "4d10", "4d10", "5d10", "5d10"],  
			recovery : "short rest",
			tooltip : "",

			action : ["action", ""], 	},
  },

  };

RaceList["Taintblood Devil"] = { 
	regExpSearch : /Taintblood Devil/i, 
	name : "Taintblood Devil", 
	source : ["HB", 0], 
	plural : "Taintblood's", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 	},
	languageProfs : ["Common", "Infernal"], 
	vision : ["Darkvision", 30], 
	dmgres : ["Poison"], 
	savetxt : { 
		text : ["Adv on social checks with demons.", "Disadv on social checks demons make on me."], 	},
	age : " A taintblood lives for about two centuries, reaching maturity at the age of 20", 
	height : " range from 5 to over 7 feet tall (4'9\" + 2d8\")", 
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)", 
	improvements : "Taintblood Devil: +2 Dexterity, +1 Charisma;", 
	scores : [0, 2, 0, 0, 0, 1], 
	trait : "Taintblood Devil (+2 Dexterity, +1 Charisma)\nHeritage:\nI bear a mark on my body from my evil parent\nMask of the Taint:\nI can make minor changes to my looks like having normal eyes, hide teeth to appear human.\nPoisonous Veins: If a creature consumes my blood, it takes a Con save throw DC8+Prof+Spellcasting ability mod.\n on fail is Poisoned for 1min, also 2d6 damage a start of turn, target can repeat at end of their turn.", 
	abilitySave : 5,  
};

RaceList["taintblood demon"] = { 
	regExpSearch : /Taintblood Demon/i, 
	name : "Taintblood Demon", 
	source : ["HB", 0], 
	plural : "Taint's", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 	},
	languageProfs : ["Common", "Abyssal"], 
	vision : ["Darkvision", 30], 
	dmgres : ["Fire"], 
	savetxt : { 
		text : ["Adv social checks on demons", "Disadv on social checks by infernals"], 	},
	age : " A taintblood lives for about two centuries, reaching maturity at the age of 20", 
	height : " range from 5 to over 7 feet tall (4'9\" + 2d8\")", 
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)", 
	improvements : "Taintblood Demon: +1 Charisma, +2 Strength;", 
	scores : [1, 0, 0, 0, 0, 1], 
	trait : "Taintblood Demon (+1 Charisma, +2 Strength)\nHeritage - I bear a mark on my body from my evil parent\nMask of the Taint\nI can make minor changes to my looks like having normal eyes, hide teeth to appear human.\nDemonic Flames\nWhen I deal Fire damage, it ignores as resistances but not immunities.", 
	abilitySave : 5,  
	spellcastingAbility : 6, 

	features : { 
		"fire bolt" : { 
			name : "Fiery Veins (Level 1)", 
      limfeaname : "fire bolt",
			minlevel : 1, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Fiery Veins (level 1)",
				spells : ["fire bolt"],
				selection : ["fire bolt"],
				atwill : true,
			},
    },		
},
},

RaceList["winterborn human"] = { 
	regExpSearch : /^(?=.*winterborn)(?=.*human).*$/i, 
	name : "Winterborn Human", 
	sortname : "Winterborn Human", 
	source : ["HB", 0], 
	plural : "Winterborn Human", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 	},

	languageProfs : [1, "Common"], // optional; this is an array of the language proficiencies gained. An entry can either be 1) a string that represents the language learned or 2) a number which is the number of language gained that can be chosen by the player

	savetxt : { 
		adv_vs : ["extreme cold", "frightened"] 	},

	weaponprofs : [false, false, ["battleaxe", "longsword", "great axes", "greatswords"]], 
	skills : ["Survival"], 
	age : " reach adulthood in their late teens and live around 100 years", 
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")", 
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)", 
	improvements : "Winterborn Human: +1 Free Choice, +2 Constitution;", 
	scores : [0, 0, 2, 0, 0, 0], 
	trait : "Winterborn Human (+1 Free Choice, +2 Constitution)\n   .", 

	abilitySave : 5,  
	

	features : { 
		"glory over death" : { 
			name : "Glory over Death", 
			minlevel : 1, 
			usages : 1, 
			recovery : "long rest", 
			action : ["action", ""], 
			},

},
},

RaceList["lustrous android"] = { 
	regExpSearch : /lustrous android/i, 
	name : "Lustrous Android", 
	source : ["HB", 0], 
	plural : "Lustrous Android", 
	size : 4, 
	speed : { 
		walk : { spd : 30, enc : 30 }, 	},
	toolProfs : ["Tinker's tools", "Int"], 
	languageProfs : ["Common"], 
armorOptions : {
		regExpSearch : /^(?=.*natural)(?=.*armou?r).*$/i,
		name : "Natural Armor",
		source : ["V", 113],
		ac : 13
	},
	addarmor : "Natural Armor", 
	vision : ["Darkvision", 60], 
	dmgres : ["Fire"], 
	savetxt : { 
		text : ["Can't be magically sensed"], 
		immune : ["poison", "disease"], 
	},
	armor : [false, true, true, false], 
	skills : ["Perception"], 
	age : " reach adulthood in their late teens and live around 200 years", 
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")", 
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)", 
	improvements : "Android: +2 Constitution, +2 Strength, +1 Intelligence;", 
	scores : [2, 0, 2, 1, 0, 0], 
	trait : "Android (+2 Constitution, +2 Strength, +1 Intelligence)\nAndroid Nature: Because of my build, I dont need to eat or suffer exhuastion but I do need to shut down for 4hours a day.\nGem Genetics:As part of the long rest, I can comsume gems for a benefit. See table.", 

	abilitySave : 3,  
	spellcastingAbility : 6, 
	features : {
		"shield" : { 
			name : "Lustrous Shield", 
      			limfeaname : "Shield",
			minlevel : 1, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Lustrous Shield",
				spells : ["shield"],
				selection : ["shield"],
				atwill : true,
			},
	},
	},
			addMod : { type : "skill", field : "Init", mod : "Int", text : "I can add my Intelligence modifier to initiative rolls." } 

},

RaceList["mythricborn human"] = { 
	regExpSearch : /^(?=.*mythricborn)(?=.*human).*$/i, 
	name : "Mythricborn Human", 
	sortname : "Mythricborn Human", 
	source : ["HB", 0], 
	plural : "Mythricborn Human", 
	size : 3, 
	speed : { 	walk : { spd : 30, enc : 20 }, },
	languageProfs : [ "Common", "Celestial", 2], 
	savetxt : { 	adv_vs : ["on Persuasion to Good alignments"] 	},
	weaponprofs : [false, false, ["gladius", "spears", "claymore", "crossbow"]], 
	skillstxt : "Choose any two skills",  
	age : " reach adulthood in their late teens and live around 150 years", 
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")", 
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)", 
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)", 
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)", 
	improvements : "Mythricborn Human: +1 Strength, +1 Intelligence, +1 Charisma;", 
	scores : [1, 0, 0, 1, 0, 1], 
	trait : "Mythricborn Human (+1 Strength, +1 Intelligence, +2 Charisma)\nMythric Appearence\nMy Heritage allows me to have advantage in persuasion with Good aligned folk and learn more languages.\nDivine Light\nMy celestial heritage allows you to light up the dark place of the work, you gain the cantrip Light for free. I give off a low light naturally.\nMulan's Mark\nAs an Bonus Action I can Touch any humanoid and cause it to regain 2d6 HP. The die and usage increase as my training continues.", 


	spellcastingAbility : 6, 
	spellcastingBonus : { //optional; an object that adds something to the "Bonus Spells" section of the spell selection dialog //this object can have all the same attributes as the "spellcastingList" object as defined in the ClassList, but must also have a "name" defined //the other things that can be defined in this that are not in the "spellcastingList" object, are the "selection", "times" and "prepared" values

		name : "Mythric Heritage", //required; this is used to identify the object, so must be an unique name
		spells : ["light"], //Optional, but required if not including the "class" entry; If a "spells" array is present, all other objects will be ignored and only this list of spells will populate the list of available spells. each entry has to match the name of the spell in the SpellsList

		selection : ["light"], //optional if "spells" is defined; this is the default selection for the array specified in "spells"

		times : 1, //optional; this is the number of times the bonus spells should be added. //This can also be an array of 20 values. That way the number of times are level-dependent

		prepared : true, //optional; if set to 'true', this makes the spell selected for this/these bonus spells to automatically get a checked off checkbox in the first column, similar to domain spells for a cleric

		atwill : true, //optional; if set to 'true', this makes the spell selected for this/these bonus spells to get "At Will" in the first column

	},

	features : { 
		"mulan's bond of honor" : { 
			name : "Mulan's Bond of Honor", 
			minlevel : 1, 
			usages : [ "3", "3", "3", "4", "4" , "4", "4", "5", "5", "5", "5", "6", "6" , "6", "6", "7", "7", "7", "7", "8" ], //optional; number of times it can be used. This can be one value, but can also be an array of 20 values, one for each level
			additional : [ "2d6", "2d6", "2d6", "2d6", "2d6", "2d6", "3d6", "3d6", "3d6", "3d6", "3d6", "3d6", "4d6", "4d6", "4d6", "5d6", "4d6", "4d6", "5d6", "5d6" ],
			recovery : "long rest", 
			tooltip : "", 
			action : ["bonus action", ""], 
															}


							}

};

RaceList["plainsborn human"] = {

	regExpSearch : /^(?=.*plainsborn)(?=.*human).*$/i, 
	name : "Plainsborn Human", 
	sortname : "Plainsborn Human", 
	source : ["HB", 0],
	plural : "Plainborns", 
	size : 3, 
	speed : { walk : { spd : 30, enc : 20 } },
	toolProfs : ["Artisan's tools", 3],
	languageProfs : ["Common", 1], 
	skillstxt : "Choose any two skills", 
	age : " reach adulthood in their late teens and live around 100 years", 
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")",
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)", 
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)", 
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)", 
	improvements : "Plainsborn Human: +1 Charisma, +2 Intelligence;", 
	scores : [0, 0, 0, 2, 0, 1], 
	trait : "Plansborn Human (+1 Free Choice, +2 Intelligence)\nVersatile Culture.\nYou gain proficiency in two skills of your choice.\nCrafting Expertise.\nYou gain proficiency in one artisan's tools of your choice. When you craft an object using the artisan's tools you're proficient with, you count as two characters working for the amount of gp worth of effort for every day spent creating the item, allowing you to craft objects faster than others.", //required; the racial trait as it will be put in the Racial Trait field on the second page (note that "\n" is a line break).

};

RaceList["seaborn human"] = { 
	regExpSearch : /^(?=.*seaborn)(?=.*human).*$/i, 
	name : "Seaborn Human", 
	sortname : "Seaborn Human", 
	source : ["HB", 0], 
	plural : "Seaborns", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 
		swim : { spd : 30, enc : 20 },
	},
	toolProfs : ["Vehicles Water"],
	languageProfs : ["Common", 1],
	savetxt : { 
		adv_vs : ["negotiating"] 	},

	skills : ["Persuasion", "Deception"], 
	age : " reach adulthood in their late teens and live around 100 years", 
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")", 
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)", 
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)", 
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)", 
	improvements : "Seaborn Human: +1 Free Choice, +2 Charisma;", 
	scores : [0, 0, 0, 0, 0, 2], 
	trait : "Seaborn Human (+1 Free Choice, +2 Charisma)\nAppraiser\nYou have advantage on checks to determine the value and craftwork of items.\nNatural Trader\nyou have advantage on Charisma (Persuasion) checks when negotiating prices with others that aren't hostile toward you.", 

								};

RaceList["gatorkin"] = {
	regExpSearch : /gatorkin/i,
	name : "Gatorkin",
	source : ["HB", 0],
	plural : "Gatorkin",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : 40, enc : 30 }
	},
	skillstxt : "Choose any two skills",
	languageProfs : ["Draconic", 1],
	weaponOptions : {
		baseWeapon : "gators greater bite",
		regExpSearch : /gators greater bite/i,
		name : "Gators Greater Bite",
		source : ["HB", 0],
		damage : [2, 6, "piercing"]
	},
	weaponsAdd : ["Gators Greater Bite"],
	armorOptions : {
		regExpSearch : /^(?=.*natural)(?=.*armou?r).*$/i,
		name : "Natural Armor",
		source : ["V", 113],
		ac : 15
	},
	armorAdd : "Natural Armor",
  	savetxt : { 
		adv_vs : ["on all Str checks in water", "being frightened", "Stealth and hiding in water"], },
		skills : ["Insight", "Deception"],
	age : " reach maturity around age 14 and rarely live longer than 60 years",
	height : " range from 5 to well over 6 feet tall (4'9\" + 2d10\")",
	weight : " weigh around 200 lb (120 + 2d10 \xD7 2d6 lb)",
	heightMetric : " range from 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 95 kg (55 + 5d10 \xD7 4d6 / 10 kg)",
	
	improvements : "Gatorkin : +1 Constitution, +1 Wisdom, +2 Strength;", 

	scores : [2, 0, 1, 0, 1, 0],
	trait : "Gatorkin (+2 Strength +1 Constitution, +1 Wisdom)\nPowerful jaws - My jaws cause more damage on impact and allow me as a Bonus action to grapple the target.\nCunning Artisan: As part of a short rest I can harvest parts of a slain creature to make a shield, club, javelin, or 1d4 darts/blowgun needles.\nThis requires a suitable corpse and appropriate tools.\nHold Breath\nI can hold my breath for up to 30 minutes at a time.\nNatural Armor: I have an AC of 13 + Dexterity modifier + shield.",
	abilitySave : 1,  
	features : {
		"cunning artisan" : {
			name : "Cunning Artisan",
			minlevel : 1,
			usages : 1,
			recovery : "short rest"
		},
		"grapple biten" : {
			name : "Grapple Biten",
			minlevel : 1,
			recovery : "long rest",
			action : ["bonus action", ""]
		}
	},
	
};


WeaponsList["gators greater bite"] = {
	regExpSearch : /Gators Greater Bite/i,
	name : "Gators Greater Bite",
	source : ["HB", 0],
	list : "Natural",
	ability : 1,
	type : "Martial",
	damage : [2, 6, "Piercing"],
	range : "Melee",
	description : "Lunge 10ft, Finesse, Brutal Reroll 1's.",
	abilitytodamage : true,
}; 

RaceList["glacier dwarf"] = { 
	regExpSearch : /glacier dwarf/i, 
	name : "Glacier Dwarf", 
	source : ["HB", 0], 
	plural : "Glacier Dwarf", 
	size : 3, 
	speed : { 
		walk : { spd : 25, enc : 15 }, 
	},

	toolProfs : ["Mason's, Smith's or Brewer's tools"], 
	languageProfs : ["Dwarven", 1], 
	vision : [["Darkvision", 60]], 
	dmgres : ["Cold"], 
	savetxt : { 
		text : ["Survival checks profx2 in cold climates"], 
		adv_vs : ["cold"]
	},

	weaponprofs : [false, false, ["battleaxe", "handaxe", "spear", "warpick"]], 
	armor : [false, false, true, true], 
	
	skillstxt : "Choose any two skills",  
	age : " reach adulthood in their late 40's and live around 300 years", 
	height : " range from 4 to over 5 feet tall (4'9\" + 2d8\")", 
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)", 
	improvements : "Glacier Dwarf: +1 Dexterity, +1 Strength, +2 Consititution;", 
	scores : [1, 1, 2, 0, 0, 0], 
	trait : "Glacier Dwarf (+1 Dexterity, +1 Strength +2 Consititution)\nDwarven Resilience: Unlike the dwarves of the mainland, glacier dwarves possess an innate resistance to cold\nIce Walk: I can move across and climb icy surfaces without needing to make an ability check. Additionallydifficult terrain composed of ice or snow doesn’t cost you extra moment and my speed is not reduced by wearing heavy armor\nIcebound Navigation: Whenever you make a Wisdom (Survival) checks for navigating forzen territory, I am considered proficient in the Survival skill and add double your proficiency bonus to the check.", 

};

RaceList["half taxabi"] = { 
	regExpSearch : /half taxabi/i, 
	name : "Half Taxabi",
	source : ["HB", 0], 
	plural : "Half Taxabi", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 
		climb : { spd : 20, enc : 10 }, 	},
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

RaceList["kaijuborn"] = { 
	regExpSearch : /kaijuborn/i, 
	name : "Kaijuborn", 
	sortname : "Kaijuborn", 
	source : ["HB", 0], 
	plural : "Kaijuborn", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 
		swim : { spd : 30, enc : 20 }, 	},

	languageProfs : ["Common", 1], 
		armorOptions : {
		regExpSearch : /^(?=.*natural)(?=.*armou?r).*$/i,
		name : "Natural Armor",
		source : ["V", 113],
		ac : 13
	},
	armorAdd : "Natural Armor",
	vision : ["Darkvision", 60], 

	savetxt : { 
		adv_vs : ["frightened", "charmed"] 	},

	skillstxt : "Choose any two skills",  
	age : " Their life span is unknown. Kaijuborn have beenknown to live for as long as the true dragons, if not longer. They reach maturity around 100 years old", 
	height : " range from 7 to over 8 feet tall (6'9\" + 2d8\")", 
	weight : " weigh around 255 lb (210 + 2d8 \xD7 2d4 lb)", 
	improvements : "Kaijuborn: +1 Strength, +2 Constitution;", 
	scores : [1, 0, 2, 0, 0, 0], 
	trait : "Kaijuborn (+1 Strength, +2 Constitution) \nAmphibious: I can breath air and water.\nKaiju Sense - I can sense other kaijuborn within a mile.\nAtomic Breath: Your energy weapon deals radiantdamage in a line 30 feet long and 5 feet wide, imposes a Dex saving throw(DC8+Con+Prof), Half damage on success,\nRed Spiral Atomic Breath: You possess the ability to enhance your atomic breath by risking yourself. I can overclock your radioactive heart to deal max damage with my atomic breath to one target but I take half damage too and make a Con savingthrow (DC 15) or suffer one level of exhaustion.", 

	abilitySave : 3,  

	features : { 
		"atomic breath" : {
			name : "Atomic Breath",
			minlevel : 1,
			usages : 1,
			additional : ["2d6", "2d6", "2d6", "2d6", "3d6", "3d6", "3d6", "3d6", "3d6", "3d6", "4d6", "4d6", "4d6", "4d6", "4d6", "4d6", "5d6", "5d6", "5d6", "5d6"],  //optional; text to display in the description field of the limited feature. This can be one value, but can also be an array of 20 values, one for each level.
			recovery : "short rest",
			tooltip : "",
			action : ["action", ""], 
		},
		"red spiral atomic breath" : { 
			name : "Red Spiral Atomic Breath", 
			minlevel : 1, 
			usages : 1, 
			recovery : "long rest", 
			tooltip : "", 
			action : ["action", ""], 
			},
		}

};

RaceList["lizardfolk blackscale"] = {
	regExpSearch : /lizardfolk blackscale/i,
	name : "Lizardfolk Blackscale",
	source : ["HB", 0],
	plural : "Lizardfolk Blackscale",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : 30, enc : 20 },
	},
	skillstxt : "Choose two from Animal Handling, Nature, Perception, Stealth, and Survival",
	languageProfs : ["Common", "Draconic"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /\bbite\b/i,
		name : "Bite",
		source : ["V", 113],
		damage : [1, 6, "piercing"],
	},
	weaponsAdd : ["Bite"],
	armorOptions : {
		regExpSearch : /^(?=.*natural)(?=.*armou?r).*$/i,
		name : "Natural Armor",
		source : ["V", 113],
		ac : 13,
	},
	armorAdd : "Natural Armour",
	vision : ["Darkvision", 60], 
	dmgres : ["Acid"],
	age : " reach maturity around age 14 and rarely live longer than 60 years",
	height : " range from 5 to well over 6 feet tall (4'9\" + 2d10\")",
	weight : " weigh around 200 lb (120 + 2d10 \xD7 2d6 lb)",
	heightMetric : " range from 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 95 kg (55 + 5d10 \xD7 4d6 / 10 kg)",
	scores : [1, 0, 2, 0, 0, 0],
	features : {
		"cunning artisan" : {
			name : "Cunning Artisan",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
		},
		
	},
	trait : "Lizardfolk Blackscale (+2 Constitution, +1 Strength)\nBite: I can use my fanged maw to make unarmed strikes dealing 1d6 piercing damage.\nCunning Artisan: As part of a short rest I can harvest parts of a slain creature to make a shield, club, javelin, or 1d4 darts/blowgun needles.\nHold Breath: I can hold my breath for up to 15 minutes at a time.\nAcid Resistance – You have resistance to acid damage.\nPowerful Build: I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift.\nAggressive: As a bonus action, I can move up to my speed toward an enemy that I can see or hear. I must end my move closer to this enemy than I started.",
	action : ["bonus action", "Aggressive (dash to enemy)"],
	carryingCapacity : 2
};


RaceList["lizardfolk poisondusk"] = {
	regExpSearch : /lizardfolk poisondusk/i,
	name : "Lizardfolk Poisondusk",
	source : ["HB", 0],
	plural : "Lizardfolk",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : 30, enc : 20 }
	},
	skills : ["Survival"],
	skillstxt : "Choose two from Animal Handling, Nature, Perception, Stealth, and Survival",
	languageProfs : ["Common", "Draconic"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /\bbite\b/i,
		name : "Bite",
		source : ["V", 113],
		damage : [1, 6, "piercing"]
	},
	weaponsAdd : ["Bite"],
	armorOptions : {
		regExpSearch : /^(?=.*natural)(?=.*armou?r).*$/i,
		name : "Natural Armor",
		source : ["V", 113],
		ac : 13
	},
	armorAdd : "Natural Armor",
	savetxt : { adv_vs : ["checks for tracking and wild game hunts."],
	},
	age : " reach maturity around age 14 and rarely live longer than 60 years",
	height : " range from 5 to well over 6 feet tall (4'9\" + 2d10\")",
	weight : " weigh around 200 lb (120 + 2d10 \xD7 2d6 lb)",
	heightMetric : " range from 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 95 kg (55 + 5d10 \xD7 4d6 / 10 kg)",
	scores : [0, 1, 2, 0, 0, 0],
	features : {
		"cunning artisan" : {
			name : "Cunning Artisan",
			minlevel : 1,
			usages : 1,
			recovery : "short rest"
		},
		"Racial Poison" : {
			name : "Racial Poison",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			action : ["bonus action", ""]
		}
	},
	trait : "Lizardfolk Poisondusk(+2 Constitution, +1 Dexterity)\nChameleon skin\nI can try to hide when you are unobscured by pressing yourself up against a solid surface thats atleast as tall and wide as you. You can hide by pressing against the ground.\n While hiding this way you have advantage on Dex (stelth) check, provided you are out of combat and you remian there without moving or takng actions.\nRacial poison - As part of  long rest you can distill poison from your own glands.\n You gain a number of odese of racial posion equal to half your prof rounded down.\nYou can use a dose to coat one slashing or piercing weapon or upto 3 pieces of ammo. Applying the poson takes an action. A creature hit takes 1d4 poison damage. Once applied, the posion retais potency for 1min before drying. Doses last 24hours only.\nPredator - I have advantage on Wisdom (survival)checks to follows tracks and hunt wild game."
};

RaceList["lizardfolk sharptooth"] = {
	regExpSearch : /lizardfolk sharptooth/i,
	name : "Lizardfolk Sharptooth",
	source : ["HB", 0],
	plural : "Lizardfolk Sharptooth",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : 30, enc : 20 }
	},
	skillstxt : "Choose two from Animal Handling, Nature, Perception, Stealth, and Survival",
	languageProfs : ["Common", "Draconic"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /\bbite\b/i,
		name : "Bite",
		source : ["V", 113],
		damage : [1, 6, "piercing"]
	},
	weaponsAdd : ["Bite"],
	armorOptions : {
		regExpSearch : /^(?=.*natural)(?=.*armou?r).*$/i,
		name : "Natural Armor",
		source : ["V", 113],
		ac : 13
	},
	armorAdd : "Natural Armor",
	age : " reach maturity around age 14 and rarely live longer than 60 years",
	height : " range from 5 to well over 6 feet tall (4'9\" + 2d10\")",
	weight : " weigh around 200 lb (120 + 2d10 \xD7 2d6 lb)",
	heightMetric : " range from 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 95 kg (55 + 5d10 \xD7 4d6 / 10 kg)",
	scores : [0, 0, 2, 0, 1, 0],
	features : {
		"cunning artisan" : {
			name : "Cunning Artisan",
			minlevel : 1,
			usages : 1,
			recovery : "short rest"
		},
		"hungry jaws" : {
			name : "Hungry Jaws",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", ""]
		}
	},
	trait : "Lizardfolk Sharptooth (+2 Constitution, +1 Wisdom) Bite: I can use my fanged maw to make unarmed strikes dealing 1d6 piercing damage." + (typePF ? "\n" : " ") + "Cunning Artisan: As part of a short rest I can harvest parts of a slain creature to make a shield, club, javelin, or 1d4 darts/blowgun needles. This requires a suitable corpse and appropriate tools." + (typePF ? "\n" : " ") + "Hold Breath: I can hold my breath for up to 15 minutes at a time." + (typePF ? "\n" : " ") + "Natural Armor: I have an AC of 13 + Dexterity modifier + shield." + (typePF ? "\n" : " ") + "Hungry Jaws: As a bonus action, once per short rest, I can make a special bite attack and if it hits I gain temporary HP equal to my Con modifier (min 1)."
};

RaceList["Forestborn human"] = {

	regExpSearch : /^(?=.*forestborn)(?=.*human).*$/i, 
	name : "Forestborn Human", 
	sortname : "Forestborn Human", 
	source : ["HB", 0],
	plural : "Forestborns", 
	size : 3, 
	speed : { walk : { spd : 35, enc : 20 } },
	toolProfs : ["Herbalism Kit", 1],
	languageProfs : ["Common", 2], 
	savetxt : { adv_vs : ["poisons", "diease", "Wis checks in forests"] },
	skills : ["Nature"],
	skillstxt : "Choose any two skills", 
	age : " reach adulthood in their late teens and live around 100 years", 
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")",
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)", 
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)", 
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)", 
	improvements : "Forestborn Human: +1 Free Choice, +2 Wisdom;", 
	scores : [0, 0, 0, 2, 0, 0], 
	trait : "Forestborn Human (+1 Free Choice, +2 Wisdom)\nNatural Resistances\nYou have advantage on saving throws against poisons and diseases.\nWatchers of the Forests\nWhenever you make a Wisdom(Perception) checks while in a forest, you are considered proficient in the Perception skill and add double your proficiency bonus to the check, instead your normal proficiency bonus.",
};

RaceList["android"] = { 
	regExpSearch : /android/i, 
	name : "Android", 
	source : ["HB", 0], 
	plural : "Android", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 30 }, 	},
	toolProfs : ["Tinker's tools", "Int"], 
	languageProfs : ["Common"], 
armorOptions : {
		regExpSearch : /^(?=.*natural)(?=.*armou?r).*$/i,
		name : "Natural Armor",
		source : ["V", 113],
		ac : 13
	},
	addarmor : "Natural Armor", 
	vision : ["Darkvision", 60], 
	dmgres : ["Fire"], 
	savetxt : { 
		text : ["Can't be magically sensed"], 
		immune : ["poison", "disease"], 
	},
	armor : [false, true, true, false], 
	skills : ["Perception"], 
	age : " reach adulthood in their late teens and live around 200 years", 
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")", 
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)", 
	improvements : "Android: +2 Constitution, +2 Strength, +1 Intelligence;", 
	scores : [2, 0, 2, 1, 0, 0], 
	trait : "Android (+2 Constitution, +2 Strength, +1 Intelligence)\n   .", //required; th (note that "\n" is a line break).

	abilitySave : 3,  
	spellcastingAbility : 6, 
	spellcastingBonus : { 
		name : "Android Nature", 
		spells : ["Shield"], 
		selection : ["shield"], 
		times : 2, 
		prepared : true, 
		oncelr : true, 
	},
			addMod : { type : "skill", field : "Init", mod : "Int", text : "I can add my Intelligence modifier to initiative rolls." } 


};

RaceList["cambion"] = { 

	regExpSearch : /cambion/i, 
	name : "Cambion", 
	source : ["HB", 0], 
	plural : "Cambion", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 
		fly : { spd : 30, enc : 20 }, 	},
	languageProfs : [ "Common", "Abyssal", "Infernal"], 
	vision : ["Darkvision", 120], 
	dmgres : ["Necrotic"], 

	weaponprofs : [false, false, ["spears", "trident"]], 
	skillstxt : "Choose any two skills",  
	age : " reach adulthood in their late teens and live around 600 years while retaining ther youngful looks", 
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")", 
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)", 
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)", 
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)", 
	improvements : "Cambion: +1 Charisma, +2 Strength;", 
	scores : [2, 0, 0, 0, 0, 1], 
	trait : "Cambion (+1 Charisma, +2 Strength)\nFiend Magic\n.", 

	spellcastingAbility : 6, 
		features : {
			"fire bolt" : { 
			name : "Fiend Magic (Level 1)", 
      			limfeaname : "fire bolt",
			minlevel : 1, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Fiend Magic (level 1)",
				spells : ["fire bolt"],
				selection : ["fire bolt"],
				atwill : true,
			},
    },
			
		"charm person" : {
			name : "Fiend Magic (level 3)",
			limfeaname : "Charm Person",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Fiend Magic (level 3)",
				spells : ["charm person"],
				selection : ["charm person"],
				firstCol : "oncelr"		},
									},
},
},

RaceList["Elnofae"] = { 
	regExpSearch : /elnofae/i, 
	name : "Elnofae", 
	source : ["HB", 0], 
	plural : "Elnofae", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 
  		fly : { spd : 50, enc : 50 },
          },
	languageProfs : ["Common", "Slyvan", "Elnofae"], 
	vision : ["Darkvision", 60], 
	savetxt : { 
		text : ["Vulnerable to silvered weapons", "Disadv to attack rolls with nonmagical metal weapons or while wearing metal."], 	},
	age : " reach adulthood in their late teens and live around 100 years", 
	height : " range from 4 to over 7 feet tall (3'9\" + 2d8\")", 
	weight : " weigh around 95 lb (80 + 2d8 \xD7 2d4 lb)", 
	improvements : "Elnofae: +2 Dexterity, +1 Charisma;",
	scores : [0, 2, 0, 0, 0, 1], 
	trait : "Elnofae (+2 Dexterity, +1 Charisma)\n I can't fly while wearing medium or heavy armour.", 
	spellcastingAbility : 6, 
	features : { 
		"druidcraft" : { 
			name : "Part of Nature", 
     			limfeaname : "Druidcraft",
			minlevel : 1, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Part of Nature (level 1)",
				spells : ["druidcraft"],
				selection : ["druidcraft"],
				atwill : true,
			},
    },
      "entangle" : { 
			name : "Part of Nature", 
      limfeaname : "Entangle",
			minlevel : 3, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Part of Nature (level 3)",
				spells : ["entangle"],
				selection : ["entangle"],
				atwill : true,
			},
      },
     "spike growth" : { 
			name : "Part of Nature", 
      limfeaname : "Spike Growth",
			minlevel : 5, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Part of Nature (level 5)",
				spells : ["spike growth"],
				selection : ["spike growth"],
				atwill : true,
			},
     },
      },
			

},


RaceList["fishmen"] = { 
	regExpSearch : /fishmen/i, 
	name : "Fishmen", 
	source : ["HB", 0], 
	plural : "Fishmen", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 
		swim : { spd : 40, enc : 40 },
	},

	languageProfs : ["Common", 1], 
	weapons : ["Sharks Bite"], 
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
