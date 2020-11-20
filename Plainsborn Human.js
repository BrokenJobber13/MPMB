var iFileName = "Homebrew Syntax - RaceList.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); 

RaceList["plainsborn human"] = {

	regExpSearch : /^(?=.*plainsborn)(?=.*human).*$/i, 
	name : "Plainsborn Human", 
	sortname : "Plainsborn Human", 
	source : ["HB", 0],
	plural : "Plainborns", 
	size : 3, 
	speed : { walk : { spd : 30, enc : 20 } },
	toolProfs : ["Artisan's tools"],
	languageProfs : ["Common", "From Human"], 
	skillstxt : "Choose any two skills", 
	age : " reach adulthood in their late teens and live around 100 years", 
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")",
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)", 
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)", 
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)", 
	improvements : "Plainsborn Human: +1 Charisma, +2 Intelligence;", 
	scores : [0, 0, 0, 2, 0, 1], 
	trait : "Plansborn Human (+1 Free Choice, +2 Intelligence)\nVersatile  Culture.\nYou gain proficiency in two skills of your choice.\nCrafting  Expertise.\nYou gain proficiency in one artisan's tools of your choice. When you craft an object using the artisan's tools you're proficient with, you count as two characters working for the amount of gp worth of effort for every day spent creating the item, allowing you to craft objects faster than others.", //required; the racial trait as it will be put in the Racial Trait field on the second page (note that "\n" is a line break).

};

