var iFileName = "Magmin.js"; 
RequiredSheetVersion(12.999); 

RaceList["magmin"] = { 
	regExpSearch : /magmin/i, 
	name : "Magmin", 
	source : ["HB", 0], 
	plural : "Magmins", 
	size : 4, 
	speed : { 
		walk : { spd : 30, enc : 20 }, },
	languageProfs : ["Common", "Ignan"], 
	vision : [["Darkvision", 60]], 
	savetxt : { 
		immune : ["fire", "disease"], 	},
	improvements : "Magmin: +2 Dexterity, +1 Charisma;", 
	scores : [0, 2, 0, 0, 0, 1], 
	trait : "Magmin (+2 Dexterity, +1 Charisma)\nLiving Elemental: My type is both humanoid and elemental. Even though you were magically created, you are a living creature. I am immune to disease and do not need to eat or breathe.\nIgnited Illumination As a bonus action, I can set myself ablaze or extinguish flames. While ablaze, I shed a bright light in a 10-foot radius and dim light for an additional 10 feet.\nDeath Burst: When I explode into a burst of fire and magma. Each creature within 10 feet of it must make a DC11 Dexterity save, 2d6 fire damage on a failed save, or half damage on a success. Flammable objects that aren't being worn or carried in that area are ignited.", 
  features : {
    "death burst" : {
			name : "Death Burst", 
			minlevel : 1, 
			action : ["action", ""], 		},
     "ignited illumination" : {
       name : "Ignited Illumination",
       minlevel : 1,
       action : ["bonus action"], },
       },
       };
