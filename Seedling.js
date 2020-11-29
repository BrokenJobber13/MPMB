var iFileName = "Seedling.js"; 
RequiredSheetVersion(12.999); 

RaceList["seedling"] = { 
	regExpSearch : /seedling/i, 
	name : "Seedling", 
	source : ["HB", 0], 
	plural : "Seedlings", 
	size : 4, 
	speed : { 
		walk : { spd : 25, enc : 15 }, 	},
	languageProfs : ["Elvish", "Sylvan"], 
	savetxt : { 
		text : ["Dex stealth when obsured by plants", "Adv on Prof abilities while in direct sunlight", "Ignore plan based terrain"], 
},

	age : "Seedlings are the children of nature, and grow quickly in the spring of their youth, reaching maturity often around the age of 20. However, their growth slows greatly through the later seasons of life, allowing them to live two centuries or more on average.", 
	height : " range from 3 to over 4 feet tall (3'2\" + 2d8\")", 
	weight : " weigh around 35 lb (30 + 2d8 \xD7 2d4 lb)", 
	improvements : "Seedling: +1 Dexterity, +2 Charisma;", 
	scores : [0, 1, 0, 0, 0, 2], 
	trait : "Seedling (+1 Dexterity, +2 Charisma)\nPhotosynthesis: You do not need to eat or drink as long as you spend at least 4 hours a day in direct sunlight and can converse with plants as if you shared a language.\nSunny Optimist: When you make an ability check, saving throw or attack you are proficient in while in direct sunlight, you can reroll the die and you must use the new roll.\nBlossoming Magic: You know the druidcraft cantrip. Once you reach 3rd level, you can cast the entangle spell once. Once you reach 5th level, you can also cast the plant growth spell once. You regain the ability to cast them this way when you finish a long rest.", 
	abilitySave : 2,  
	spellcastingAbility : 6, 

  features : { 
		"druidcraft" : { 
			name : "Blossoming Magic (Level 1)", 
      limfeaname : "Druidcraft",
			minlevel : 1, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Blossoming Magic (level 1)",
				spells : ["druidcraft"],
				selection : ["druidcraft"],
				atwill : true,
			},
    },
      "entangle" : { 
			name : "Blossoming Magic (Level 3)", 
      limfeaname : "Entangle",
			minlevel : 3, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Blossoming Magic (level 3)",
				spells : ["entangle"],
				selection : ["entangle"],
				oncelr : true,
			},
      },
      "plant growth" :{
      name : "Blossoming Magic (Level 5)",
      limfeaname : "Plant Growth",
      minlevel : 5,
      tooltip : "",
      spellcastingBonus : {
      name : "Blossoming Magic (Level 5)",
      spells : ["plant growth"],
      selection : ["plant growth"],
      oncelr : true,
      },
      },
      },
      };
