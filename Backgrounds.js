var iFileName = "Backgrounds.js"; 
RequiredSheetVersion(12.999); 
BackgroundList["advisor"] = { 
	regExpSearch : /Advisor/i, 
	name : "Advisor", 
	source : ["HB", 0], 
	skills : ["History", "Persuasion"], 
	gold : 15, 
	equipleft : [ 
		["A Bottle of ink and Quill", "", ""],
		["Pieces of Parchment", "5", ""],
		["Set of Fine Clothes", "", "2"],
	], 
	feature : "Position of Power", 
	trait : [
		"I am convinced that my beliefs are the correct ones. Anyone who believes differently is at best mistake.",
		"I enjoy when people recognize my importance.",
		"I am annoyed by people who ask me for help and advice. Just because I am an advisor does not mean i am their advisor.",
		"I consider those of lesser station than me to be inferior and less worthy of respect.",
		"I never forget a debt owed to me, nor one I owe to someone else.",
		"It is my responsibility to make sure my friends are taken care of however I can.",
		"I consder it my duty to educate those who are iignorant of something I am knowledgeable about.",
		"I always conduct myself formally and with dignity.",
	], 
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
	], 
	bond : [
		"The company I am part of is all that matters to me. My role is to serve it as best I can.",
		"I admire and respect my superior, and I will gladly serve him or her or as long as they will have me.",
		"I was put in this position by influential forces to keep an eye on my superior. My true loyalty lies with them.",
		"I was put in this position by my mentor, my superior'spredecessor. I miss my mentor dearly.",
		"People will know my name before I'm through with this world.",
		"This position is a means to an end. Someday, it will be my turn to rule."
	], 
	flaw : [
		"I advise rather than lead because I'm unwilling to make hard decisions myself.",
		"My advice once caused catastrophic consequences, but he does not realise. I'll do anything to keep him from knowing.",
		"I have a hard time saying no to people who flatter me, regardless of their motivations.",
		"I can't help myself when I learn something secret. I simply must tell someone.",
		"I am not afriad to use my position of power if it means I can get the things I want.",
		"I secretly believe that I should be the one in power, not my superior."
	],  
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
	], 
	toolProfs : [["", 0], ["Forgery Kit", "Int"]], 
	languageProfs : [2], 
	lifestyle : "aristocratic", 
};

BackgroundFeatureList["position of power"] = {  
	description : "Because of your position, you command a certain respect. People who both know who you are and also have a vested interested in pleasing your liege tend to give you the benefit of the doubt and will go out of their way not to draw your ire, lest they potentially incur the wrath of your superior. Others within the organization you are a part of are also likely to curry favor from you however they can. Beware, however, as there could also be some close to you who are jealous of your position and may wish for your downfall.", //required; the description of the feature as it will be put on the sheet. Make sure that this fits into the field or it won't look so pretty.
};

BackgroundList["demon hunter"] = { 
	regExpSearch : /Demon Hunter/i, 
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
	equipleft : [ 
		["Set of doctors tools", "", "1"],
		["healers kit", "", 2],
	], 
	equipright : [ 
		["Common clothes with hood", "", 3],
		["Token from a Patient", "", ""],
		["Belt pouch (with coins)", "", 1],
	],

	feature : "House Calls", 

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
	],  
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
	], 
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


BackgroundList["dragon slayer"] = { 
	regExpSearch : /dragon slayer/i, 
	name : "Dragon Slayer", 
	source : ["HB", 0], 
	skills : ["Survival", "Stealth"], 
	gold : 15, 

	equipleft : [ 
		["Marked Map", "", ""],
	], 

	equipright : [ 
		["Traveller's clothes", "", 3],
		["Belt pouch (with coins)", "", 1],
	],

	feature : "Dragon Slayer", 

	trait : [
		"I love the attention that comes with slaying dragons.",
		"I take my time to understand the threat before making a decision.",
		"I can't sit still knowing a dragon's lair is nearby.",
		"I can't help but empathize with those I meet who have faced a dragon and lived to tell the tale.",
		"I focus intently on my work resulting in terrible self awareness.",
		"I focus so much on other's problems that I have little self awareness.",
		"A respectable metallic dragon gave me their blessing.",
		"I believe I am incredibly lucky to be alive after a close encounter in a dragon's lair",
	], 

	ideal : [
		["Kindness",
			"Kindness:  I'll help those suffering whenever I can. (Good)"
		],
		["Discovery",
			"Discovery: Finding and eradicating dragon lairs is the only way we can protect ourselves."
		],
		["Fun",
			"Fun: I love hunting dragons! There is nothing I would rather do."
		],
		["Justice",
			"Justice: The murderous chromatics must be brought before my might."
		],
		["Aspiration",
			"Aspiration: My dreams call me toward the slaying of an Ancient threat"
		],
		["Unity",
			"Unity: If we don't do our part, we will be doomed to draconic servitude."
		],
	], 

	bond : [
		"The Dragonstalker who taught me is closer to me than family.",
		"I know someone affected by a dragon's attack and must avenge their pain.",
		"The first people to be hurt by dragonkind will be the common folk. I need to protect them.",
		"A fellow Dragonstalker and I are racing to be the first to slay a powerful dragon.",
		"I was meant to be sacrificed to a dragon and escaped.",
		"I seek to force a dragon to serve my will.",
	], 

	flaw : [
		"I have a hard time fitting in with civilized areas.",
		"I long for the next test against a worthy opponent.",
		"My belief in vengeance sometimes leads me astray.",
		"Wide open spaces make me uncomfortable.",
		"I am haunted by the nightmares of a dragon's attack.",
		"All winged lizards make me uneasy no matter their size",
	],  

	toolProfs : [["Leatherworker's tools", "Int"], ["Smith's tools", "Dex"]], 
	languageProfs : ["Common", "Draconic"], 
	lifestyle : "comfortable", 
};

BackgroundFeatureList["dragon slayer"] = {  
	description : "As a Dragonstalker you've picked up useful knowledge for dealing with a dragon threat. When you discover a threat you automatically recall some useful facts about the dragon type based on the information available. This can include and is not limited to historical knowledge of the dragon. If you spend 8 hours in a city you can surmise a great deal about the local area - if a dragon threat is present, what the dragon age and type.", 

	source : ["HB", 0], 
};


BackgroundList["beauty"] = { 
	regExpSearch : /beauty/i, 
	name : "Beauty", 
	source : ["HB", 0], 
	skills : ["Pursasion", "Performance"], 
	gold : 15, 
	equipleft : [ 
		["A Hand Miror", "", ""],
		["Grooming kit", "", 5], 
],
	equipright : [ 
		["Fine clothes", "", 2],
		["Token of affection", "", ""],
		["Small powder box", "", 2],
		["Belt pouch (with coins)", "", 1],
	],
  
	feature : "Enhancing Features", 
	
	trait : [
		"I go to great lengths to disguise myself to stay unnoticed.",
		"With the impractical outfits I wear into battle, it's a wonder I'm still alive.",
		"I jump at the chance to give anyone a makeover.",
		"There's no shame in using my charm to get my way.",
		"I'm worried my looks intimidate people. I don't think I'm better than you, I swear!",
		"I strike a pose at any opportunity, even in the midst of battle. I don't realize I do this.",
		"I am stubbornly oblivious about my own attractiveness.",
		"I can't stand grime, so I clean myself obsessively",
	], 

	ideal : [
		["Beauty",
			"Beauty: I want to be the embodiment of all that is beautiful. (Any)"
		],
		["Fun",
			"Fun: I want to see how much my looks will let me get away with. (Chaotic)"
		],
		["Control",
			"Control: I gleefully manipulate others to get my way. (Evil)"
		],
		["Inspiration",
			"Inspiration: I want my presence to uplift those around me. (Good)"
		],
		["Expectation",
			"Expectation: I will be exactly what society wants and needs me to be, in fashion and behavior. (Lawful)"
		],
		["Aspiration",
			"Aspiration: I want to be as beautiful on the inside as I am on the outside. (Good)"
		],
	], 

	bond : [
		"I am a close consort to a monarch or noble and I will do whatever I can to honor them.",
		"I am a representative of an organization hired to advertise them across the world.",
		"No one takes me seriously as an adventurer because I'm so high-maintenance. I will prove them wrong.",
		"An evil person took advantage of me when I was young and naive, and I want revenge.",
		"I seek immortality so that I may stay young and beautiful forever.",
		"My wealthy family only saved me from poverty because of my beauty, but I still owe them my life.",
	], 

	flaw : [
		"My looks are superior, so I must be superior in every other way.",
		"Sometimes, my fear of soiling my beauty keeps me from taking risks and doing dirty work.",
		"I always expect other people to do things for me.",
		"I have been used in traumatizing ways too many times for trust to come easily.",
		"I waste my money on luxuries and pampering.",
		"I could stare at myself in the mirror all day.",
	],  

	extra : [
		"Select a cause of beauty",
		"Divine Blessing, Reward",
		"Divine Blessing, Tool",
		"Parents made deal with demon",
		"Genie granted wish",
		"Granted by powerful spellcaster",
		"Average beauty, talent for makeup",
		"Natural Beauty",
	], 
	
	languageProfs :  [2], 
	lifestyle : "comfortable", 
};

BackgroundFeatureList["enhancing features"] = {  
	description : "My appearance means that folk may treat me differently. They will be more willing to chat or give you special treatment. However your interactions are more likely to be mistaken as flirtatious. They may flirt, get upset at rejection, get jealous etc.", 

	source : ["HB", 0], 
};


var iFileName = "Abandoned - BackgroundList & BackgroundFeatureList.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); 
BackgroundList["abandoned"] = { 
	regExpSearch : /Abandoned/i, 

	name : "Abandoned", 
	source : ["HB", 0], 
	skillstxt : "Choose two from Survival, Nature, and Arcana", 
	gold : 15, 
	equipleft : [ 
		["Hawk Medallion", 1, ""],
		["Pan Flute", 1, 2],
    ["Hide Clothes", "", "",], 
    ],
	feature : "Animal Instinct",
	trait : [
		"I tend to rest alot and enjoy my surroundings.",
		"I do not like being in populated places very much and avoid them as much as possible.",
		"I try to befriend animals that cross my path.",
		"I love to play my pan flute out in nature, preferably sitting on a tree branch.",
		"I am content with being alone and prefer it.",
		"I don't play attention to the risks in a situation. Never tell me the odds.",
		"I prefer to resolve matters as calmly as possible.",
	], 

	ideal : [
		["Guardian",
    "Guardian : I will be known as the guardian of the forest before I die",
		],
		["Searching",
			"Freedom : It is my mission to find the tree I once encountered along with the fairy.",
		],
		["Charity",
			"Charity : I will find my parents and I will get answers for why I was abandoned.",
		],
		["Greed",
			"Greed : I will rase children of my own in this forest and pass down my knowledge.",
		],
		["People",
			"People : I will become one with nature and use its resources for good.",
		],
		["Redemption",
			"Redemption : I will follow Pan in hopes to one day meet him.",
		],
	], 

	bond : [
		"I protect nature and nature protects me.",
		"My medallion is what drives me to find my parents.",
		"The tree is why I remain in the forest, I search for the secrets it hides.",
		"A pack of wolves protected me from a bear attack while I was resting.",
		"I hear voices of children telling me to follow Pan.",
		"The only people I knew left me for reasons unknown to me.",
	], 
	flaw : [
		"I tend to get lost in the beauty of nature and to pay attention to my surroundings.",
		"I scare anyone I meet and cannot figure out why.",
		"I get overly aggressive if someone harms nature.",
		"I trust in animals too easily when I should not.",
		"From being alone for so long I talk to myself, People usually avoid me for this.",
		"When talking to people I usually accidentally offend them, I do not have a filter.",
	],  

	toolProfs : [["pan flute"]],	
};
BackgroundFeatureList["Animal Instinct"] =   {
  description : "Since I have been living in nature for the majority of my life, I have adapted to any terrain with trees, water, snow, and rain.",
  source : ["HB", 0],
    };



