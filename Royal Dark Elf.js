var iFileName = "Royal Dark Elf.js"; 
RequiredSheetVersion(12.999); 

RaceList["royal dark elf"] = { 
		regExpSearch : /Royal Dark Elf/i,
		name : "Royal Dark Elf",
		sortname : "Elf, Royal Dark",
		source : ["HB", 0],
		plural : "Royal Dark elves",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 }
		},
		languageProfs : ["Common", "Elvish", 1],
		vision : ["Darkvision", 120],
		savetxt : {
			text : ["Magic can't put me to sleep"],
			adv_vs : ["charmed"]
		},
		weaponProfs : [false, false, ["rapier", "shortsword", "hand crossbow", "longbow"]],
		skills : ["Perception"],
		age : " typically claim adulthood around age 100 and can live to be 750 years old",
		height : " range from under 5 to over 6 feet tall (4'6\" + 2d10\")",
		weight : " weigh around 115 lb (90 + 2d10 \xD7 1d4 lb)",
		heightMetric : " range from under 1,5 to over 1,8 metres tall (140 + 5d10 cm)",
		weightMetric : " weigh around 55 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
		scores : [0, 2, 0, 1, 0, 0],
		trait : "High Elf (+2 Dexterity, +1 Intelligence)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, thus needing only 4 hours for a long rest.\nCantrip: I know the cantrip Light. Intelligence is my spellcasting ability for it.",
		spellcastingAbility : 4,
		features : {
		"light" : { 
			name : "Royal Drow Magic", 
     			limfeaname : "Light",
			minlevel : 1, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Royal Drow Magic",
				spells : ["light"],
				selection : ["light"],
				atwill : true,
			},
    },
    },
};
