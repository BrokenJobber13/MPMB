var iFileName = "Elnofae.js"; 
RequiredSheetVersion(12.999); 

RaceList["Elnofae"] = { 
	regExpSearch : /elnofae/i, 
	name : "Elnofae", 
	source : ["HB", 0], 
	plural : "Elnofae", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 
    fly : { spd : "fixed 50", enc : "fixed 50" },
          },
	languageProfs : ["Common", "Slyvan", "Elnofae"], 
	vision : ["Darkvision", 60], 
	savetxt : { 
		text : ["Vulnerable to silvered weapons", "Disadv to attack rolls with nonmagical metal weapons or while wearing metal."], 	},
	age : " reach adulthood in their late teens and live around 100 years", 
	height : " range from 4 to over 7 feet tall (3'9\" + 2d8\")", 
	weight : " weigh around 95 lb (80 + 2d8 \xD7 2d4 lb)", 
	improvements : "Elnofae: +2 Dexterity, +1 Charisma;",
	scores : [0, 2, 0, 0, 0, 1], 
	trait : "Elnofae (+2 Dexterity, +1 Charisma)\n I can't fly while wearing medium or heavy armour.", 
	spellcastingAbility : 6, 
	features : { 
		"druidcraft" : { 
			name : "Part of Nature", 
      limfeaname : "Druidcraft",
			minlevel : 1, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Part of Nature (level 1)",
				spells : ["druidcraft"],
				selection : ["druidcraft"],
				atwill : true,
			},
    },
      "entangle" : { 
			name : "Part of Nature", 
      limfeaname : "Entangle",
			minlevel : 3, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Part of Nature (level 3)",
				spells : ["entangle"],
				selection : ["entangle"],
				atwill : true,
			},
      },
     "spike growth" : { 
			name : "Part of Nature", 
      limfeaname : "Spike Growth",
			minlevel : 5, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Part of Nature (level 5)",
				spells : ["spike growth"],
				selection : ["spike growth"],
				atwill : true,
			},
     },
      },
			

};
