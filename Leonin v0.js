Leonin Traits
Strength score increases by 2. 
Age.Leonin reach adulthood around the age of 15, and generally live to be about 150 years old.
Size.Leonin average between 6 and 7 feet tall and weigh between two and three hundred pounds. Your size is Medium.
Speed.Your base walking speed is 30 feet.
Bite.Your strong jaws are a natural weapon you deal piercing damage equal to 1d6 + your Strength modifier,
Roar.As an action, you can release a terrifying roar. Any creature within 20 feet of you that can hear you must make a Wisdom saving throw (DC 8 + your Charisma modifier + your 
proficiency bonus), or become frightened of you for 1 minute. 
The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. 
You can’t use this trait again until after you complete a short or long rest.
Regal Presence.Leonin are physically impressive, although 
not all choose to channel that advantage in the same way. 
Choose proficiency in one of the following skills: Intimidation, Performance, or Persuasion.
Languages Common +1
Grey Leonin
choice of your Intelligence or Wisdom score increases by 1.
Legacy of Shadow.You know the toll the deadcantrip. 
When 
you reach 3rd level, you can cast the dissonant whispersspell 
once with this trait and regain the ability to do so when you 
finish a long rest. 
When you reach 5th level, you can cast the 
shadow bladespell once with this trait and regain the ability 
to do so when you finish a long rest. 
Your spellcasting ability 
for these spells is either Intelligence or Wisdom, matching the 
choice you made for your Ability Score Increase



RaceList["wild leonin"] = { 
	regExpSearch : /^(?=.*wild)(?=.*leonin).*$/i, 
	name : "Wild Leonin", 
	sortname : "Leonin, Wild", 
	source : ["HB", 0], 
	plural : "Wild Leonins", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 	},
	languageProfs : ["Common", 1], 
		weaponsadd : ["Leonin Jaws"], 
    		weaponOptions : {
		baseWeapon : "leonin jaws",
		regExpSearch : /Leonin Jaws/i,
		name : "Leonin Jaws",
		source : ["HB", 0],
		damage : [1, 6, "piercing"]},
	skills : ["Survival"], 
	skillstxt : "Choose one of Intimidation, Performance or Persuasion.",  
	age : "Leonin reach adulthood around the age of 15, and generally live to be about 150 years old.", 
	height : " range from 6 to over 7 feet tall (5'9\" + 2d8\")", 
	weight : " weigh around 230 lb (210 + 2d8 \xD7 2d4 lb)", 
	improvements : "Wild Leonin: +1 Dexterity, +2 Strength;", 
	scores : [2, 1, 0, 0, 0, 0], 
	trait : "Wild Leonin (+1 Dexterity, +2 Strength)\nRoar: As can action, release an almightly roar. All in 20ft who hear must make a Wis DC save (8+Cha+Prof) or be frightened for 1min. Once per short rest.\nSavage Attacks: When you score a critical hit with a melee weapon attack, you can roll one of the weapon’s damage dice one additional time and add it to the extra damage of the critical hit.", 
};


RaceList["wild leonin"] = { 
	regExpSearch : /^(?=.*wild)(?=.*leonin).*$/i, 
	name : "Wild Leonin", 
	sortname : "Leonin, Wild", 
	source : ["HB", 0], 
	plural : "Wild Leonins", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 	},
	languageProfs : ["Common", 1], 
		weaponsadd : ["Leonin Jaws"], 
    		weaponOptions : {
		baseWeapon : "leonin jaws",
		regExpSearch : /Leonin Jaws/i,
		name : "Leonin Jaws",
		source : ["HB", 0],
		damage : [1, 6, "piercing"]},
	skills : ["Survival"], 
	skillstxt : "Choose one of Intimidation, Performance or Persuasion.",  
	age : "Leonin reach adulthood around the age of 15, and generally live to be about 150 years old.", 
	height : " range from 6 to over 7 feet tall (5'9\" + 2d8\")", 
	weight : " weigh around 230 lb (210 + 2d8 \xD7 2d4 lb)", 
	improvements : "Wild Leonin: +1 Dexterity, +2 Strength;", 
	scores : [2, 1, 0, 0, 0, 0], 
	trait : "Wild Leonin (+1 Dexterity, +2 Strength)\nRoar: As can action, release an almightly roar. All in 20ft who hear must make a Wis DC save (8+Cha+Prof) or be frightened for 1min. Once per short rest.\nSavage Attacks: When you score a critical hit with a melee weapon attack, you can roll one of the weapon’s damage dice one additional time and add it to the extra damage of the critical hit.", 
};

RaceList["royal leonin"] = { 
	regExpSearch : /^(?=.*royal)(?=.*leonin).*$/i, 
	name : "Royal Leonin", 
	sortname : "Leonin, Royal", 
	source : ["HB", 0], 
	plural : "Royal Leonins", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 	},
	languageProfs : ["Common", 3], 
	weaponsadd : ["Leonin Jaws"], 
    		weaponOptions : {
		baseWeapon : "leonin jaws",
		regExpSearch : /Leonin Jaws/i,
		name : "Leonin Jaws",
		source : ["HB", 0],
		damage : [1, 6, "piercing"]},
	dmgres : ["Radiant"], 
	savetxt : { 
		text : ["Adv on Cha checks if only one to interpret"], 	},
	skillstxt : "Choose one of Intimidation, Performance or Persuasion.",  
	age : "Leonin reach adulthood around the age of 15, and generally live to be about 150 years old.", 
	height : " range from 6 to over 7 feet tall (5'9\" + 2d8\")", 
	weight : " weigh around 230 lb (210 + 2d8 \xD7 2d4 lb)", 
	improvements : "Royal Leonin: +1 Charisma, +2 Strength;", 
	scores : [1, 0, 0, 0, 0, 1], 
	trait : "Royal Leonin (+1 Charisma, +2 Strength)\nRoar: As can action, release an almightly roar. All in 20ft who hear must make a Wis DC save (8+Cha+Prof) or be frightened for 1min. Once per short rest.\n Interpeter: I have advantage on Cha checks when I'm the only one to interpret between two or more groups.", 
	abilitySave : 6, 
  
	features : { 
		"leonin roar" : { 
			name : "Leonin Roar", 
			minlevel : 1, 
			usages : 1, 
			recovery : "short rest", 
			tooltip : "", 
			action : ["action", ""], 

},
  },
};

WeaponsList["leonin jaws"] = { 
	regExpSearch : /leonin jaws/i, 
	name : "Leonin Jaws", 
	source : ["HB", 0], 
	list : "melee", 
	ability : 1, 
	type : "Natural", 
	damage : [1, 6, "slashing"], 
	range : "Melee", 
	description : "Natural, Light, Brutal: Re-roll dmg 1's.", 
	abilitytodamage : true,  
};

WeaponsList["leonin claws"] = { 
	regExpSearch : /leonin claws/i, 
	name : "Leonin Claws", 
	source : ["HB", 0], 
	list : "melee", 
	ability : 1, 
	type : "Natural", 
	damage : [1, 6, "slashing"], 
	range : "Melee", 
	description : "Natural, Light", 
	abilitytodamage : true,  
};
