var iFileName = "Lustrous Android.js"; 
RequiredSheetVersion(12.999); 

RaceList["lustrous android"] = { 
	regExpSearch : /lustrous android/i, 
	name : "Lustrous Android", 
	source : ["HB", 0], 
	plural : "Lustrous Android", 
	size : 4, 
	speed : { 
		walk : { spd : 30, enc : 30 }, 	},
	toolProfs : ["Tinker's tools", "Int"], 
	languageProfs : ["Common"], 
armorOptions : {
		regExpSearch : /^(?=.*natural)(?=.*armou?r).*$/i,
		name : "Natural Armor",
		source : ["V", 113],
		ac : 13
	},
	addarmor : "Natural Armor", 
	vision : ["Darkvision", 60], 
	dmgres : ["Fire"], 
	savetxt : { 
		text : ["Can't be magically sensed"], 
		immune : ["poison", "disease"], 
	},
	armor : [false, true, true, false], 
	skills : ["Perception"], 
	age : " reach adulthood in their late teens and live around 200 years", 
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")", 
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)", 
	improvements : "Android: +2 Constitution, +2 Strength, +1 Intelligence;", 
	scores : [2, 0, 2, 1, 0, 0], 
	trait : "Android (+2 Constitution, +2 Strength, +1 Intelligence)\nAndroid Nature: Because of my build, I dont need to eat or suffer exhuastion but I do need to shut down for 4hours a day.\nGem Genetics:As part of the long rest, I can comsume gems for a benefit. See table..", //required; th (note that "\n" is a line break).

	abilitySave : 3,  
	spellcastingAbility : 6, 
	spellcastingBonus : { 
		name : "Lustrous Shield", 
		spells : ["Shield"], 
		selection : ["shield"], 
		times : 2, 
		prepared : true, 
		oncelr : true, 
	},
			addMod : { type : "skill", field : "Init", mod : "Int", text : "I can add my Intelligence modifier to initiative rolls." } 


};
