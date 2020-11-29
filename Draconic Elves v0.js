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

};
