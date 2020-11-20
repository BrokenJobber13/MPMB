var iFileName = "Backgrounds.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned

BackgroundList["advisor"] = { //Object name; Note the use of only lower case! Also note the absence of the word "var" and the use of brackets []
	regExpSearch : /Advisor/i, //required; regular expression of what to look for (i.e. now it looks for any entry that has the consecutive words "where", "i", "am", and "from" in it, disregarding capitalization or words in between). If this looks too complicated, just write: /where i am from/i

	name : "Advisor", //required; the name as used

	source : ["HB", 0], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]

	skills : ["History", "Persuasion"], //optional; skill proficiencies gained from having the background. If the background doesn't give fixed proficiencies, but instead gives a choice, delete this line and use the line below, "skillstxt"

	gold : 15, //required; the amount of gold pieces added to the Equipment section on the second page when selecting "Background's items and gold" from the "Add Equipment" menu.

	equipleft : [ //optional; syntax is: ["description", "amount", "weight"]. Put "" if it is nothing, don't put 0
		["A Bottle of ink and Quill", "", ""],
		["Pieces of Parchment", "5", ""],
		["Set of Fine Clothes", "", "2"],
	], //items as they are added to the left column of the Equipment section on the second page when selecting "Background's items and gold" from the "Add Equipment" menu.

	feature : "Position of Power", //required; the name of the background feature as it will appear on the sheet. The feature is then retrieved from the BackgroundFeatureList, see below

	trait : [
		"I am convinced that my beliefs are the correct ones. Anyone who believes differently is at best mistake.",
		"I enjoy when people recognize my importance.",
		"I am annoyed by people who ask me for help and advice. Just because I am an advisor does not mean i am their advisor.",
		"I consider those of lesser station than me to be inferior and less worthy of respect.",
		"I never forget a debt owed to me, nor one I owe to someone else.",
		"It is my responsibility to make sure my friends are taken care of however I can.",
		"I consder it my duty to educate those who are iignorant of something I am knowledgeable about.",
		"I always conduct myself formally and with dignity."
	], //required; A list of the personality traits that can be chosen using the "Add Features" button on the second page. This list can be any length.

	ideal : [
		["Tradition",
			"Tradition: The best advice I can provide is to keep to the laws and traditions of the past. (Lawful)"
		],
		["Justice",
			"Justice: No matter the situation or circumstances, any slight mst be met with swift justice.. (Lawful)"
		],
		["Power",
			"Power: My proximity to power ensures my authority and dominion over those beneath me. (Evil)"
		],
		["Responsbility",
			"Responsibility: My position and its power come with a responsibility to do right by those whom my advice may impact. (Good)"
		],
		["Change",
			"Change: It is my duty to steer my superior's decisions toward growth and change so that things do not stagnate. (Chaotic)"
		],
		["Practicality",
			"Practicality: Always take the most effective route toward accomplishing ones goals. (Neutral)"
		],
	], //required; A list of the  ideals that can be chosen using the "Add Features" button on the second page. This list can be any length. Take note of the two-step build for every ideal, this is essential!

	bond : [
		"The company I am part of is all that matters to me. My role is to serve it as best I can.",
		"I admire and respect my superior, and I will gladly serve him or her or as long as they will have me.",
		"I was put in this position by influential forces to keep an eye on my superior. My true loyalty lies with them.",
		"I was put in this position by my mentor, my superior'spredecessor. I miss my mentor dearly.",
		"People will know my name before I'm through with this world.",
		"This position is a means to an end. Someday, it will be my turn to rule."
	], //required; A list of the bonds that can be chosen using the "Add Features" button on the second page. This list can be any length.

	flaw : [
		"I advise rather than lead because I'm unwilling to make hard decisions myself.",
		"My advice once caused catastrophic consequences, but he does not realise. I'll do anything to keep him from knowing.",
		"I have a hard time saying no to people who flatter me, regardless of their motivations.",
		"I can't help myself when I learn something secret. I simply must tell someone.",
		"I am not afriad to use my position of power if it means I can get the things I want.",
		"I secretly believe that I should be the one in power, not my superior."
	],  //required; A list of the bonds that can be chosen using the "Add Features" button on the second page. This list can be any length.

	extra : [
		"Select a Advisor Specialty",
		"Council",
		"War",
		"Defence",
		"Social",
		"Infrastructure",
		"Business",
		"City Guard",
		"Treasurery",
		"Spy"
	], //optional; the extra options the background gives on the first page of the sheet (in line Background at the top there are two drop-down menus). The first entry in this array is what is used for the mouseover text. If your background offers no extra features, simply delete this entry. Make sure that text you enter here fits into the field, or it won't look as good

/* SYNTAX CHANGE v12.998 >> old syntax for 'tools' and 'languages' are no longer supported!! */
	toolProfs : [["", 0], ["Forgery Kit", "Int"]], // optional; this is an array with the tool proficiencies gained. Each entry can be its own array of 2 entries. The first entry is the name of the tool and the second entry is either 1) a number if the tool is yet to be chosen, or 2) the 3-letter ability score abbreviation if the tool is to be listed in the skill section and have a bonus calculated

	languageProfs : [2], // optional; this is an array of the language proficiencies gained. An entry can either be 1) a string that represents the language learned or 2) a number which is the number of language gained that can be chosen by the player

	lifestyle : "aristocratic", //optional; sets the lifestyle of the sheet. Options are: "wretched", "squalid", "poor", "modest", "comfortable", "wealthy", or "aristocratic"
};

BackgroundFeatureList["position of power"] = {  //Note the use of only lower case!
	description : "Because of your position, you command a certain respect. People who both know who you are and also have a vested interested in pleasing your liege tend to give you the benefit of the doubt and will go out of their way not to draw your ire, lest they potentially incur the wrath of your superior. Others within the organization you are a part of are also likely to curry favor from you however they can. Beware, however, as there could also be some close to you who are jealous of your position and may wish for your downfall.", //required; the description of the feature as it will be put on the sheet. Make sure that this fits into the field or it won't look so pretty.

	source : ["HB", 0], //required; the source and the page number of the feature
};
