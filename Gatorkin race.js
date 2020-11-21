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
		swim : { spd : 40, enc : 30 }
	},
	skillstxt : "Choose any two skills",
	languageProfs : ["Draconic", 1],
	weaponOptions : {
		baseWeapon : "sharks greater bite",
		regExpSearch : /sharks greater bite/i,
		name : "Sharks Greater Bite",
		source : ["HB", 0],
		damage : [2, 6, "piercing"]
	},
	weaponsAdd : ["Sharks Greater Bite"],
	armorOptions : {
		regExpSearch : /^(?=.*natural)(?=.*armou?r).*$/i,
		name : "Natural Armor",
		source : ["V", 113],
		ac : 13
	},
	armorAdd : "Natural Armor",
  	savetxt : { 
		adv_vs : ["on all Str checks in water", "being frightened", "Stealth and hiding in water"] },
		skills : ["Insight", "Deception"],
	age : " reach maturity around age 14 and rarely live longer than 60 years",
	height : " range from 5 to well over 6 feet tall (4'9\" + 2d10\")",
	weight : " weigh around 200 lb (120 + 2d10 \xD7 2d6 lb)",
	heightMetric : " range from 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 95 kg (55 + 5d10 \xD7 4d6 / 10 kg)",
	
	improvements : "Gatorkin : +1 Constitution, +1 Wisdom, +2 Strength;", 

	scores : [2, 0, 1, 0, 1, 0],
	trait : "Gatorkin (+2 Strength +1 Constitution, +1 Wisdom) Powerful jaws - My jaws cause more damage on impact and allow me as a Bonus action to grapple the target." + (typePF ? "\n" : " ") + "Cunning Artisan: As part of a short rest I can harvest parts of a slain creature to make a shield, club, javelin, or 1d4 darts/blowgun needles. This requires a suitable corpse and appropriate tools." + (typePF ? "\n" : " ") + "Hold Breath: I can hold my breath for up to 30 minutes at a time." + (typePF ? "\n" : " ") + "Natural Armor: I have an AC of 13 + Dexterity modifier + shield." + (typePF ? "\n" : " ") "
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
