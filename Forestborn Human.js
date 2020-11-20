var iFileName = "Forestborn Human.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); 

RaceList["Forestborn human"] = {

	regExpSearch : /^(?=.*forestborn)(?=.*human).*$/i, 
	name : "Forestborn Human", 
	sortname : "Forestborn Human", 
	source : ["HB", 0],
	plural : "Forestborns", 
	size : 3, 
	speed : { walk : { spd : 35, enc : 20 } },
	toolProfs : ["Herbalism Kit"],
	languageProfs : ["Common", "From Human"], 
	savetxt : { adv_vs : ["poisons", "diease"] },
	skills : ["Nature"],
	skillstxt : "Choose any two skills", 
	age : " reach adulthood in their late teens and live around 100 years", 
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")",
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)", 
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)", 
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)", 
	improvements : "Forestborn Human: +1 Free Choice, +2 Wisdom;", 
	scores : [0, 0, 0, 2, 0, 0], 
	trait : "Forestborn Human (+1 Free Choice, +2 Wisdom)\nNatural Resistances\nYou have advantage on saving throws against poisons and diseases.\nWatchers of the Forests\nWhenever you make a Wisdom(Perception) checks while in a forest, you are considered proficient in the Perception skill and add double your proficiency bonus to the check, instead your normal proficiency bonus.",
};

