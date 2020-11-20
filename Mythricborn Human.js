var iFileName = "Mythricborn Human.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); 

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
