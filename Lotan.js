
var iFileName = "Lotan.js"; 
RequiredSheetVersion(12.999); 
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
};
