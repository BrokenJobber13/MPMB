var iFileName = "SI Races 2 v1.js"; 


				RaceList["infernal dragonkin"] = { 

		regExpSearch : /Infernal Dragonkin/i, 
		name : "Infernal Dragonkin", 
		source : ["HB", 0], 
		plural : "Infernal Dragonkins", 

		speed : { 
		walk : { spd : 30, enc : 20 }, 	},
	languageProfs : ["Draconic", "Infernal", "Common"], 
	weaponsAdd : ["Infernal Breath Weapon"],
	weaponOptions : {
			regExpSearch : /infernal breath weapon/i,
			name : "Infernal Breath weapon",
			source : ["HB", 0],
			ability : 6,
			type : "Natural",
			damage : [2, 6, "fire/light"],
			range : "5by30-ft line",
			description : "Hits all in area; Dex save, success - half damage; Usable only twice per short rest",
			abilitytodamage : false,
			dc : true,
			idbBreathWeapon : true
		},
	vision : ["Darkvision", 60], 
	dmgres : ["Fire", "Lightning"], 
	skillstxt : "Choose any two skills",  
	age : "Infernal dragonborn mature quickly; their reptilian ancestry produces children who can walk and talk only a few months after birth. They reach adulthood at the age of seven and live to be around 115", 
	height : " range from 7 to over 9 feet tall (6'9\" + 2d8\")", 
	weight : " weigh around 200 lb (200 + 2d8 \xD7 2d4 lb)", 
	improvements : "Infernal Dragonkin: +1 Strength, +2 Charisma;", 
	scores : [1, 0, 0, 0, 0, 2], 
	trait : "Infernal Dragonkin (+1 Strength, +2 Charisma)\nDevilish Heritage:I am innately magic which allows me to know and cast spells at will throughtout my adventures.\nBronze Draconic Ancestry:While the blood of dragonborn runs through your veins, it has been mixed with tiefling blood. This has mixed the damge of your breath weapon and resistances. Infernal Breath Weapon: Exhale destructive energy as an action with a 5ft by 30ft Line, Dex Save. All in the area must make a saving throw with DC=8+Prof+CHA mod. It does 2d6 half Fire, Half Lightning damage, half as much damage on a successful save.", 
	spellcastingAbility : 6, 

  features : { 
		"produce flame" : { 
			name : "Devilish Heritage (Level 1)", 
      limfeaname : "Produce Flame",
			minlevel : 0, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Devilish Heritage (level 1)",
				spells : ["produce flame"],
				selection : ["produce flame"],
				atwill : true,
			},
    },
      "continual flame" : { 
			name : "Devilish Heritage (Level 3)", 
      limfeaname : "Continual Flame",
			minlevel : 3, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Devilish Heritage (level 3)",
				spells : ["continual flame"],
				selection : ["continual flame"],
				oncelr : true,
			},
      },
     "burning hands" : { 
			name : "Devilish Heritage (Level 5)", 
      limfeaname : "Burning Hands",
			minlevel : 5, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Devilish Heritage (level 5)",
				spells : ["burning hands"],
				selection : ["burning hands"],
				oncelr : true,
			},
     },
		"infernal breath weapon" : {
			name : "Infernal Breath Weapon",
			limfeaname : "Infernal Breath Weapon",
			minlevel : 1,
			usages : 2,
			additional : ["2d6", "2d6", "2d6", "3d6", "3d6", "3d6", "3d6", "3d6", "3d6", "4d6", "4d6", "4d6", "4d6", "4d6", "4d6", "5d6", "5d6", "5d6", "5d6", "5d6"], 
			recovery : "short rest",
			tooltip : "",
			action : ["action", ""], 
			calcChanges : {
					atkAdd : [
						function (fields, v) {
							if (v.theWea.dbBreathWeapon && CurrentRace.known === 'infernal dragonkin') {
                fields.Damage_Die = (CurrentRace.level < 3 ? 2 : CurrentRace.level < 9 ? 3 : CurrentRace.level < 16 ? 4 : 5) + 'd6';
						}
            },
					]
				},
			},
            },
		},


RaceList["mermaid"] = { 
	regExpSearch : /Mermaid/i, 
	name : "Mermaid", 
	source : ["HB", 0], 
	plural : "Mermaids", 
	size : 3, 
	speed : { 
		walk : { spd : 10, enc : 5 }, 
		swim : { spd : 40, enc : 30 }, },

	toolProfs : [["Navigator's Tools", "Wis"]], 
	languageProfs : ["Common", "Aquan"], 
	vision : ["Darkvision", 60], 
	savetxt : { 
		text : ["Knows North by heart"], 	},
	skills : ["Survival"], 
	age : "A mermaid matures slightly faster than a human. They reach adulthood in their mid teens and their lifespans are shorter by a handful of years.", 

	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")", 
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)", 
	improvements : "Mermaid: +2 Charisma, +1 Dexterity or Constitution;", 
	scores : [0, 0, 0, 0, 0, 2], 
	trait : "Mermaid (+2 Charisma, +1 Dexterity or Constitution)\nLand and Sea: While I'm not submerged in water I can use a bonus action to transform my lower body. My tail becomes a pair of legs and I appear to be human. This transformation lasts until I use a bonus action while submerged in water to revert to my true form as per of a Short Rest.\nHuman Form: Only change: Walk 30ft, Swim 30ft. \nVoice of the Ocean: I can comprehend and verbally communicate with any creature that has an innate swimming speed and can innately use the magic of the seas.", 

	spellcastingAbility : 6, 
	features : { 

		"shape water" : { 
			name : "Voice of The Ocean (Level 0)", 
    			limfeaname : "Shape Water",
			minlevel : 1, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Voice of The Ocean (Level 0)",
				spells : ["shape water"],
				selection : ["shape water"],
				atwill : true,
			},
    },
		
		"change form" : { 

			name : "Change Form", 
			minlevel : 1, 
			usages : 1, 
			recovery : "short rest", 
			tooltip : "", 
			action : ["bonus action", ""], 
	
			},
},
		"create or destroy water" : { 
			name : "Voice of The Ocean (Level 1)", 
     			imfeaname : "create or destroy water",
			minlevel : 1, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Voice of The Ocean (Level 1)",
				spells : ["create or destroy water"],
				selection : ["create or destroy water"],
				atwill : true,
			},
    },
},


RaceList["lotan"] = { 
	regExpSearch : /Lotan/i, 
	name : "Lotan", 
	source : ["HB", 0], 
	plural : "Lotans", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 
		swim : { spd : 30, enc : 20 }, 	},
	languageProfs : ["Common", "Draconic"], 
	vision : ["Darkvision", 60], 
	skills : ["Persuaion"], 
	age : "Young Lotan learn to swim instantly after hatching, attain the size and development of a 10-year-old human child by the age of 3 and reach Adulthood by 15. They live to be around 80",
	height : " range from 6 to over 7 feet tall (5'9\" + 2d8\")", 
	weight : " weigh around 250 lb (240 + 2d8 \xD7 2d4 lb)", 
	improvements : "Lotan: +1 Strength, +2 Charisma;", 
	scores : [1, 0, 0, 0, 0, 2], 
	trait : "Lotan (+1 Strength, +2 Charisma)\nDeep SeaBorn: I can breathe air and water and can communicate simple ideas to fishlife.\nFrightful Presence: I can use my presence to instill fear into my enemie, the imposing aura of the Leviathans. Upto my Prof Bonus amount within 30ft must succeed Wis save or be scared for 1min. Once per Short Rest. DC=8+Prof+Cha.", 


	features : { 
		"frightful presense" : { 
			name : "Frightful Presense", 
			minlevel : 0, 
			usages : 1, 
			recovery : "short rest", 
			tooltip : " (Lotan, Leviathan Heritage)", 
			action : ["action", ""], 
			},
  },
},

RaceList["royal dark elf"] = { 
		regExpSearch : /Royal Dark Elf/i,
		name : "Royal Dark Elf",
		sortname : "Elf, Royal Dark",
		source : ["HB", 0],
		plural : "Royal Dark elves",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 }
		},
		languageProfs : ["Common", "Elvish", 1],
		vision : ["Darkvision", 120],
		savetxt : {
			text : ["Magic can't put me to sleep"],
			adv_vs : ["charmed"]
		},
		weaponProfs : [false, false, ["rapier", "shortsword", "hand crossbow", "longbow"]],
		skills : ["Perception"],
		age : " typically claim adulthood around age 100 and can live to be 750 years old",
		height : " range from under 5 to over 6 feet tall (4'6\" + 2d10\")",
		weight : " weigh around 115 lb (90 + 2d10 \xD7 1d4 lb)",
		heightMetric : " range from under 1,5 to over 1,8 metres tall (140 + 5d10 cm)",
		weightMetric : " weigh around 55 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
		scores : [0, 2, 0, 1, 0, 0],
		trait : "High Elf (+2 Dexterity, +1 Intelligence)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, thus needing only 4 hours for a long rest.\nCantrip: I know the cantrip Light. Intelligence is my spellcasting ability for it.",
		spellcastingAbility : 4,
		features : {
		"light" : { 
			name : "Royal Drow Magic", 
     			limfeaname : "Light",
			minlevel : 1, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Royal Drow Magic",
				spells : ["light"],
				selection : ["light"],
				atwill : true,
			},
    },
    },
},

RaceList["salt gnome"] = { 
	regExpSearch : /Salt Gnome/i, 
	name : "Salt Gnome", 
	source : ["HB", 0], 
	plural : "Salt Gnomes", 
	size : 4, 
	speed : { 
		walk : { spd : 25, enc : 15 }, 
		swim : { spd : 25, enc : 15 }, 	},
	toolProfs : ["One of cartographer's tool, cook's utensils, navigators tools or vehicles (water)", 1], 
	languageProfs : ["Common", "Gnomish"], 
	vision : ["Darkvision", 60], 
	savetxt : { 
		text : ["Adv on all Int/Wis/Cha saves v magic"], },
	skills : ["Athletics"], 
	age : " reach adulthood in their late teens and can live between 350-500 years", 
	height : " range from 3 to over 4 feet tall (2'9\" + 2d8\")", 
	weight : " weigh around 40 lb (35 + 2d8 \xD7 2d4 lb)", 
	improvements : "Salt Gnome: +1 Intelligence, +2 Consititution;", 
	scores : [0, 0, 2, 1, 0, 0], 
	trait : "Salt Gnome (+1 Intelligence, +2 Constitution)\nGnome Cunning - I have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.\nDivers Talent - I can hold my breath upto 15min.", 

},

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
			name : "Mythric Mixed Heritage", 
      limfeaname : "Light",
			minlevel : 1, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Mythric Mixed Heritage (level 1)",
				spells : ["light"],
				selection : ["light"],
				atwill : true,
			},
    },
		"control flames" : { 
			name : "Mythric Mixed Heritage", 
      			limfeaname : "Control Flames",
			minlevel : 1, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Mythric Mixed Heritage (level 1)",
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
},
  
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
		"green-flame blade" : { 
			name : "Fiends Heritage (Level 1)", 
      limfeaname : "Green-Flame Blade",
			minlevel : 1, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Fiends Heritage (level 1)",
				spells : ["green-flame blade"],
				selection : ["green-flame blade"],
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
},
};
