RaceList["Mythricborn Taintblood Devil"] = { 
	regExpSearch : /Mythricborn Taintblood Devil/i, 
	name : "Mythricborn Taintblood Devil", 
	source : ["HB", 0], 
	plural : "Mythric Taint's", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 	},
	languageProfs : ["Common", "Infernal", 2], 
	vision : ["Darkvision", 30], 
	dmgres : ["Poison", "Necrotic"], 
	savetxt : { 
		text : ["Adv on social checks with demons.", "Disadv on social checks demons make on me.", "on Persuasion to Good alignments"], 	},
  weaponprofs : [false, false, ["gladius", "spears", "claymore", "staff"]],
	age : " A Mythricborn Taintblood is rare so lifespare isn't known, they maturely slowert than others, still looking young at 20.", 
	height : " range from 5 to over 7 feet tall (4'9\" + 2d8\")", 
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)", 
	improvements : "Taintblood Devil: +2 Dexterity, +1 Intelligence, +1 Charisma;", 
	scores : [0, 2, 0, 1, 0, 1], 
	trait : "Taintblood Devil (+2 Dexterity, +1 Intelligence, +1 Charisma)\nHeritage:\nI bear a mark on my body from my evil parent\nMask of the Taint:\nI can make minor changes to my looks like having normal eyes, hide teeth to appear human.\nPoisonous Veins: If a creature consumes my blood, it takes a Con save throw DC8+Prof+Spellcasting ability mod.\n on fail is Poisoned for 1min, also 2d6 damage a start of turn, target can repeat at end of their turn.", 
	abilitySave : 5,  
  spellcastingAbility : 6, 
	features : { 
		"light" : { 
			name : "Mythric Heritage", 
      limfeaname : "Light",
			minlevel : 1, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Mythric Heritage (level 1)",
				spells : ["light"],
				selection : ["light"],
				atwill : true,
			},
    },
		"control flames" : { 
			name : "Mythric Heritage 2", 
      			limfeaname : "Control Flames",
			minlevel : 1, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Mythric Heritage 2(level 1)",
				spells : ["control flames"],
				selection : ["contol flames"],
				atwill : true,
			},
    },
    "mulan's bond of honor" : { 
			name : "Mulan's Bond of Honor", 
			minlevel : 1, 
			usages : [ "3", "3", "3", "4", "4" , "4", "4", "5", "5", "5", "5", "6", "6" , "6", "6", "7", "7", "7", "7", "8" ], //optional; number of times it can be used. This can be one value, but can also be an array of 20 values, one for each level
			additional : [ "2d6", "2d6", "2d6", "2d6", "2d6", "2d6", "3d6", "3d6", "3d6", "3d6", "3d6", "3d6", "4d6", "4d6", "4d6", "5d6", "4d6", "4d6", "5d6", "5d6" ],
			recovery : "long rest", 
			tooltip : "", 
			action : ["bonus action", ""], 
},
  },
};
