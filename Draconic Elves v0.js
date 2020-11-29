var iFileName = "Homebrew Syntax - RaceList.js"; 
RequiredSheetVersion(12.999); 

RaceList["draconic elf"] = { 
	regExpSearch : /Draconic Elf/i, 
	name : "Draconic Elf", 
	sortname : "Elf, Draconic", 
	source : ["HB", 0], 
	plural : "Draconic Elves", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 	},

	languageProfs : ["Elvish", "Draconic", "Common"], 
		weaponsAdd : ["Elven Breath Weapon"],
	weaponOptions : {
			regExpSearch : /Elven breath weapon/i,
			name : "Elven Breath weapon",
			source : ["HB", 0],
			ability : 6,
			type : "Natural",
			damage : [2, 6, "fire/light"],
			range : "5by30-ft line",
			description : "Hits all in area; Dex save, success - half damage; Usable only twice per short rest",
			abilitytodamage : false,
			dc : true,
			edbBreathWeapon : true
		},
	vision : ["Darkvision", 60], 
	dmgres : ["Necrotic", "Radiant"], //optional; damage resistance(s)

	savetxt : { 
		text : ["Magic can't put me to sleep"], 
		adv_vs : ["charmed"] },
	skills : ["Perception", "Intimidiation"], 
	age : "elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old", 
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")", 
	weight : " weigh around 165 lb (130 + 2d8 \xD7 2d4 lb)", 
	improvements : "Draconic Elf: +1 Strength, +2 Dexterity;", 
	scores : [1, 2, 0, 0, 0, 0], 
	trait : "Draconic Elf (+1 Strength, +2 Dexterity)\nTrance: \nBreath Weapon: Exhale destructive energy as an action. All in the area must make a saving throw with DC 8 + Wis modifier + prof bonus. It does 2d6 (+1d6 at level 6, 11, 16) damage, half as much damage on a successful save. I can use it again after a short rest.", 
	abilitySave : 6,  
	spellcastingAbility : 6, 

	features : { 

		"elven breath weapon" : {
			name : "Elven Breath Weapon",
			minlevel : 1,
			usages : 1,
			additional : ["2d6", "2d6", "2d6", "2d6", "2d6", "3d6", "3d6", "3d6", "3d6", "3d6", "4d6", "4d6", "4d6", "4d6", "4d6", "5d6", "5d6", "5d6", "5d6", "5d6"],  
			recovery : "short rest",
			tooltip : "",

			action : ["action", ""], //optional; adds the name of this choice to the action list when chosen. The options are "action", "bonus action", and "reaction" //the second value in the array is added as a suffix for the "name" of the feature when entered into the action field
		},
	}

},



RaceList["winged draconic elf"] = { 
	regExpSearch : /Winged Draconic Elf/i, 
	name : "Winged Draconic Elf", 
	sortname : "Elf, Winged Draconic", 
	source : ["HB", 0], 
	plural : "Winged Draconic Elves", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 },
    fly : { spd : 30, enc : 20 }, },

	languageProfs : ["Elvish", "Draconic", "Common"], 
		weaponsAdd : ["Elven Breath Weapon"],
	weaponOptions : {
			regExpSearch : /Elven breath weapon/i,
			name : "Elven Breath weapon",
			source : ["HB", 0],
			ability : 6,
			type : "Natural",
			damage : [2, 6, "fire/light"],
			range : "5by30-ft line",
			description : "Hits all in area; Dex save, success - half damage; Usable only twice per short rest",
			abilitytodamage : false,
			dc : true,
			idbBreathWeapon : true
		},
	vision : ["Darkvision", 60], 
	dmgres : ["Necrotic"], //optional; damage resistance(s)

	savetxt : { 
		text : ["Magic can't put me to sleep"], 
		adv_vs : ["charmed"] },
	skills : ["Perception", "Intimidiation"], 
	age : "elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old", 
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")", 
	weight : " weigh around 165 lb (130 + 2d8 \xD7 2d4 lb)", 
	improvements : "Winged Draconic Elf: +1 Strength, +2 Dexterity;", 
	scores : [1, 2, 0, 0, 0, 0], 
	trait : "Winged Draconic Elf (+1 Strength, +2 Dexterity)\nDraconic Wings: \nTrance: \nBreath Weapon: Exhale destructive energy as an action. All in the area must make a saving throw with DC 8 + Wis modifier + prof bonus. It does 2d6 (+1d6 at level 6, 11, 16) damage, half as much damage on a successful save. I can use it again after a short rest.", 
	abilitySave : 6,  
	spellcastingAbility : 6, 

			features : {
			"draconic influence" : {
				name : "Draconic Influence",
				limfeaname : "Elven Breath Weapon",
				minlevel : 1,
				usages : 1,
				additional : levels.map(function (n) {
					return (n < 6 ? 2 : n < 11 ? 3 : n < 16 ? 4 : 5) + 'd6';
				}),
				recovery : "short rest",
				action : ["action", ""],
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							if (v.theWea.edbBreathWeapon && CurrentRace.known === 'draconic elf') {
								fields.Damage_Die = (CurrentRace.level < 6 ? 2 : CurrentRace.level < 11 ? 3 : CurrentRace.level < 16 ? 4 : 5) + 'd6';
								if (CurrentRace.variant) {
									fields.Damage_Type = CurrentRace.dmgres[0];
									fields.Description = fields.Description.replace(/(dex|con) save/i, ((/cold|poison/i).test(CurrentRace.dmgres[0]) ? 'Con' : 'Dex') + ' save');
									fields.Range = (/black|blue|brass|bronze|copper/i).test(CurrentRace.variant) ? '5-ft \u00D7 30-ft line' : '15-ft cone';
								}
							};
						}
					]
				}
			}
		},
		variants : ["black", "blue", "brass", "bronze", "copper", "gold", "green", "red", "silver", "white"]
	},
	
	var Base_RaceSubList = {
	"draconic elf-black" : {
		regExpSearch : /black/i,
		name : "Black draconic elf",
		trait : "Black Draconic Elf (+1 Strength, +2 Dexterity)"
		+ "\n" + "Acid Breath Weapon:"
		+ "\n   " + "As an action, I exhale destructive energy in a 5 ft by 30 ft line."
		+ "\n   " + "All in the area must make a Dex saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 acid damage, half as much damage on a successful save."
		+ "\n   " + "The damage increases to 3d6 at level 6, 4d6 at level 11, and 5d6 at level 16."
		+ "\n   " + "I can't use this feature again until I finish a short rest.",
		dmgres : ["Acid"]
	},
	"draconic elf-blue" : {
		regExpSearch : /blue/i,
		name : "Blue draconic elf",
		trait : "Blue Draconic Elf (+1 Strength, +2 Dexterity)"
		+ "\n" + "Lightning Breath Weapon:"
		+ "\n   " + "As an action, I exhale destructive energy in a 5 ft by 30 ft line."
		+ "\n   " + "All in the area must make a Dex saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 lightning damage, half as much damage on a successful save."
		+ "\n   " + "The damage increases to 3d6 at level 6, 4d6 at level 11, and 5d6 at level 16."
		+ "\n   " + "I can't use this feature again until I finish a short rest.",
		dmgres : ["Lightning"]
	},
	"dragonborn-brass" : {
		regExpSearch : /brass/i,
		name : "Brass dragonborn",
		trait : "Brass Dragonborn (+2 Strength, +1 Charisma)"
		+ "\n" + "Fire Breath Weapon:"
		+ "\n   " + "As an action, I exhale destructive energy in a 5 ft by 30 ft line."
		+ "\n   " + "All in the area must make a Dex saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 fire damage, half as much damage on a successful save."
		+ "\n   " + "The damage increases to 3d6 at level 6, 4d6 at level 11, and 5d6 at level 16."
		+ "\n   " + "I can't use this feature again until I finish a short rest.",
		dmgres : ["Fire"]
	},
	"dragonborn-bronze" : {
		regExpSearch : /bronze/i,
		name : "Bronze dragonborn",
		trait : "Bronze Dragonborn (+2 Strength, +1 Charisma)"
		+ "\n" + "Lightning Breath Weapon:"
		+ "\n   " + "As an action, I exhale destructive energy in a 5 ft by 30 ft line."
		+ "\n   " + "All in the area must make a Dex saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 lightning damage, half as much damage on a successful save."
		+ "\n   " + "The damage increases to 3d6 at level 6, 4d6 at level 11, and 5d6 at level 16."
		+ "\n   " + "I can't use this feature again until I finish a short rest.",
		dmgres : ["Lightning"]
	},
	"dragonborn-copper" : {
		regExpSearch : /copper/i,
		name : "Copper dragonborn",
		trait : "Copper Dragonborn (+2 Strength, +1 Charisma)"
		+ "\n" + "Acid Breath Weapon:"
		+ "\n   " + "As an action, I exhale destructive energy in a 5 ft by 30 ft line."
		+ "\n   " + "All in the area must make a Dex saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 acid damage, half as much damage on a successful save."
		+ "\n   " + "The damage increases to 3d6 at level 6, 4d6 at level 11, and 5d6 at level 16."
		+ "\n   " + "I can't use this feature again until I finish a short rest.",
		dmgres : ["Acid"]
	},
	"dragonborn-gold" : {
		regExpSearch : /gold/i,
		name : "Gold dragonborn",
		trait : "Gold Dragonborn (+2 Strength, +1 Charisma)"
		+ "\n" + "Fire Breath Weapon:"
		+ "\n   " + "As an action, I exhale destructive energy in a 15 ft cone."
		+ "\n   " + "All in the area must make a Dex saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 fire damage, half as much damage on a successful save."
		+ "\n   " + "The damage increases to 3d6 at level 6, 4d6 at level 11, and 5d6 at level 16."
		+ "\n   " + "I can't use this feature again until I finish a short rest.",
		dmgres : ["Fire"]
	},
	"dragonborn-green" : {
		regExpSearch : /green/i,
		name : "Green dragonborn",
		trait : "Green Dragonborn (+2 Strength, +1 Charisma)"
		+ "\n" + "Poison Breath Weapon:"
		+ "\n   " + "As an action, I exhale destructive energy in a 15 ft cone."
		+ "\n   " + "All in the area must make a Con saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 poison damage, half as much damage on a successful save."
		+ "\n   " + "The damage increases to 3d6 at level 6, 4d6 at level 11, and 5d6 at level 16."
		+ "\n   " + "I can't use this feature again until I finish a short rest.",
		dmgres : ["Poison"]
	},
	"dragonborn-red" : {
		regExpSearch : /red/i,
		name : "Red dragonborn",
		trait : "Red Dragonborn (+2 Strength, +1 Charisma)"
		+ "\n" + "Fire Breath Weapon:"
		+ "\n   " + "As an action, I exhale destructive energy in a 15 ft cone."
		+ "\n   " + "All in the area must make a Dex saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 fire damage, half as much damage on a successful save."
		+ "\n   " + "The damage increases to 3d6 at level 6, 4d6 at level 11, and 5d6 at level 16."
		+ "\n   " + "I can't use this feature again until I finish a short rest.",
		dmgres : ["Fire"]
	},
	"dragonborn-silver" : {
		regExpSearch : /silver/i,
		name : "Silver dragonborn",
		trait : "Silver Dragonborn (+2 Strength, +1 Charisma)"
		+ "\n" + "Cold Breath Weapon:"
		+ "\n   " + "As an action, I exhale destructive energy in a 15 ft cone."
		+ "\n   " + "All in the area must make a Con saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 cold damage, half as much damage on a successful save."
		+ "\n   " + "The damage increases to 3d6 at level 6, 4d6 at level 11, and 5d6 at level 16."
		+ "\n   " + "I can't use this feature again until I finish a short rest.",
		dmgres : ["Cold"]
	},
	"dragonborn-white" : {
		regExpSearch : /white/i,
		name : "White dragonborn",
		trait : "White Dragonborn (+2 Strength, +1 Charisma)"
		+ "\n" + "Cold Breath Weapon:"
		+ "\n   " + "As an action, I exhale destructive energy in a 15 ft cone."
		+ "\n   " + "All in the area must make a Con saving throw with DC 8 + Con modifier + prof bonus."
		+ "\n   " + "It does 2d6 cold damage, half as much damage on a successful save."
		+ "\n   " + "The damage increases to 3d6 at level 6, 4d6 at level 11, and 5d6 at level 16."
		+ "\n   " + "I can't use this feature again until I finish a short rest.",
		dmgres : ["Cold"]
	}
};
