var iFileName = "Houzi Wong.js"; 
RequiredSheetVersion(12.999); 
RaceList["houzi wong"] = { 
	regExpSearch : /^(?=.*houzi)(?=.*wong).*$/i, 
	name : "Houzi Wong", 
	sortname : "Houzi Wong", 
	source : ["HB", 0], 
	plural : "Houzi Wongs", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 
		climb : { spd : 30, enc : 20 }, 	},
	languageProfs : ["Common", "Sylvan"], 
  weaponsadd : ["monkey paws"],
   		weaponOptions : {
		baseWeapon : "monkey paws",
		regExpSearch : /Monkey Paws/i,
		name : "Monkey Paws",
		source : ["HB", 0],
		damage : [1, 6, "bludgeoning"]},
	weaponprofs : [false, false, ["glaive", "halberd", "pike"]], 
	skills : ["Deception"], 
	age : "Houzi-Wong live longer lives than humans, reaching maturity at 15 years of age and living until about 350 years of age. They are born without fur like a human, but grow it in through their youth. As they reach 250 years, it begins to gray and any older than 300 tend to have entirely gray fur on their bodies.", 
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")", 
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)", 
 
	improvements : "Houzi Wong: +2 Dexterity, +1 Wisdom;", 
	scores : [0, 2, 0, 0, 1, 0], 
	trait : "Houzi Wong (+2 Dexterity, +1 Wisdom)\n\nMonkey's Paw: My Unarmed Strikes do 1d6 + DEX damage.\nMask of the Wild: I can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.\nHybrid Creature: I count as a Humanoid and a Beast for the purpose of game effects, and can be affected anything that affects either.", 
};
