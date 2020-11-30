var iFileName = "Spellscale.js"; 
RequiredSheetVersion(12.999); 

RaceList["spellscale"] = { 
	regExpSearch : /^(?=.*spell)(?=.*scale).*$/i, 
	name : "Spellscale", 
	sortname : "Spellscale", 
	source : ["HB", 0], 
	plural : "Spellscales", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 	},


	languageProfs : ["Common", "Draconic"], 
	vision : [["Darkvision", 30]], 
	dmgres : ["Fire"], 
	age : "Spellscales mature quickly compared to other humanoids, often starting their adventuring lives earlier than members of most other races. They reach adulthood at approximately 12 years old, and can live to be 140-160 years old.", 
	height : " range from 4 to over 5 feet tall (3'9\" + 2d8\")", 
	weight : " weigh around 75 lb (65 + 2d8 \xD7 2d4 lb)", 
	improvements : "Spellscale: +2 Charisma, +1 Wisdom;", 
	scores : [0, 0, 0, 0, 1, 2], 
	trait : "Spellscale (+2 Charisma, +1 Wisdom)\nBlood Quickening: During a S/L rest, I can spend time meditating upon one aspect of my dragon ancestors. When you do, select one skill. At any point before your next short or long rest, you may choose to gain advantage on one check using that skill. Once you have used this ability, I must repeat the routine during another short or long rest. Even if you do not use the ability, you must still meditate to regain it.\nDraconic Protection:once per long rest, as a reaction, you can cause your scales to briefly harden to increase your defenses, granting the effect of the shield spell. Once you have used this ability, you cannot do so again until you have completed a long rest.", 

	spellcastingAbility : 6, 
	
	features : { 
		"create bonfire" : { 
			name : "Firetouched", 
      			limfeaname : "Create Bonfire",
			minlevel : 1, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Firetouched (level 1)",
				spells : ["create bonfire"],
				selection : ["create bonfire"],
				atwill : true,
			},
    },
      			"shield" : { 
			name : "Draconic Protection", 
      			limfeaname : "Shield",
			minlevel : 1, 
			tooltip : "", 
      			action : ["action", ""],
			spellcastingBonus : { 
				name : "Draconic Protection (level 1)",
				spells : ["shield"],
				selection : ["shield"],
				oncelr : true,
			},
      },
      },
};
