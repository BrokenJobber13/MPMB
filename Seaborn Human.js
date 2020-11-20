var iFileName = "Seaborn Human.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); 

RaceList["seaborn human"] = { 
	regExpSearch : /^(?=.*seaborn)(?=.*human).*$/i, 
	name : "Seaborn Human", 
	sortname : "Seaborn Human", 
	source : ["HB", 0], 
	plural : "Seaborns", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 
		swim : { spd : "30", enc : "20" },
	},
	toolProfs : ["Vehicles Water"],
	languageProfs : [1, "Common"],
	savetxt : { 
		adv_vs : ["negotiating"] 	},

	skills : ["Persuasion", "Deception"], 
	age : " reach adulthood in their late teens and live around 100 years", 
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")", 
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)", 
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)", 
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)", 
	improvements : "Seaborn Human: +1 Free Choice, +2 Charisma;", 
	scores : [0, 0, 0, 0, 0, 2], 
	trait : "Seaborn Human (+1 Free Choice, +2 Charisma)\nAppraiser\nYou have advantage on checks to determine the value and craftwork of items.\nNatural Trader\nyou have advantage on Charisma (Persuasion) checks when negotiating prices with others that aren't hostile toward you.", 

								};
