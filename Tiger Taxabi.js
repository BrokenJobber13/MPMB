var iFileName = "Tiger Taxabi.js";
RequiredSheetVersion(12.999); 

RaceList["tiger taxabi"] = { 
	regExpSearch : /^(?=.*tiger)(?=.*taxabi).*$/i, 
	name : "Tiger Taxabi", 
	sortname : "Taxabi Tiger", 
	source : ["HB", 0], 
	plural : "Tiger Taxabi's", 
	size : 3, 
	speed : { 
		walk : { spd : 35, enc : 25 }, 
		},

	languageProfs : ["Common", 1], 
	weaponsAdd : ["Tiger Bite"],
		
			weaponOptions : {
			regExpSearch : /Tiger Bite/i,
			name : "Tiger Bite",
			source : ["HB", 0],
			ability : 1,
			type : "Natural",
			damage : [1, 6, "piercing"],
			range : "Melee",
			description : "Natural, Finesse, Brutal: Re-roll 1's.",
			abilitytodamage : true, 
			},
	vision : ["Darkvision", 60], 
	skills : ["Athletics"], 
	age : " reach adulthood in their late teens and live around 100 years", 
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")", 
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)", 
	improvements : "Something Catlike: +1 Charisma, +2 Strength;", 
	scores : [2, 0, 0, 0, 0, 1], 
	trait : "Something Catlike (+1 Charisma, +2 Strength)\nPounce.\nAs an Action I can make a special Dash Attack on One Target. If I move atleast 6sq's then I can make a single melee weapon attack. On hit deals extra damage die of weapon used and target ust make Str save DC8+Prob+Str mod or be knocked prone. Once per short/long rest.",  
	
	features : { 
		"pounce" : { 
			name : "Pounce", 
			minlevel : 1, 
			usages : 1, 
			recovery : "short rest", 
			tooltip : " (Taxabi Legacy)", 
			action : ["action", ""], 
			},
	},

};
