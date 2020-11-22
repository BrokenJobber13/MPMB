var iFileName = "Glacier Dwarf.js"; 
RequiredSheetVersion(12.999); 

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
		text : ["Survival checks in cold climates"], 
		adv_vs : ["cold"]
	},

	weaponprofs : [false, false, ["battleaxe", "handaxe", "spear", "warpick"]], 
	armor : [false, false, true, true], 
	
	skillstxt : "Choose any two skills",  
	age : " reach adulthood in their late 40's and live around 300 years", 
	height : " range from 4 to over 5 feet tall (4'9\" + 2d8\")", 
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)", 
	improvements : "Glacier Dwarf: +1 Dexterity, +1 Strength, +Consititution;", 
	scores : [1, 1, 2, 0, 0, 0], 
	trait : "Glacier Dwarf (+1 Dexterity, +1 Strength +2 Consititution)\nDwarven Resilience: Unlike the dwarves of the mainland, glacier dwarves possess an innate resistance to cold\nIce  Walk:\n I can move across and climb icy surfaces without needing to make an ability check. Additionally\ndifficult terrain composed of ice or snow doesn’t cost you extra moment and my speed is not reduced by wearing heavy armor\nIcebound Navigation: Whenever you make a Wisdom (Survival) checks for navigating forzen territory, Iam\nconsidered proficient in the Survival skill and add double your proficiency bonus to the check.", 

};
