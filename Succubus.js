var iFileName = "Succubus.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); 
RaceList["succubus"] = { 
	regExpSearch : /Succubus/i, 
	name : "Succubus", 
	source : ["HB", 0], 
	plural : "Succubus", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 
		fly : { spd : "walk", enc : 0 }, 	},
	languageProfs : [ "Common", "Abyssal", "Infernal", "Telepathy 30ft"], 
	weapons : ["claws"], 
	vision : ["Darkvision", 120], 
	dmgres : ["Necrotic"], 
	skillstxt : "Choose any two skills",  
	age : " reach adulthood in their late teens and live around 600 years while retaining their youngful appearence", 
	height : " range from 4 to over 5 feet tall (3'9\" + 2d8\")", 
	weight : " weigh around 85 lb (70 + 2d8 \xD7 2d4 lb)", 
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)", 
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)", 
	improvements : "Succubus: +2 Charisma, +1 Intelligence;", 
	scores : [0, 0, 0, 1, 0, 2], 
	trait : "Succubus (+2 Charisma, +1 Intelligence)\nTraits Details here.", 
	spellcastingAbility : 6, 
	spellcastingBonus : { 
		name : "Succubus Arts", 
		spells : ["charm person"], 
		selection : ["charm person"], 
		times : 2, 
		prepared : true, 
		atwill : true, 	},
	features : { 
		"transmorph" : { 
			name : "Transmorph", 
			minlevel : 3, 
			usages : 5, 
			recovery : "long rest", 
			tooltip : "", 
			action : ["action", ""], 
			spellcastingBonus : { 
				name : "Succubus Arts (level 3)",
				spells : ["polymorph"],
				selection : ["polymorph"],
				oncelr : true,			},
    				},
	},
  "draining kiss" : {
			name : "Draining Kiss",
			minlevel : 1,
			usages : 2,
			additional : ["1d10", "1d10", "1d10", "1d10", "2d10", "2d10", "2d10", "2d10", "2d10", "3d10", "3d10", "3d10", "3d10", "3d10", "4d10", "4d10", "4d10", "4d10", "5d10", "5d10"],  
			recovery : "short rest",
			tooltip : "",

			action : ["action", ""], 	},
	

  };
