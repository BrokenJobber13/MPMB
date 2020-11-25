var iFileName = "Infernal Dragonkin.js"; 
RequiredSheetVersion(12.999); 

RaceList["infernal"] = { 

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
			description : "Hits all in area; Dex save, success - half damage; Usable only once per short rest",
			abilitytodamage : false,
			dc : true,
			dbBreathWeapon : true
		},
		weaponsAdd : ["Braconic Tail Whip"],
		
			weaponOptions : {
			regExpSearch : /Draconic Tail Whip/i,
			name : "Draconic Tail Whip",
			source : ["HB", 0],
			ability : 2,
			type : "Natural",
			damage : [1, 6, "bludgeoning"],
			range : "Melee",
			description : "Light",
			abilitytodamage : true,
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
		};

