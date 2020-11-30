var iFileName = "Planetar Angel.js"; 
RequiredSheetVersion(12.999); 

RaceList["planetar"] = { 
	regExpSearch : /planetar/i, 
	name : "Planetar", 
	sortname : "Angel, Planetar", 
	source : ["HB", 0], 
	plural : "Planetars", 
	size : 2, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 
		climb : { spd : 40, enc : 0 }, },
	languageProfs : ["Common", "Celestial"], 
	vision : [["Darkvision", 60]], 
	dmgres : ["Radiant"], 
	savetxt : { 
		text : ["Adv on Insight checks to discern lies"], 
		adv_vs : ["exhausted", "frightened", "charmed"] },
	weaponprofs : [false, false, ["greatsword"]], 
	armor : [false, false, true, true], 
	skills : ["Religion"], 
	improvements : "Planetar Angel: +1 Strength, +1 Constitution, +1 Charisma;", 
	scores : [1, 0, 1, 0, 0, 1], 
	trait : "Planetar Angel (+1 Strength, +1 Constitution, +1 Charisma)\nI am a Celestial. ",
	abilitySave : 3,  
	spellcastingAbility : 6, 
	  features : { 
		"sacred flame" : { 
			name : "Celestial Heritage (Level 1)", 
      limfeaname : "Sacred Flame",
			minlevel : 0, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Celestial Heritage (level 1)",
				spells : ["sacred flame"],
				selection : ["sacred flame"],
				atwill : true,
			},
    },
      "guiding bolt" : { 
			name : "Celestial Heritage (Level 3)", 
      limfeaname : "Guiding Bolt",
			minlevel : 3, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Celestial Heritage (level 3)",
				spells : ["guiding bolt"],
				selection : ["guiding bolt"],
				oncelr : true,
			},
      },
     "spiritual weapon" : { 
			name : "Celestial Heritage (Level 5)", 
      limfeaname : "Spiritual Weapon",
			minlevel : 5, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Celestial Heritage (level 5)",
				spells : ["spiritual weapon"],
				selection : ["spiritual weapon"],
				oncelr : true,
			},
     },
     },
     };
