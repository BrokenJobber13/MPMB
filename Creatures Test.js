var iFileName = "Creatures Test.js"; 
RequiredSheetVersion(12.999); 

CreatureList["war raven"] = { 
	name : "War Raven", 
	source : ["HB", 0], 
	size : 2, 
	type : "Beast", 
	subtype : "", 
	companion : "steed", 
	alignment : "Unaligned", 
	ac : 16, 
	hp : 36, 
	hd : [6, 8], 
	speed : "90 ft", 
	scores : [12, 17, 14, 6, 12, 10], 
	saves : ["", "", "", "", "", ""], 
	senses : "", 
	languages : "", 
	challengeRating : "4", 
	proficiencyBonus : 2, 
	attacksAction : 2, 
	attacks : [{ 
			name : "Beak", 
			ability : 2, 
			damage : [1, 4, "piercing"], 
			range : "Melee (5 ft)", 
			description : "One beak attack as an Attack action",
      		}, {
			name : "Bladed Claws",
			ability : 2,
			damage : [1, 8, "slashing"],
			range : "Melee (5 ft)",
			description : "One claw and one bite attack as an Attack action"
        },  {
        name : "Ram",
        ability : 2,
        damage : [3, 6, "bludgeoning"],
        range : "Melee (5ft)",
        description : "One Ram attack as an action"
		}	],
			
		
	features : [{ 
			name : "Mimicry", 
			description : "The Raven can mimic simple sounds it's heard. A creature that hears the sounds can tell they are imitations with a successful DC 12 Wisdom Insight Check.", 
		},  {
      name : "Charge",
      description : "If the War Raven move at least 30ft in a line towards a target and hits the ram attack on the same turn, the targets takes an extra 2d6 piercing dmg and make a DC11 STR save throw, falls prone on fail.",
	},], 

},


CreatureList["giant raven"] = { 
	name : "Giant Raven", 
	source : ["HB", 0], 
	size : 3, 
	type : "Beast", 
	subtype : "", 
	companion : "steed", 
	alignment : "Unaligned", 
	ac : 12, 
	hp : 16, 
	hd : [6, 8], 
	speed : "90 ft", 
	scores : [9, 15, 13, 6, 12, 10], 
	saves : ["", "", "", "", "", ""], 
  skills : { 
		"perception" : 3, },
	senses : "", 
	languages : "", 
	challengeRating : "1", 
	proficiencyBonus : 2, 
	attacksAction : 2, 
	attacks : [{ 
			name : "Beak", 
			ability : 2, 
			damage : [1, 4, "piercing"], 
			range : "Melee (5 ft)", 
			description : "One beak attack as an Attack action",
      		}, {
			name : "Bladed Claws",
			ability : 2,
			damage : [1, 6, "slashing"],
			range : "Melee (5 ft)",
			description : "One claw and one bite attack as an Attack action",
		},  ],
			
	features : [{ 
			name : "Mimicry", 
			description : "The Raven can mimic simple sounds it's heard. A creature that hears the sounds can tell they are imitations with a successful DC 12 Wisdom Insight Check.", 
		}, ], 
};
