var iFileName = "Winterborn Human.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); 

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
	age : " reach adulthood in their late teens and live around 100 years", //optional; the age tooltip/mouseover text (will be displayed in combination with the "plural" entry)

	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")", //optional; the height tooltip/mouseover text (will be displayed in combination with the "plural" entry)

	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)", //optional; the weight tooltip/mouseover text (will be displayed in combination with the "plural" entry)

	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)", //optional; the height tooltip/mouseover text (will be displayed in combination with the "plural" entry), when the metric system is chosen

	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)", //optional; the weight tooltip/mouseover text (will be displayed in combination with the "plural" entry), when the metric system is chosen

	improvements : "Winterborn Human: +1 Free Choice, +2 Constitution;", //required; the text that is displayed when listing all the ability score improvements

	scores : [0, 0, 1, 0, 0, 0], //required; the ability score improvements as used by the Ability Score dialog. The syntax is: [Str, Dex, Con, Int, Wis, Cha]

	trait : "Winterborn Human (+1 Free Choice, +2 Constitution)\nCelestial Legacy:\n   I know the Light cantrip.\n   Once I reach 3rd level, I can cast Lesser Restoration once per long rest.\nBreath Weapon: Exhale destructive energy as an action with a size, shape, saving throw type, and damage type as found in the table. All in the area must make a saving throw with DC 8 + Wis modifier + prof bonus. It does 2d6 (+1d6 at level 6, 11, 16) damage, half as much damage on a successful save. I can use it again after a short rest.", //required; the racial trait as it will be put in the Racial Trait field on the second page (note that "\n" is a line break).

	abilitySave : 5,  //optional; the ability score to use for the Ability Saving Throws. Remove this line if your race has no Ability that requires Saving Throws. (Str=1, Dex=2, Con=3, Int=4, Wis=5, Cha=6)

	

	features : { 
		"glory over death" : { 
			name : "Glory over Death", 
			minlevel : 1, 
			usages : 1, 
			recovery : "long rest", 
			action : ["action", ""], 
			},

},
};
