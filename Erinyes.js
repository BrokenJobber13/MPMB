var iFileName = "Erinyes.js"; 
RequiredSheetVersion(12.999); 

RaceList["erinyes"] = { 
	regExpSearch : /erinyes/i, 
	name : "Erinyes", 
	source : ["HB", 0], 
	plural : "Erinyes", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 
		fly : { spd : 40, enc : 30 }, 	},
	languageProfs : ["Common", "Infernal"], 
	addarmor : "Plate Armor", 
	vision : [["Darkvision", 60]], 
	weaponprofs : [false, false, ["longsword", "longbow"]], 
	armor : [false, false, true, true], 
	improvements : "Erinyes: +1 Strength, +1 Constitution, +1 Charisma;", 
	scores : [1, 0, 1, 0, 0, 1], 
	trait : "Erinyes (+1 Strength, +1 Constitution, +1 Charisma)\nI am a Devil (Fiend) and can perform the ritual, Hellish Attack.\nHellish Attack: Hellish Attack at level 3 you may spend 1 minute with a melee weapon to fill it with hellish power. Attacks made with this weapon now deal an extra 1d6 poison damage on a hit. You can have no more than one weapon empowered in this way.",
features : {
    "hellish attack" : { 
			name : "Hellish Attack", 
			minlevel : 1,  
			tooltip : "Duration:1min. +1d6poison dmg", 
			action : ["action", ""], 
			},
      },
};
