var iFileName = "Salt Gnome.js"; 
RequiredSheetVersion(12.999); 

RaceList["salt gnome"] = { 
	regExpSearch : /Salt Gnome/i, 
	name : "Salt Gnome", 
	source : ["HB", 0], 
	plural : "Salt Gnomes", 
	size : 4, 
	speed : { 
		walk : { spd : 25, enc : 15 }, 
		swim : { spd : 25, enc : 15 }, 	},
	toolProfs : ["One of cartographer's tool, cook's utensils, navigators tools or vehicles (water)", 1], 
	languageProfs : ["Common", "Gnomish"], 
	vision : ["Darkvision", 60], 
	savetxt : { 
		text : ["Adv on all Int/Wis/Cha saves v magic"], },
	skills : ["Athletics"], 
	age : " reach adulthood in their late teens and can live between 350-500 years", 
	height : " range from 3 to over 4 feet tall (2'9\" + 2d8\")", 
	weight : " weigh around 40 lb (35 + 2d8 \xD7 2d4 lb)", 
	improvements : "Salt Gnome: +1 Intelligence, +2 Consititution;", 
	scores : [0, 0, 2, 1, 0, 0], 
	trait : "Salt Gnome (+1 Intelligence, +2 Constitution)\nGnome Cunning - I have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.\nDivers Talent - I can hold my breath upto 15min.", 

};
