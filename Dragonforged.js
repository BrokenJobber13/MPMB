
  RaceList["lancer dragonforged"] = { 
	regExpSearch : /^(?=.*lancer)(?=.*dragonforged).*$/i, 
	name : "Lancer Dragonforged", 
	sortname : "Dragonforged, Lancer", 
	source : ["HB", 0], 
	plural : "Lancerforged", 
	size : 3, 
	speed : { 
		walk : { spd : 25, enc : 20 }, 	},
	languageProfs : ["Draconic", 2], 
  	weaponsAdd : ["Shard Projection"],
  	weaponOptions : {
			regExpSearch : /Shard Projection/i,
			name : "Shard Projection",
			source : ["HB", 0],
			ability : 3,
			type : "Natural",
			damage : [2, 6, "slashing"],
			range : "15ft Cone",
			description : "Hits all in area; Dex save, success - half damage; Usable only twice per short rest",
			abilitytodamage : false,
			dc : true,
		},
	addarmor : "Natural Armor", 
	vision : ["Darkvision", 30], 
	dmgres : ["Poison", "Fire"], 
	savetxt : { 
		text : ["Magic can't sleep"],
		immune : ["magical aging", "disease"], 	},
  weaponprofs : [false, false, ["spear", "pike", "halberd", "lance"]], 
	skills : [""], 
	age : "A typical warforged is between between two and thirty years old, however the Dragonforged line is much younger, averaging at around 6 to 8 months old. The maximum warforged lifespan remains a mystery; so far, warforged have shown no signs of deterioration due to age.", 
	height : " stand well over 7 feet tall (6'9\" + 2d8\")", 
	weight : " weigh around 470 lb 460 + 2d8 \xD7 2d4 lb)", 
	improvements : "Willow Dragonforged: +1 Constitution, +1 Dexterity, +1 Strength;", 
	scores : [1, 1, 1, 0, 0, 0], 
	trait : "Willow Dragonforged (+1 Constitution, +1 Dexterity, +1 Strength)\nLimb Extension Protocol: For the first melee attack you make on your turn with a weapon that has the reach property, your reach for it is 5 feet greater than normal.\nHeavy Frame: Due to your density, you sink quickly in water and similar liquids. You cannot gain a swimming speed.\nSentry's Rest: When you take a long rest, you must spend at least six hours in an inactive, motionless state, rather than sleeping. In this state, you appear inert, but it doesn't render you unconscious, and you can see and hear as normal.\nRobust Robotics: I was created to have remarkable hardiness, represented by the following benefits: I don't need to eat, drink, or breathe. I have Darkvision up to 30ft. I are immune to disease. I don't need to sleep, magic can't put you to sleep.\nMechanized Defense: My body has dragon-like metal scales. As a reaction I can activate my scales, causing them to extend like daggers. I gain resistance to slashing damage until start of next turn.\nShard Projection. Since your body needs to maintain upkeep, you go through a process every time you rest in which you shed metal on the inside and it is collected inside your stomach. .", 
	spellcastingAbility : 3,
  features : {
  "mechanized defense" : {
			name : "Mechanized Defense",
			minlevel : 1,
			action : ["reaction", ""]
      
      		"shard projection" : {
			name : "Shard Projection",
			minlevel : 1,
			usages : 1,
			additional : ["2d6", "2d6", "2d6", "2d6", "2d6", "3d6", "3d6", "3d6", "3d6", "3d6", "4d6", "4d6", "4d6", "4d6", "4d6", "5d6", "5d6", "5d6", "5d6", "5d6"],  
			recovery : "short rest",
			tooltip : "",
			action : ["bonus action", ""], 
		},
    },
    };






 RaceList["brute dragonforged"] = { 
	regExpSearch : /^(?=.*brute)(?=.*dragonforged).*$/i, 
	name : "Brute Dragonforged", 
	sortname : "Dragonforged, Brute", 
	source : ["HB", 0], 
	plural : "Bruteforged", 
	size : 3, 
	speed : { 
		walk : { spd : 25, enc : 20 }, 	},
	languageProfs : ["Draconic", 1], 
  	weaponsAdd : ["Shard Projection"],
  	weaponOptions : {
			regExpSearch : /Shard Projection/i,
			name : "Shard Projection",
			source : ["HB", 0],
			ability : 3,
			type : "Natural",
			damage : [2, 6, "slashing"],
			range : "15ft Cone",
			description : "Hits all in area; Dex save, success - half damage; Usable only twice per short rest",
			abilitytodamage : false,
			dc : true,
		},
	addarmor : "Natural Armor", 
  skills : ["Athletics"],
	vision : ["Darkvision", 30], 
	dmgres : ["Poison", "Fire"], 
	savetxt : { 
		text : ["Magic can't sleep"],
		immune : ["magical aging", "disease"], 	},
	skills : [""], 
	age : "A typical warforged is between between two and thirty years old, however the Dragonforged line is much younger, averaging at around 6 to 8 months old. The maximum warforged lifespan remains a mystery; so far, warforged have shown no signs of deterioration due to age.", 
	height : " stand well over 7 feet tall (6'9\" + 2d8\")", 
	weight : " weigh around 470 lb 460 + 2d8 \xD7 2d4 lb)", 
	improvements : "Brute Dragonforged: +1 Constitution, +2 Strength;", 
	scores : [2, 0, 1, 0, 0, 0], 
	trait : "Brute Dragonforged (+1 Constitution, +2 Strength)\nHeavy Frame: Due to your density, you sink quickly in water and similar liquids. You cannot gain a swimming speed.\nSentry's Rest: When you take a long rest, you must spend at least six hours in an inactive, motionless state, rather than sleeping. In this state, you appear inert, but it doesn't render you unconscious, and you can see and hear as normal.\nRobust Robotics: I was created to have remarkable hardiness, represented by the following benefits: I don't need to eat, drink, or breathe. I have Darkvision up to 30ft. I are immune to disease. I don't need to sleep, magic can't put you to sleep.\nMechanized Defense: My body has dragon-like metal scales. As a reaction I can activate my scales, causing them to extend like daggers. I gain resistance to slashing damage until start of next turn.\nShard Projection. Since your body needs to maintain upkeep, you go through a process every time you rest in which you shed metal on the inside and it is collected inside your stomach. .", 
	spellcastingAbility : 3,
	 carryingCapacity : 2,
  features : {
  "mechanized defense" : {
			name : "Mechanized Defense",
			minlevel : 1,
			action : ["reaction", ""]
      
      		"shard projection" : {
			name : "Shard Projection",
			minlevel : 1,
			usages : 1,
			additional : ["2d6", "2d6", "2d6", "2d6", "2d6", "3d6", "3d6", "3d6", "3d6", "3d6", "4d6", "4d6", "4d6", "4d6", "4d6", "5d6", "5d6", "5d6", "5d6", "5d6"],  
			recovery : "short rest",
			tooltip : "",
			action : ["bonus action", ""], 
		},






RaceList["willow dragonforged"] = { 
	regExpSearch : /^(?=.*willow)(?=.*dragonforged).*$/i, 
	name : "Willow Dragonforged", 
	sortname : "Dragonforged, Willow", 
	source : ["HB", 0], 
	plural : "Willowforged", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 	},
	languageProfs : ["Draconic", 1], 
  	weaponsAdd : ["Shard Projection"],
  	weaponOptions : {
			regExpSearch : /Shard Projection/i,
			name : "Shard Projection",
			source : ["HB", 0],
			ability : 3,
			type : "Natural",
			damage : [2, 6, "slashing"],
			range : "15ft Cone",
			description : "Hits all in area; Dex save, success - half damage; Usable only twice per short rest",
			abilitytodamage : false,
			dc : true,
		},
	addarmor : "Natural Armor", 
	vision : ["Darkvision", 30], 
	dmgres : ["Poison", "Fire"], 
	savetxt : { 
		text : ["Magic can't sleep", "Take no dmg from 40ft fall", "Resistance to bludg dmg from falls"],
		immune : ["magical aging", "disease"], 	},
	skills : [""], 
	age : "A typical warforged is between between two and thirty years old, however the Dragonforged line is much younger, averaging at around 6 to 8 months old. The maximum warforged lifespan remains a mystery; so far, warforged have shown no signs of deterioration due to age.", 
	height : " stand well over 7 feet tall (6'9\" + 2d8\")", 
	weight : " weigh around 470 lb 460 + 2d8 \xD7 2d4 lb)", 
	improvements : "Willow Dragonforged: +1 Constitution, +2 Dexterity;", 
	scores : [1, 2, 0, 0, 0, 0], 
	trait : "Willow Dragonforged (+1 Constitution, +2 Dexterity)\nHeavy Frame: Due to your density, you sink quickly in water and similar liquids. You cannot gain a swimming speed.\nSentry's Rest: When you take a long rest, you must spend at least six hours in an inactive, motionless state, rather than sleeping. In this state, you appear inert, but it doesn't render you unconscious, and you can see and hear as normal.\nRobust Robotics: I was created to have remarkable hardiness, represented by the following benefits: I don't need to eat, drink, or breathe. I have Darkvision up to 30ft. I are immune to disease. I don't need to sleep, magic can't put you to sleep.\nMechanized Defense: My body has dragon-like metal scales. As a reaction I can activate my scales, causing them to extend like daggers. I gain resistance to slashing damage until start of next turn.\nShard Projection. Since your body needs to maintain upkeep, you go through a process every time you rest in which you shed metal on the inside and it is collected inside your stomach. .", 
	spellcastingAbility : 3,
  features : {
  "mechanized defense" : {
			name : "Mechanized Defense",
			minlevel : 1,
			action : ["reaction", ""]
      
      		"shard projection" : {
			name : "Shard Projection",
			minlevel : 1,
			usages : 1,
			additional : ["2d6", "2d6", "2d6", "2d6", "2d6", "3d6", "3d6", "3d6", "3d6", "3d6", "4d6", "4d6", "4d6", "4d6", "4d6", "5d6", "5d6", "5d6", "5d6", "5d6"],  
			recovery : "short rest",
			tooltip : "",
			action : ["bonus action", ""], 
		},
  
  
WeaponsList["shard projection"] = {

	name : "Shard Projection",
	source : ["HB", 0],
	defaultExcluded : false,
	regExpSearch : /Shard Projection/i,
	type : "Natural",
	ability : 3,
	abilitytodamage : false,
	damage : [2, 6, "slashing"],
	range : "15ft Cone",
	description : "Natural, DC=8+Prof+Con mod, Dex save, Half dmg on succuss",
	list : "ranged",
	weight : "",
	isMagicWeapon : true, };
