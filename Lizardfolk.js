var iFileName = "Lizardfolk.js"; 
RequiredSheetVersion(12.999); 

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
	trait : "Lizardfolk Blackscale (+2 Constitution, +1 Strength) Bite: I can use my fanged maw to make unarmed strikes dealing 1d6 piercing damage." + (typePF ? "\n" : " ") + "Cunning Artisan: As part of a short rest I can harvest parts of a slain creature to make a shield, club, javelin, or 1d4 darts/blowgun needles." + (typePF ? "\n" : " ") + "Hold Breath: I can hold my breath for up to 15 minutes at a time." + (typePF ? "\n" : " ") + "Natural Armor: I have an AC of 13 + Dexterity modifier + shield." + (typePF ? "\n" : " ") + "Acid Resistance – You have resistance to acid damage.\nPowerful Build: I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift.\n\nAggressive: As a bonus action, I can move up to my speed toward an enemy that I can see or hear. I must end my move closer to this enemy than I started.",
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
	trait : "Lizardfolk Poisondusk(+2 Constitution, +1 Dexterity)\nChameleon skin\nI can try to hide when you are unobscured by pressing yourself up against a olsid surface thats atleast as tall and wide as you. You can hide by pressing against the ground.\n While hiding this way you have advantage on Dex (stelth) check, provided you are out of combat and you remian there without moving or takng actions.\nRacial poison - As part of  long rest you can distill poison from your own glands.\n You gain a number of odese of racial posion equal to half your prof rounded down.\nYou can use a dose to coat one slashing or piercing weapon or upto 3 pieces of ammo.\nApplying the poson takes an action. A creature hit takes 1d4 poison damage.\nOnce applied, the posion retais potency for 1mnutes before drying. Doses last 24hours only.\nPredator - I have advantage on Wisdom (survival)checks to follows tracks and hunt wild game."
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
