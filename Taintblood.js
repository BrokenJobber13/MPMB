var iFileName = "Taintblood.js";
RequiredSheetVersion(12.999); 
RaceList["Taintblood Devil"] = { 
	regExpSearch : /Taintblood Devil/i, 
	name : "Taintblood Devil", 
	source : ["HB", 0], 
	plural : "Taintblood's", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 	},
	languageProfs : ["Common", "Infernal"], 
	vision : ["Darkvision", 30], 
	dmgres : ["Poison"], 
	savetxt : { 
		text : ["Adv on social checks with demons.", "Disadv on social checks demons make on me."], 	},
	age : " A taintblood lives for about two centuries, reaching maturity at the age of 20", 
	height : " range from 5 to over 7 feet tall (4'9\" + 2d8\")", 
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)", 
	improvements : "Taintblood Devil: +2 Dexterity, +1 Charisma;", 
	scores : [0, 2, 0, 0, 0, 1], 
	trait : "Taintblood Devil (+2 Dexterity, +1 Charisma)\nHeritage:\nI bear a mark on my body from my evil parent\nMask of the Taint:\nI can make minor changes to my looks like having normal eyes, hide teeth to appear human.\nPoisonous Veins: If a creature consumes my blood, it takes a Con save throw DC8+Prof+Spellcasting ability mod.\n on fail is Poisoned for 1min, also 2d6 damage a start of turn, target can repeat at end of their turn.", 
	abilitySave : 5,  
};

RaceList["taintblood demon"] = { 
	regExpSearch : /Taintblood Demon/i, 
	name : "Taintblood Demon", 
	source : ["HB", 0], 
	plural : "Taint's", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 	},
	languageProfs : ["Common", "Abyssal"], 
	vision : ["Darkvision", 30], 
	dmgres : ["Fire", "Radiant"], 
	savetxt : { 
		text : ["Adv social checks on demons", "Disadv on social checks by infernals"], 	},
	age : " A taintblood lives for about two centuries, reaching maturity at the age of 20", 
	height : " range from 5 to over 7 feet tall (4'9\" + 2d8\")", 
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)", 
	improvements : "Taintblood Demon: +1 Charisma, +2 Strength;", 
	scores : [1, 0, 0, 0, 0, 1], 
	trait : "Taintblood Demon (+1 Charisma, +2 Strength)\nHeritage - I bear a mark on my body from my evil parent\nMask of the Taint\nI can make minor changes to my looks like having normal eyes, hide teeth to appear human.\nDemonic Flames\nWhen I deal Fire damage, it ignores as resistances but not immunities.", 
	abilitySave : 5,  
	spellcastingAbility : 6, 

	features : { 
		"fire bolt" : { 
			name : "Fiery Veins (Level 1)", 
      limfeaname : "fire bolt",
			minlevel : 1, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Fiery Veins (level 1)",
				spells : ["fire bolt"],
				selection : ["fire bolt"],
				atwill : true,
			},
    },		
};
