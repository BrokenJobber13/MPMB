var iFileName = "Homebrew Syntax - Desertborn Human.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned


RaceList["desertborn human"] = { //Object name; Note the use of only lower case! Also note the absence of the word "var" and the use of brackets []

	regExpSearch : /^(?=.*desertborn)(?=.*human).*$/i, //required; regular expression of what to look for (i.e. now it looks for any entry that has both the words "something" and "catlike" in it, disregarding capitalization). If this looks too complicated, just write: /something catlike/i

	name : "Desertborn Human", //required; the name to use for the race

	sortname : "Desertborn Human", //optional; this is the name used to fill the drop-down boxes. If you don't include this, the 'name' will used instead

	source : ["HB", 0], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]

	plural : "Desertborn Human", //required; the name to use for the race when the plural form is used

	size : 3, //required;  the size of the race (Gargantuan = 0, Huge = 1, Large = 2, Medium = 3, Small = 4, Tiny = 5)

	speed : { 
		walk : { spd : 30, enc : 20 }, 	},

	languageProfs : [1, "Common"], // optional; this is an array of the language proficiencies gained. An entry can either be 1) a string that represents the language learned or 2) a number which is the number of language gained that can be chosen by the player

	savetxt : { 
		adv_vs : ["saves for extreme heat"] 	},

	weaponprofs : [false, false, ["scimitars", "whip", "shortbow"]], //optoinal; Weapon proficiencies the race has. This line can be deleted if you don't have anything to put here //the 3 entries are for: ["simple", "martial", "other"]

	armor : [true, false, false, true], //optoinal; Armour proficiencies the race has. This line can be deleted if you don't have anything to put here //the 4 entries are for proficiency in: ["light", "medium", "heavy", "shields"]

	skills : ["Athletics", "Survival"], //optional; Skill proficiencies the race has. This line can be deleted if you don't have anything to put here. If the race doesn't give fixed proficiencies, but instead gives a choice, delete this line and use the line below, "skillstxt"

	age : " reach adulthood in their late teens and live around 100 years", //optional; the age tooltip/mouseover text (will be displayed in combination with the "plural" entry)

	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")", //optional; the height tooltip/mouseover text (will be displayed in combination with the "plural" entry)

	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)", //optional; the weight tooltip/mouseover text (will be displayed in combination with the "plural" entry)

	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)", //optional; the height tooltip/mouseover text (will be displayed in combination with the "plural" entry), when the metric system is chosen

	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)", //optional; the weight tooltip/mouseover text (will be displayed in combination with the "plural" entry), when the metric system is chosen

	improvements : "Desertborn Human: +1 Free Choice, +2 Dexerity;", //required; the text that is displayed when listing all the ability score improvements

	scores : [0, 2, 0, 0, 0, 0], //required; the ability score improvements as used by the Ability Score dialog. The syntax is: [Str, Dex, Con, Int, Wis, Cha]

	trait : "Desertborn Human (+1 Free Choice, +2 Dexterity)\nBorn in the Desert\nIn addition, once per long rest when you would gain a level of exhaustion, you can choose to not gain a level of exhaustion.\nDune Warrior\nWhen you score a critical hit with any scimitar/whip/shortbow, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.", //required; the racial trait as it will be put in the Racial Trait field on the second page (note that "\n" is a line break).


};
