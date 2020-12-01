var iFileName = "Hellforged.js"; 
RequiredSheetVersion(12.999); 


RaceList["nightcrawler hellforged"] = { 
	regExpSearch : /^(?=.*nightcrawler)(?=.*hellforged).*$/i, 
	name : "Nightcrawler Hellforged", 
	sortname : "Hellforged, Nightcawler", 
	source : ["HB", 0], 
	plural : "Hellion's", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 	},
	languageProfs : ["Abyssal or Infernal"],  
	addarmor : "Natural Armor", 
	vision : ["Darkvision", 60], 
	dmgres : ["Poison", "Fire"], 
	savetxt : { 
		text : ["Adv all Stealth checks in Dim light/Darkness"],
		immune : ["poison"], 	},
	skills : [""], 
	age : "Built at full height, the Hellforged were designed to last for centuries at ageless warriors", 
	height : " range from 5 to  6 feet tall (4'9\" + 2d8\")", 
	weight : " weigh around 255 lb (250 + 2d8 \xD7 2d4 lb)", 
	improvements : "Painkiller Hellforged: +1 Strength, +2 Dexterity;", 
	scores : [1, 2, 0, 0, 0, 0], 
	trait : "Painkiller Hellforged (+1 Strength, +2 Dexterity)\n.", 
	spellcastingAbility : 3,
	features : { 
		"minor illusion" : { 
			name : "Starless", 
      			limfeaname : "Minor Illusion",
			minlevel : 1, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Starless (level 1)",
				spells : ["minor illusion"],
				selection : ["minor illusion"],
				atwill : true,
			},
    },
      		"inflict wounds" : { 
			name : "Starless", 
      			limfeaname : "Inflict Wounds",
			minlevel : 3, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Starless (level 3)",
				spells : ["inflict wounds"],
				selection : ["inflict wounds"],
				oncelr : true,
			},
      },
     		"shadow blade" : { 
			name : "Starless", 
      			limfeaname : "Shadow Blade",
			minlevel : 5, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Starless (level 5)",
				spells : ["shadow blade"],
				selection : ["shadow blade"],
				oncelr : true,
			},
     },
      },
};

RaceList["hellion hellforged"] = { 
	regExpSearch : /^(?=.*hellion)(?=.*hellforged).*$/i, 
	name : "Hellion Hellforged", 
	sortname : "Hellforged, Hellion", 
	source : ["HB", 0], 
	plural : "Hellion's", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 	},
	languageProfs : ["Abyssal or Infernal"], 
	addarmor : "Natural Armor", 
	vision : ["Darkvision", 60], 
	dmgres : ["Poison", "Fire"], 
	savetxt : { 
		text : ["Double Prof to checks for Devils"],
		immune : ["poison"], 	
		adv_vs : ["Cha checks v Devils"],	},
	skills : [""], 
	age : "Built at full height, the Hellforged were designed to last for centuries at ageless warriors", 
	height : " range from 6 to over 8 feet tall (5'9\" + 2d8\")", 
	weight : " weigh around 255 lb (250 + 2d8 \xD7 2d4 lb)", 
	improvements : "Painkiller Hellforged: +1 Strength, +2 Intelligence or Charisma;", 
	scores : [0, 0, 2, 0, 0, 0], 
	trait : "Painkiller Hellforged (+1 Strength, +2 Intelligence or Charisma)\n.", 
	spellcastingAbility : 4,
		features : { 
		"produce flame" : { 
			name : "Brimstone Soul", 
      			limfeaname : "Produce Flame",
			minlevel : 1, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Brimstone Soul (level 1)",
				spells : ["produce flame"],
				selection : ["produce flame"],
				atwill : true,
			},
    },
      		"hellish rebuke" : { 
			name : "Brimstone Soul", 
      			limfeaname : "Hellish Rebuke",
			minlevel : 3, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Brimstone Soul (level 3)",
				spells : ["hellish rebuke"],
				selection : ["hellish rebuke"],
				oncelr : true,
			},
      },
     		"scorching ray" : { 
			name : "Brimstone Soul", 
      			limfeaname : "Scorching Ray",
			minlevel : 5, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Brimstone Soul (level 5)",
				spells : ["scorching ray"],
				selection : ["scorching ray"],
				oncelr : true,
			},
     },
      },
};









RaceList["painkiller hellforged"] = { 
	regExpSearch : /^(?=.*painkiller)(?=.*hellforged).*$/i, 
	name : "Painkiller Hellforged", 
	sortname : "Hellforged, Painkiller", 
	source : ["HB", 0], 
	plural : "Painkiller's", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 	},
	languageProfs : ["Abyssal or Infernal"], 
	addarmor : "Natural Armor", 
	vision : ["Darkvision", 60], 
	dmgres : ["Poison", "Fire"], 
	savetxt : { 
		immune : ["poison"], 	},
	skills : ["Athletics"], 
	age : "Built at full height, the Hellforged were designed to last for centuries at ageless warriors", 
	height : " range from 6 to over 8 feet tall (5'9\" + 2d8\")", 
	weight : " weigh around 255 lb (250 + 2d8 \xD7 2d4 lb)", 
	improvements : "Painkiller Hellforged: +1 Strength, +2 Constitution;", 
	scores : [1, 0, 2, 0, 0, 0], 
	trait : "Painkiller Hellforged (+1 Strength, +2 Constitution)\nHell Patrol - As a bonus action, I can spark the flame within and ignite my melee weapon. A creature hit takes an extra 1d4 fire damage, duration 1min. Once per SR.", 
	carryingCapacity : 2,
	features : { 
		"hell patrol" : { 
			name : "Hell Patrol", 
			minlevel : 1, 
			usages : 1, 
			recovery : "short rest", 
			tooltip : " (Duration: 1min, Extra 1d4Fire dmg)", 
			action : ["bonus action", ""], 
			},
	},
};
