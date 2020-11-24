var iFileName = "Tiefling Gnoll.js"; 
RequiredSheetVersion(12.999); 
RaceList["tiefling gnoll"] = { 
	regExpSearch : /Tiefling Gnoll/i, 
	name : "Tiefling Gnoll", 
	sortname : "Tiefling Gnoll", 
	source : ["HB", 0], 
	plural : "Tiefling Gnolls", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 	},

	toolProfs : ["Artisan's Tools", 1], 
	languageProfs : ["Gnoll", "Abyssal", 1], 
	weaponsAdd : ["Gnoll Claws"],
		
			weaponOptions : {
			regExpSearch : /Gnoll Claws/i,
			name : "Gnoll Claws",
			source : ["HB", 0],
			ability : 2,
			type : "Natural",
			damage : [1, 6, "slashing"],
			range : "Melee",
			description : "Natural, Light",
			abilitytodamage : true, },
	vision : ["Darkvision", 60], 
	dmgres : ["Poison"], 
	savetxt : { 
		adv_vs : ["poison", "diseae"] },

	weaponprofs : [true, false, [""]], 
	skillstxt : "Choose any two skills",  
	age : "Gnoll Tieflings mature around 16, but live a few years shorter than humans, rarly reaching 70 or 80", 
	height : " range from 6 to over 7 feet tall (5'9\" + 2d8\")", 
	weight : " weigh around 200 lb (200 + 2d8 \xD7 2d4 lb)", 
	improvements : "Tiefling Gnoll: +2 Dexterity or Strength, +1 Consititution;", 
	scores : [0, 0, 1, 0, 0, 0], 
	trait : "Tiefling Gnoll (+2 Dexterity or Strength, +1 Consititution)\n   .", 

	abilitySave : 3,  
	spellcastingAbility : 3, 
	
  features : { 
		"green flame blade" : { 
			name : "Fiends Heritage (Level 1)", 
      limfeaname : "Green Flame Blade",
			minlevel : 0, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Fiends Heritage (level 1)",
				spells : ["green flame blade"],
				selection : ["green flame blade"],
				atwill : true,
			},
    },
      "pass without trace" : { 
			name : "Fiends Heritage (Level 3)", 
      limfeaname : "Pass Without Trace",
			minlevel : 3, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Fiends Heritage (level 3)",
				spells : ["pass without trace"],
				selection : ["pass without trace"],
				oncelr : true,
			},
      },
     "Hunter's mark" : { 
			name : "Fiends Heritage (Level 5)", 
      limfeaname : "Hunter's mark",
			minlevel : 5, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Fiends Heritage (level 5)",
				spells : ["Hunter's mark"],
				selection : ["Hunter's mark"],
				oncelr : true,
			},
     },
  },
};
