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
	gold : 50, 
	equipleft : [ 
		["Scroll of pedigree", "", ""],
		["Royal signet ring", "", ""],
	], 

	equipright : [ 
		["Quality fine clothes", "", 2],
		["Disguise kit", 2, 3],
		["Belt pouch (with coins)", "", 1],
	],

	feature : "Diamond amoung the Rough", 
	featureAlt : "Force of Personality",

	trait : [
		"I speak eloquently and correctly, and encourage others to do the same.",
		"I am graceful in my movements and ways, almost as if performing a dance with every step.",
		"No matter how I try and hide it, my voice commands respect.",
		"I am very uncertain about the world and often appear timid until I know more about it.",
		"I yearn for adventure, and will not be stopped from experiencing all that life has to offer before I am returned to my cage.",
		"I still enjoy a good party, and will drop everything to join in the fun.",
		"Animals must be able to sense my nobility. The flock to me and we sing the songs of the world together.",
		"I prize the most handsome of clothes, but know better than to wear them in my new life.",
	],  

	ideal : [
		["Equalty",
			"Equality: I believe that in their hearts, everyone is the same. They just wear different hats. (Good)"
		],
		["Respect",
			"Respect. Even in secrecy, I demand respect be given to me and to those around me. (Lawful)"
		],
		["Freedom",
			"Freedom. People should be allowed to do as they wish, regardless of station. (Chaotic)"
		],
		["Servitude",
			"Servitude.In time, everyone will live to serve me. For now, I gauge how best to use them. (Evil)"
		],
		["Independence",
			"Independence. I do not wish for any obligation to be thrown at me. I simply wish to live. (Neutral)"
		],
		["Rule",
			"Rule.I will one day rule the lands. I hope to learn all I can about them before then. (Any)"
		],
	], 
	
	bond : [
		"I greatly respect my parents, not because of their birth right but because of their accomplishments. I hope to someday meet, and then surpass, their expectations of me.",
		"It is my tutors I have to thank for instilling a wanderlust in my heart, and I wish to continue to learn in their memory.",
		"It was a poor merchant's child who first showed my life beyond the castle walls, and who taught me the thrill of adventure.",
		"My older sibling got to ride off to war while I was young, and I still envy them that opportunity.",
		"I was kidnapped as a child, and while a terrifying experience thank those responsible for showing me the world is far bigger than my own inside the castle.",
		"I've had a fascination with the tales heroes all my life, and wish that I can one day be as great as them"
	], 
	
	flaw : [
		"I am prone to revealing my position when I do not get my way.",
		"I prefer not to touch things, especially if they might be dirty.",
		"I refuse to do any hard labor, and will trick or pay others to work in my place.",
		"I will one day rule these lands. Everyone is below me.",
		"I still enjoy a good party, and will drop everything to join in the fun. Perhaps a little too much.",
		"I believe in excess and will spend my coin on extra food, drink and clothing",
	],  


	toolProfs : ["Disguise kit", "Cha"], 
	languageProfs : ["Common", "Elven", 1], 
	lifestyle : "aristocratic", 
};

BackgroundFeatureList["diamond amoung the rough"] = {  
	description : "Choose an alter ego. This person may not be someone that already exists. You have all the required paperwork involved in being of your alter ego's station, and have advantage on any checksinvolved in playing that person. Disguising yourself as your alter ego takes half the time necessary.", 

	source : ["HB", 0], 
};

BackgroundFeatureList["force of personality"] = {  
	description : "You have been told all your life that you can be whatever you wish to be, allowing your innate magical ability to fill in the gaps of knowledge. You may replace either Wisdom or Intelligence with Charisma for all features of a spellcasting class of your choice.", 

	source : ["HB", 0], 
};


BackgroundList["fairy tale child"] = { 
	regExpSearch : /fairy tale child/i, 
	name : "Fairy Tale Child", 
	source : ["HB", 0], 
	skills : ["Animal Handling", "Performance"], 
	gold : 20, 
	equipleft : [ 
		["Small Diary", "", ""],
		["Nice Common Clothes", "", 2],
	], 
	equipright : [ 
		["Belt pouch (with coins)", "", 1],
	],

	feature : "Little Helpers", 

	trait : [
		"I crave new experiences.",
		"Every night, I wish upon a star.",
		"Having full conversations with animals that can’t talk back is normal for me.",
		"I break out into song for absolutely no reason and without warning.",
		"Inanimate objects have names, such as ‘mister table’ or ‘missus chair’.",
		"I often narrate my life for my own amusement",
		"I brush my hair 100 times before bed.",
		"I fuss over those I care about, wanting them to look their best",
		"I blow up at the slightest insult."
	], //required; A list of the personality traits that can be chosen using the "Add Features" button on the second page. This list can be any length.

	ideal : [
		["Optimism",
			"Optimism : Every cloud has a silver lining. (Any)"
		],
		["Altruism",
			"Altruism : Life is a wonderful gift, and it should be wonderful for everyone. (Good)"
		],
		["Planning",
			"Planning : A story that lacks structure won’t have a happy ending. (Lawful)"
		],
		["Determinism",
			"Determinism : We go wherever we’re fated to go, and do what we’re fated to do. (Neutral)"
		],
		["Control",
			"Control : Being free means taking matters into your own hands. (Chaotic)"
		],
		["Reprisal",
			"Reprisal : A bad deed deserves a cruel punishment. (Evil)"
		],
	], 

	bond : [
		"The despot that rules my home must be deposed once I am strong enough to face them.",
		"I will do great things with my life to make up for the time I lost.",
		"I was told my prince/princess would find me, but I have decided to find them first.",
		"I will return home someday.",
		"I have heard tales of a relative abusing the magical gifts they were given from birth. I intend to set them right.",
		"I must find out what put me where I ended up.",
		"There is a secret I must uncover"
	], 

	flaw : [
		"I am quick to assume I have found my one true love.",
		"I truly believe I am the fairest in the land.",
		"I am royalty and believe people should treat me as such.",
		"I talk through my decision making processes out loud",
		"I am more concerned with aesthetics than I am practicality.",
		"I insist on telling anyone who will listen the tale of my ‘harrowing’ childhood"
	],  


	toolProfs : ["Choose any 3", 3], 
	languageProfs : ["Elvish", 1], 

	lifestyle : "wealthy", 
};

BackgroundFeatureList["exceptional quality"] = {  
	description : "Wherever there is wildlife, you are with friends. Tiny creatures will complete menial tasks for you without you even having to ask, such as setting a table or putting your coat on. You are fully in control of whether they do so or not simply by willing it. These creatures will flee if provoked or startled but are able to return quickly after it becomes safe to do so.", 

	source : ["HB", 0], 
};

