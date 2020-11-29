var iFileName = "Draconic Elves.js"; 
RequiredSheetVersion(12.999); 

RaceList["draconic elf"] = { 
	regExpSearch : /Draconic Elf/i, 
	name : "Draconic Elf", 
	sortname : "Elf, Draconic", 
	source : ["HB", 0], 
	plural : "Draconic Elves", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 	},
	languageProfs : ["Elvish", "Draconic", "Common"], 
		weaponsAdd : ["Elven Breath Weapon"],
	weaponOptions : {
			regExpSearch : /Elven breath weapon/i,
			name : "Elven Breath weapon",
			source : ["HB", 0],
			ability : 2,
			type : "Natural",
			damage : [2, 6, "fire"],
			range : "5by30-ft line",
			description : "Hits all in area; Dex save, success - half damage; Usable only twice per short rest",
			abilitytodamage : false,
			dc : true,
			edbBreathWeapon : true
		},
	vision : ["Darkvision", 60], 
	dmgres : ["Fire"], 
	savetxt : { 
		text : ["Magic can't put me to sleep"], 
		adv_vs : ["charmed"] },
	skills : ["Perception", "Intimidiation"], 
	age : "elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old", 
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")", 
	weight : " weigh around 165 lb (130 + 2d8 \xD7 2d4 lb)", 
	improvements : "Draconic Elf: +1 Strength, +2 Dexterity;", 
	scores : [1, 2, 0, 0, 0, 0], 
	trait : "Draconic Elf (+1 Strength, +2 Dexterity)\nTrance: \nBreath Weapon: Exhale destructive energy as an action. All in the area must make a saving throw with DC 8 + Wis modifier + prof bonus. It does 2d6 (+1d6 at level 6, 11, 16) damage, half as much damage on a successful save. I can use it again after a short rest.", 
	abilitySave : 6,  
	spellcastingAbility : 2, 
    
    features : {
			"draconic influence" : {
				name : "Draconic Influence",
				limfeaname : "Elven Breath Weapon",
				minlevel : 1,
				usages : 1,
				additional : levels.map(function (n) {
					return (n < 6 ? 2 : n < 11 ? 3 : n < 16 ? 4 : 5) + 'd6';
				}),
				recovery : "short rest",
				action : ["action", ""],
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							if (v.theWea.edbBreathWeapon && CurrentRace.known === 'draconic elf') {
								fields.Damage_Die = (CurrentRace.level < 6 ? 2 : CurrentRace.level < 11 ? 3 : CurrentRace.level < 16 ? 4 : 5) + 'd6';
								if (CurrentRace.variant) {
									fields.Damage_Type = CurrentRace.dmgres[0];
									fields.Description = fields.Description.replace(/(dex|con) save/i, ((/cold|poison/i).test(CurrentRace.dmgres[0]) ? 'Con' : 'Dex') + ' save');
									fields.Range = (/draconic black|draconic blue|draconic brass|draconic bronze|draconic copper/i).test(CurrentRace.variant) ? '5-ft \u00D7 30-ft line' : '15-ft cone';
								}
							}
						},
					],
				},
			},
		},
		variants : ["draconic black elf", "draconic blue elf", "draconic brass elf", "draconic bronze elf", "draconic copper elf", "draconic gold elf", "draconic green elf", "draconic red elf", "draconic silver elf", "draconic white elf"]
	};


  
 AddRacialVariant(
  "draconic elf",
  "draconic black elf", 
	{ 
		regExpSearch : /^(?=.*black)(?=.*draconic)(?=.*elf).*$/i, 
		name : "Black Draconic Elf", 
		source : ["HB", 0], 
		plural : "Black DracoElves", 
  	trait : "Black Draconic Elf (+1 Strength, +2 Dexterity)\nAcid Breath Weapon:\nAs an action, I exhale destructive energy in a 5 ft by 30 ft line.\nAll in the area must make a Dex saving throw with DC 8 + Con modifier + prof bonus.\nIt does 2d6 acid damage, half as much damage on a successful save.\nThe damage increases to 3d6 at level 6, 4d6 at level 11, and 5d6 at level 16.\nI can't use this feature again until I finish a short rest.",
		dmgres : ["Acid"],
    abilitySave : 6,
  }
   );


AddRacialVariant(
  "draconic elf",
"draconic blue elf",
  {
		regExpSearch : /draconic blue elf/i,
		name : "Blue draconic elf",
    source : ["HB", 0],
    plural : "Blue DracoElves",
		trait : "Blue Draconic Elf (+1 Strength, +2 Dexterity)\nLightning Breath Weapon: As an action, I exhale destructive energy in a 5 ft by 30 ft line. All in the area must make a Dex saving throw with DC 8 + Con modifier + prof bonus. It does 2d6 lightning damage, half as much damage on a successful save. The damage increases to 3d6 at level 6, 4d6 at level 11, and 5d6 at level 16. I can't use this feature again until I finish a short rest.",
		dmgres : ["Lightning"]
	}
  );

AddRacialVariant(
  "draconic elf",
"draconic brass elf",
  {
		regExpSearch : /draconic brass elf/i,
		name : "Brass draconic elf",
    source : ["HB", 0],
    plural : "Brass DracoElves",
		trait : "Brass Draconic Elf (+1 Strength, +2 Dexterity)\nFire Breath Weapon: As an action, I exhale destructive energy in a 5 ft by 30 ft line. All in the area must make a Dex saving throw with DC 8 + Con modifier + prof bonus. It does 2d6 fire damage, half as much damage on a successful save. The damage increases to 3d6 at level 6, 4d6 at level 11, and 5d6 at level 16. I can't use this feature again until I finish a short rest.",
		dmgres : ["Fire"]
	}
  );

AddRacialVariant(
  "draconic elf",
"draconic bronze elf",
  {
		regExpSearch : /draconic bronze elf/i,
		name : "Bronze draconic elf",
    source : ["HB", 0],
    plural : "Bronze DracoElves",
		trait : "Bronze Draconic Elf (+1 Strength, +2 Deterity)\nLightning Breath Weapon: As an action, I exhale destructive energy in a 5 ft by 30 ft line. All in the area must make a Dex saving throw with DC 8 + Con modifier + prof bonus. It does 2d6 lightning damage, half as much damage on a successful save. The damage increases to 3d6 at level 6, 4d6 at level 11, and 5d6 at level 16. I can't use this feature again until I finish a short rest.",
		dmgres : ["Lightning"]
	}
  );

AddRacialVariant(
  "draconic elf",
"draconic copper elf",
  {
		regExpSearch : /draconic copper elf/i,
		name : "Copper draconic elf",
  source : ["HB", 0],
  plural : "Copper DracoElves",
		trait : "Copper Draconic Elf (+1 Strength, +2 Dexterity)\nAcid Breath Weapon: As an action, I exhale destructive energy in a 5 ft by 30 ft line. All in the area must make a Dex saving throw with DC 8 + Con modifier + prof bonus. It does 2d6 acid damage, half as much damage on a successful save. The damage increases to 3d6 at level 6, 4d6 at level 11, and 5d6 at level 16. I can't use this feature again until I finish a short rest.",
		dmgres : ["Acid"]
	}
  );

AddRacialVariant(
  "draconic elf",
"draconic gold elf",
  {
		regExpSearch : /draconic gold elf/i,
		name : "Gold draconic elf",
    source : ["HB", 0],
    pural : "Gold DracoElves",
		trait : "Gold Draconic Elf (+1 Strength, +2 Dexterity)\nFire Breath Weapon: As an action, I exhale destructive energy in a 15 ft cone. All in the area must make a Dex saving throw with DC 8 + Con modifier + prof bonus. It does 2d6 fire damage, half as much damage on a successful save. The damage increases to 3d6 at level 6, 4d6 at level 11, and 5d6 at level 16. I can't use this feature again until I finish a short rest.",
		dmgres : ["Fire"]
	}
  );

AddRacialVariant(
  "draconic elf",
  "draconic green elf",
  {
		regExpSearch : /draconic green elf/i,
		name : "Green draconic elf",
    source : ["HB", 0],
    pural : "Green DracoElves",
		trait : "Green Draconic Elf (+1 Strength, +2 Dexterity)\nPoison Breath Weapon: As an action, I exhale destructive energy in a 15 ft cone. All in the area must make a Con saving throw with DC 8 + Con modifier + prof bonus. It does 2d6 poison damage, half as much damage on a successful save. The damage increases to 3d6 at level 6, 4d6 at level 11, and 5d6 at level 16. I can't use this feature again until I finish a short rest.",
		dmgres : ["Poison"]
	}
  );

AddRacialVariant(
  "draconic elf",
  "draconic silver elf",
  {
		regExpSearch : /draconic silver elf/i,
		name : "Silver draconic elf",
    source : ["HB", 0],
    pural : "Silver DracoElves",
		trait : "Silver Draconic Elf (+1 Strength, +2 Dexterity)\nCold Breath Weapon: As an action, I exhale destructive energy in a 15 ft cone. All in the area must make a Con saving throw with DC 8 + Con modifier + prof bonus. It does 2d6 cold damage, half as much damage on a successful save. The damage increases to 3d6 at level 6, 4d6 at level 11, and 5d6 at level 16. I can't use this feature again until I finish a short rest.",
		dmgres : ["Cold"]
	}
  );

AddRacialVariant(
  "draconic elf",
  "draconic white elf",
  {
		regExpSearch : /draconic white elf/i,
		name : "White draconic elf",
    source : ["HB", 0],
    pural : "White DracoElves",
		trait : "White Draconic Elf (+1 Strength, +2 Dexterity)\nCold Breath Weapon: As an action, I exhale destructive energy in a 15 ft cone. All in the area must make a Con saving throw with DC 8 + Con modifier + prof bonus. It does 2d6 cold damage, half as much damage on a successful save. The damage increases to 3d6 at level 6, 4d6 at level 11, and 5d6 at level 16. I can't use this feature again until I finish a short rest.",
		dmgres : ["Cold"]
	}
  );
