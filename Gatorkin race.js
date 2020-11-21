var iFileName = "Gatorkin.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned


RaceList["gatorkin"] = {
	regExpSearch : /gatorkin/i,
	name : "Gatorkin",
	source : ["HB", 0],
	plural : "Gatorkin",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : 30, enc : 20 }
	},
	skillstxt : "Choose two from Animal Handling, Nature, Perception, Stealth, and Survival",
	languageProfs : ["Draconic", 1],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /\bbite\b/i,
		name : "Bite",
		source : ["V", 113],
		damage : [2, 6, "piercing"]
	},
	weaponsAdd : ["Bite"],
	armorOptions : {
		regExpSearch : /^(?=.*natural)(?=.*armou?r).*$/i,
		name : "Natural Armor",
		source : ["V", 113],
		ac : 13
	},
	armorAdd : "Natural Armor",
  	savetxt : { // Optional; this attribute defines entries to add to the field for "Saving Throw Advantages / Disadvantages"

		text : ["Dex save vs. area effects: fail \u2015 half dmg, success \u2015 no dmg", "Magic can't put me to sleep"], // Optional; this is an array of strings, and each of those strings is added to the field exactly as presented here

		immune : ["poison", "disease"], // Optional; this is an array of strings that the character is immune to. This is put in the field after the text "Immune to ", so in this example it would result in "Immune to poison and disease"

		adv_vs : ["traps", "charmed"] // Optional; this is an array of things that the character has advantage on saves against. This is put in the field after the text "Adv. on saves vs. ", so in this example it would result in "Adv. on saves vs. traps and charmed"
	},
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
	trait : "Lizardfolk (+2 Constitution, +1 Wisdom) Bite: I can use my fanged maw to make unarmed strikes dealing 1d6 piercing damage." + (typePF ? "\n" : " ") + "Cunning Artisan: As part of a short rest I can harvest parts of a slain creature to make a shield, club, javelin, or 1d4 darts/blowgun needles. This requires a suitable corpse and appropriate tools." + (typePF ? "\n" : " ") + "Hold Breath: I can hold my breath for up to 15 minutes at a time." + (typePF ? "\n" : " ") + "Natural Armor: I have an AC of 13 + Dexterity modifier + shield." + (typePF ? "\n" : " ") + "Hungry Jaws: As a bonus action, once per short rest, I can make a special bite attack and if it hits I gain temporary HP equal to my Con modifier (min 1)."
};
