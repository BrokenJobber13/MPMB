var iFileName = "Mermaid.js"; 
RequiredSheetVersion(12.999); 
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
};
