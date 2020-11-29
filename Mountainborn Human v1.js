var iFileName = "Mountainborn Human.js"; 
RequiredSheetVersion(12.999); 

RaceList["mountainborn human"] = { 
	regExpSearch : /^(?=.*mountainborn)(?=.*human).*$/i, 

	name : "Mountainborn Human", 
	source : ["HB", 0], 
	plural : "Mountainborn Human", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, },
	toolProfs : ["Smith's or Mason's tools", 1], 
	languageProfs : ["Common", 1], 
	savetxt : { 
		text : ["I can ignore difficult Rocky terrain", "double Prof for Str checks."], 	},
	weaponprofs : [false, false, ["light hammer", "warhammer"]], 
	armor : [false, false, false, false], 
	skillstxt : "Choose any two skills",  
	age : " reach adulthood in their late teens and live around 100 years", 
	height : " range from 5 to over 8 feet tall (4'9\" + 3d8\")", 
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)", 
	improvements : "Mountainborn Human: +1 Free Choice, +2 Strength;", 
	scores : [2, 0, 0, 0, 0, 0], 
	trait : "Mountainborn Human (+1 Free Choice, +2 Strength)\nMountaineer\nWhenever you make a Strength(Athletics) check to climb rocks, you are considered proficient in the Athletics skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.\nStrong as a Rock\nYour hit point maximum increases by 1 and by 1 every time you gain a level.",
	carryingCapacity : 2,
	calcChanges : {
			hp : function (totalHD) { return [totalHD, "Mountaineer"]; },
},
};
