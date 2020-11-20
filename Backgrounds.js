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


BackgroundList["demon hunter"] = { 
	regExpSearch : /demon hunter/i, 
	name : "Demon Hunter", 
	source : ["HB", 0], 
	skills : ["Religion", "Survival"], 
	gold : 15, 
	equipleft : [ 
		["Scroll of personal bonds", "", ""],
		["Holy Symbol", "", ""],
	], 

	equipright : [ 
		["Dark, common clothes with hood", "", 3],
		["Wooden Stake", "", ""],
		["Belt pouch (with coins)", "", 1],
	],

	feature : "Discovery", 

	trait : [
		"I am always calm, no matter what the situation. I never let my emotions control me.",
		"I idolize a particular hero of my faith and try to live up to his example",
		"Swift justice for all evildoers",
		"If my foes wreak ruin on the world, it's because I failed to stop them. I must help those harmed by them.",
		"I am incredibly slow to trust. Those who seem the fairest often have the most to hide.",
		"I don't play attention to the risks in a situation. Never tell me the odds.",
		"Ordinary foes might win my mercy, but my sworn enemies do not.",
		"My qualms can’t get in the way of exterminating my foes."
	], 

	ideal : [
		["Retribution",
			"Retribution: I will do whatever it takes to punish those that deserve it. (Lawful)"
		],
		["Justice",
			"Justice: Everyone must take responsibility for their own actions. (Lawful)"
		],
		["Might",
			"Might: If I become strong enough, I can rid the world of evil once and for all. (Neutral)"
		],

		["Destiny",
			"Destiny: No one can steer me away from my higher calling. (Neutral)"
		],
		["Logic",
			"Logic: Emotions must not cloud our sense of what is right and true, or our logical thinking. (Lawful)"
		],
		["Independence",
			"Independence.  I must prove I can handle myself against the forces of evil without the help of others. (Chaotic)"
		],
	], 

	bond : [
		"I will do my best to serve my god by punishing those that break the tenets of my religion",
		"I have done bad things in the past, and the only way I can make up for it is to help rid the world of evil.",
		"Everything I do is to make the world a better place for my loved ones. They likely think I am dead.",
		"I wanted to become a paladin, but was turned down by the order. I aim to show them I am better than them.",
		"I protect the weak by killing the threat before it gets to them",
		"Should my discovery come to light, it might bring ruin to the world. Only I can prevent this."
	], 

	flaw : [
		"I judge other's harshl and myself even more severely.",
		"I am completely oblivious to the fact that my ways might be considered hypocritical.",
		"I become obsessed with hunting my target to the detriment of everything else in my life.",
		"I am too focused on my goal, and sometimes don't stop to consider the risks involved.",
		"I work alone and take a long time to trust others.",
		"The people who knew me when I was young, know of my shameful past, and I can never go home again."
	], 

	extra : [
		"Select a Criminal Specialty",
		"First Call",
		"Experinced",
		"Priest",
		"Veteran",
	], 

	toolProfs : ["Artisan's tools", 1], 
	languageProfs : [1, ""], 
	lifestyle : "poor", 
};

BackgroundFeatureList["discovery"] = {  
	description : "My lengthy contemplation over the best way to punish evil has given you access to a unique and powerful discovery. You might have found out about a unique weapon or a powerful enemy or maybe you know of a location with a hidden powerful artifact. It could be a long forgotten site of holy power that no one else has ever seen. Y ou might have uncovered a fact that has long been forgotten, or unearthed some relic infused with fiendish powers that could rewrite history . It might be information that would result in catastophic consequences in the wrong hands, so you have deicded to make sure you get to it first.", 

	source : ["HB", 0], 
};
	
	
	

BackgroundList["doctor"] = { 
	regExpSearch : /doctor/i, 

	name : "Doctor", 
	source : ["HB", 0], 
	skills : ["Persuasion", "Medicine"], 
	gold : 15, 
	equipleft : [ //optional; syntax is: ["description", "amount", "weight"]. Put "" if it is nothing, don't put 0
		["Set of doctors tools", "", "1"],
		["healers kit", "", 2],
	], 
	equipright : [ 
		["Common clothes with hood", "", 3],
		["Token from a Patient", "", ""],
		["Belt pouch (with coins)", "", 1],
	],

	feature : "House Calls", //required; the name of the background feature as it will appear on the sheet. The feature is then retrieved from the BackgroundFeatureList, see below

	trait : [
		"I am sympathetic to anyone in pain",
		"I have a tendency to become focused on my work to the exclusion of everything else.",
		"When someone is injured, I will drop all other responsibilities to tend to them.",
		"I have seen too much horror to be affected by scenes of suffering.",
		"I am skeptical of magic, instead trusting in science.",
		"I like to explain my theories of medicine to anyone who will listen.",
		"I am constantly taking note of potential signs and symptoms in the people I meet.",
		"I take every opportunity I can get to wash my hands.",
	], 

	ideal : [
		["Empathy",
			"Empathy. All I care about is the relief my skills bring to others. (Good)"
		],
		["Change",
			"Change. Those who seek to cure must be as adaptable as those who seek to harm. (Chaotic)"
		],
		["Respect",
			"Respect. The sick and dying deserve to be treated with dignity. (Good)"
		],
		["Greed",
			"Greed. Those in need of my services will pay through the nose to get them. (Evil)"
		],
		["Efficiency",
			"Efficiency. I must not let emotions cloud my ability to do my job. (Lawful)"
		],
		["Preservation",
			"Preservation. Life must be preserved by any means. (Any)"
		],
	], 

	bond : [
		"I'll always remember the place where I learned my medical skills.",
		"Nothing is more important than my patients.",
		"I am working on a cure for the plague that decimated my home.",
		"Someone I loved died of an illness. I want to spare others from that same fate.",
		"I am compiling my medical discoveries in a series of tomes, which I hope will educate future generations.",
		"I have a terminal disease and am trying to find a cure before it's too late."
	], 

	flaw : [
		"I am haunted by the memories of every patient I could not save.",
		"I use hard drink to numb myself to stress.",
		"I am disgusted by the body's potential for filth and disease.",
		"I once made a mistake that cost a patient their life. I must make sure that no one finds out.",
		"I have a tendency to see my patients as opportunities rather than people.",
		"I am hesitant to injure others, even in self-defense."
	],  //required; A list of the bonds that can be chosen using the "Add Features" button on the second page. This list can be any length.

	extra : [
		"Select a Doctor Specialty",
		"Apothecary",
		"Battlefield medic",
		"Dentist",
		"Folk healer",
		"Herbalist",
		"Nurse",
		"Surgeon",
		"Veterinarian"
	], 

	toolProfs : [["Gaming Set", 1], ["Herbalism Kit", "Wis"]], 
	languageProfs : [1, ""], 
	lifestyle : "modest", 
};

BackgroundFeatureList["house calls"] = {  
	description : "My talents make you highly sought after particularly in regions or communities with little access to medicine. Those who recognize you as a doctor may request your services, and may offer you a reward in return, should you choose to provide them. You might be able to receive free or discounted food and lodging or gain access to normally off-limits locations by leveraging your position as a healer , if your services are needed.",

	source : ["HB", 0], 
};


BackgroundList["princess"] = { 
	regExpSearch : /princess/i, 

	name : "Princess", 
	source : ["HB", 0], 
	skills : ["Arcana", "Performance"], 
	gold : 20, 
	equipleft : [ //optional; syntax is: ["description", "amount", "weight"]. Put "" if it is nothing, don't put 0
		["Scroll of pedigree", "", ""],
		["Skin of fine zzar or wine", "", 5],
	], //items as they are added to the left column of the Equipment section on the second page when selecting "Background's items and gold" from the "Add Equipment" menu.

	equipright : [ //optional; samy syntax as "equipleft"
		["Quality fine clothes", "", 2],
		["Disguise kit", 2, 3],
		["Belt pouch (with coins)", "", 1],
	],

	feature : "Diamond amoung the Rough", 

	trait : [
		"I speak eloquently and correctly, and encourage others to do the same.",
		"I am graceful in my movements and ways, almost as if performing a dance with every step.",
		"No matter how I try and hide it, my voice commands respect.",
		"I am very uncertain about the world and often appear timid  until I know more about it.",
		"I yearn for adventure, and will not be stopped from experiencing all that life has to offer before I am returned to my cage.",
		"I still enjoy a good party, and will drop everything to join in  the fun.",
		"Animals must be able to sense my nobility. The flock to me and we sing the songs of the world together.",
		"I prize the most handsome of clothes, but know better than to wear them in my new life"
	], 

	ideal : [
		["Honor",
			"Honor: I don't steal from others in the trade. (Lawful)"
		],
		["Freedom",
			"Freedom: Chains are meant to be broken, as are those who would forge them. (Chaotic)"
		],
		["Charity",
			"Charity: I steal from the wealthy so that I can help people in need. (Good)"
		],
		["Greed",
			"Greed: I will do whatever it takes to become wealthy. (Evil)"
		],
		["People",
			"People: I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)"
		],
		["Redemption",
			"Redemption: There's a spark of good in everyone. (Good)"
		],
	], //required; A list of the  ideals that can be chosen using the "Add Features" button on the second page. This list can be any length. Take note of the two-step build for every ideal, this is essential!

	bond : [
		"I'm trying to pay off an old debt I owe to a generous benefactor.",
		"My ill-gotten gains go to support my family.",
		"Something important was taken from me, and I aim to steal it back.",
		"I will become the greatest thief that ever lived.",
		"I'm guilty of a terrible crime. I hope I can redeem myself for it.",
		"Someone I loved died because of a mistake I made. That will never happen again."
	], //required; A list of the bonds that can be chosen using the "Add Features" button on the second page. This list can be any length.

	flaw : [
		"When I see something valuable, I can't think about anything but how to steal it.",
		"When faced with a choice between money and my friends, I usually choose the money.",
		"If there's a plan, I'll forget it. If I don't forget it, I'll ignore it.",
		"I have a \"tell\" that reveals when I'm lying.",
		"I turn tail and run when things look bad.",
		"An innocent person is in prison for a crime that I committed. I'm okay with that."
	],  //required; A list of the bonds that can be chosen using the "Add Features" button on the second page. This list can be any length.

	extra : [
		"Select a Criminal Specialty",
		"Blackmailer",
		"Burglar",
		"Enforcer",
		"Fence",
		"Highway robber",
		"Hired killer",
		"Pickpocket",
		"Smuggler",
		"Spy"
	], //optional; the extra options the background gives on the first page of the sheet (in line Background at the top there are two drop-down menus). The first entry in this array is what is used for the mouseover text. If your background offers no extra features, simply delete this entry. Make sure that text you enter here fits into the field, or it won't look as good

/* SYNTAX CHANGE v12.998 >> old syntax for 'tools' and 'languages' are no longer supported!! */
	toolProfs : [["Musical instrument", 3], ["Thieves' tools", "Dex"]], // optional; this is an array with the tool proficiencies gained. Each entry can be its own array of 2 entries. The first entry is the name of the tool and the second entry is either 1) a number if the tool is yet to be chosen, or 2) the 3-letter ability score abbreviation if the tool is to be listed in the skill section and have a bonus calculated

	languageProfs : [1, "Elvish"], // optional; this is an array of the language proficiencies gained. An entry can either be 1) a string that represents the language learned or 2) a number which is the number of language gained that can be chosen by the player

	variant : ["urban bounty hunter", "pirate"], //optional; the variants this background has, using the exact names of the entry of the variant in the BackgroundSubList. If you don't want to define a variant, you can remove this line

	lifestyle : "comfortable", //optional; sets the lifestyle of the sheet. Options are: "wretched", "squalid", "poor", "modest", "comfortable", "wealthy", or "aristocratic"
};

BackgroundFeatureList["exceptional quality"] = {  //Note the use of only lower case!
	description : "My accent, mannerisms, figures of speech all mark me as foreign. Curious glances are directed my way wherever I go. A nuisance, but I also gain the friendly interest of the curious. I can parley this attention into access I might not otherwise have, for me and my companions. Nobles, scholars, merchants, and guilds, might be among the interested.", //required; the description of the feature as it will be put on the sheet. Make sure that this fits into the field or it won't look so pretty.

	source : ["HB", 0], //required; the source and the page number of the feature
};
