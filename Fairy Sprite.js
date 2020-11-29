var iFileName = "Fairy Sprite.js"; 
RequiredSheetVersion(12.999); 

RaceList["fairy sprite"] = { 
	regExpSearch : /^(?=.*fairy)(?=.*sprite).*$/i, 
	name : "Fairy Sprite", 
	source : ["HB", 0], 
	plural : "Sprites", 
	size : 5, 
	speed : { 
		walk : { spd : 20, enc : 10 }, 
		fly : { spd : 30, enc : 20 }, 	},
	languageProfs : ["Elvish", "Sylvan"], 
	age : "Fairy Sprites are created fully developed and do not age", 
	height : " range from 8 to over 15 inches tall (0'8\" + 2d6\")",
	weight : " weigh around 5 lb (3 + 1d4 \xD7 1d4 lb)", 
	improvements : "Fairy Sprite: +1 Dexterity or Intelligence, +2 Free Choice;", 
	scores : [0, 0, 0, 0, 0, 0], 
	trait : "Fairy Sprite (+1 Dexterity or Intelligence, +2 Free Choice)\nShrink Objects: By concentrating for a minute, a fairy can shrink an object to tiny size and 1/8th its original weight. If a fairy loses an object for a minute, it reverts to its regular size. It likewise reverts a minute after the fairies death. This only works on unattended objects. Fixed objects like doors cannot be shrunk.\nSpiteful: By focusing on anger I can secrete a poison called Spite. Bonus action, I can coat a weapon or 3 pieces of ammo to deal additional damage equal to your level until your next turn. This ability recharges after a short rest.\nHeart Sight: Any number of times per day you may touch a creature to determine its emotional state. If the target fails a Charisma save DC=8+Prof+Cha. I discern the targets emotional state and intentions. Celestials, fiends and undead automatically fail. A creature that saves against this ability can't be affected for 24 hours.\nInvisibility: Once per long rest, you can cast invisibility on yourself, which requires concentration. The spell ends after an hour or until you attack or cast a spell or until your concentration ends.", 
};
