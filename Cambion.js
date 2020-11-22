var iFileName = "Cambion.js"; 
RequiredSheetVersion(12.999); 

RaceList["cambion"] = { 

	regExpSearch : /cambion/i, 
	name : "Cambion", 
	source : ["HB", 0], 
	plural : "Cambion", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 
		fly : { spd : 30, enc : 20 }, 	},
	languageProfs : [ "Common", "Abyssal", "Infernal"], 
	vision : ["Darkvision", 120], 
	dmgres : ["Necrotic"], 

	weaponprofs : [false, false, ["spears", "tridants"]], 
	skillstxt : "Choose any two skills",  
	age : " reach adulthood in their late teens and live around 600 years while retaining ther youngful looks", 
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")", 
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)", 
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)", 
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)", 
	improvements : "Cambion: +1 Charisma, +2 Strength;", 
	scores : [2, 0, 0, 0, 0, 1], 
	trait : "Cambion (+1 Charisma, +2 Strength)\nFiend Magic\n.", 

	spellcastingAbility : 6, 
	spellcastingBonus : {
		name : "Fiend Magic",
		spells : ["Fire Bolt"],
		selection : ["fire bolt"],
		times : 2, 
		prepared : true, 
		atwill : true, },
	
		features : {
			"fire bolt" : { 
			name : "Fiend Magic (Level 1)", 
      			limfeaname : "fire bolt",
			minlevel : 1, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Fiend Magic (level 1)",
				spells : ["fire bolt"],
				selection : ["fire bolt"],
				atwill : true,
			},
    },
			
		"charm person" : {
			name : "Fiend Magic (level 3)",
			limfeaname : "Charm Person",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Fiend Magic (level 3)",
				spells : ["charm person"],
				selection : ["charm person"],
				firstCol : "oncelr"		},
									},
},
};
