var iFileName = "Kaijuborn.js"; 
RequiredSheetVersion(12.999); 

RaceList["kaijuborn"] = { 
	regExpSearch : /kaijuborn/i, 
	name : "Kaijuborn", 
	sortname : "Kaijuborn", 
	source : ["HB", 0], 
	plural : "Kaijuborn", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 
		swim : { spd : "30", enc : "20" }, 	},

	languageProfs : ["Common", 1], 
		armorOptions : {
		regExpSearch : /^(?=.*natural)(?=.*armou?r).*$/i,
		name : "Natural Armor",
		source : ["V", 113],
		ac : 13
	},
	armorAdd : "Natural Armor",
	vision : ["Darkvision", 60], 

	savetxt : { 
		adv_vs : ["frightened", "charmed"] 	},

	skillstxt : "Choose any two skills",  
	age : " Their life span is unknown. Kaijuborn have beenknown to live for as long as the true dragons, if not longer. They reach maturity around 100 years old", 
	height : " range from 7 to over 8 feet tall (6'9\" + 2d8\")", 
	weight : " weigh around 255 lb (210 + 2d8 \xD7 2d4 lb)", 
	improvements : "Kaijuborn: +1 Strength, +2 Constitution;", 
	scores : [1, 0, 2, 0, 0, 0], 
	trait : "Kaijuborn (+1 Strength, +2 Constitution) \nAmphibious: I can breath air and water.\nKaiju Sense - I can sense other kaijuborn within a mile.\nAtomic Breath: Your energy weapon deals radiantdamage in a line 30 feet long and 5 feet wide, imposes a Dex saving throw(DC8+Con+Prof), Half damage on success,\nRed Spiral Atomic Breath: You possess the ability toenhance your atomic breath by risking yourself. \nI can overclock your radioactive heart to deal max damage with my atomic breath to one target, \nbut I take half damage too and make a Con savingthrow (DC 15) or suffer one level of exhaustion.", 

	abilitySave : 2,  

	features : { 
		"atomic breath" : {
			name : "Atomic Breath",
			minlevel : 1,
			usages : 1,
			additional : ["2d6", "2d6", "2d6", "2d6", "3d6", "3d6", "3d6", "3d6", "3d6", "3d6", "4d6", "4d6", "4d6", "4d6", "4d6", "4d6", "5d6", "5d6", "5d6", "5d6"],  //optional; text to display in the description field of the limited feature. This can be one value, but can also be an array of 20 values, one for each level.
			recovery : "short rest",
			tooltip : "",
			action : ["action", ""], 
		},
		"red spiral atomic breath" : { 
			name : "Red Spiral Atomic Breath", 
			minlevel : 1, 
			usages : 1, 
			recovery : "long rest", 
			tooltip : "", 
			action : ["action", ""], 
			},
		}

};
