var iFileName = "Fairy Pixie.js"; 
RequiredSheetVersion(12.999); 

RaceList["fairy pixie"] = { 
	regExpSearch : /^(?=.*fairy)(?=.*pixie).*$/i, 
	name : "Fairy Pixie", 
	sortname : "Fairy Pixie", 
	source : ["HB", 0], 
	plural : "Pixies", 
	size : 5, 
	speed : { 
		walk : { spd : 20, enc : 10 }, 
		fly : { spd : 30, enc : 20 }, 	},
	languageProfs : ["Common", "Sylvan"], 
	savetxt : { 
		text : ["Magic can't put me to sleep"], 
		adv_vs : ["charmed"] 	},
	age : "Fairies are created fully developed and do not age.", 
  height : " range from 8 to over 15 inches tall (0'8\" + 2d6\")",
	weight : " weigh around 5 lb (3 + 1d4 \xD7 1d4 lb)",
  
	improvements : "Fairy Pixie: +1 Wisdom or Charisma, +2 Free Choice;", 
	scores : [0, 0, 0, 0, 0, 0], 
	trait : "Fairy Pixie (+1 Wisdom or Charisma, +2 Free Choice)\nShrink Objects. By concentrating for a minute, a fairy can  shrink an object to tiny size and 1/8th its original weight. If a fairy loses an object for a minute, it reverts to its regular size. It likewise reverts a minute after the fairies death. This only works on unattended objects. Fixed objects like doors cannot be shrunk.\nInnate Spellcasting. can cast the following spells: dancing lights, druidcraft. Charisma is the spellcasting ability for these spells.\nPixie Dust: A pixie can use a bonus action to throw its dust at another creature within 30 feet. For 10 minutes, the affected creature may spend its bonus action fly up to 60 feet. After flying this way the effect ends. This ability recharges on a short or long rest.", 
	abilitySave : 5,  
	spellcastingAbility : 6, 

features : { 
		"druidcraft" : { 
			name : "Pixie Magic", 
      limfeaname : "Druidcaft",
			minlevel : 1, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Pixie Magic (level 1)",
				spells : ["druidcraft"],
				selection : ["druidcraft"],
				atwill : true,
			},
    },
      "dancing lighs" : { 
			name : "Pixie Magic", 
      limfeaname : "Dancing Lights",
			minlevel : 1, 
			tooltip : "", 
			spellcastingBonus : { 
				name : "Pixie Magic (level 1)",
				spells : ["dancing lights"],
				selection : ["dancing lights"],
				atwill : true,
			},
      },	
"pixie dust" : { 
			name : "Pixie Dust", 
			minlevel : 1, 
			usages : 1, 
			recovery : "short rest", 
			tooltip : "", 
			action : ["bonus action", ""], 
			},
},
};
