var iFileName = "Adventure Gear.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned

GearList["basic bomb"] = { //Object name; Note the use of only lower case! Also note the absence of the word "var" and the use of brackets []. //The name here is used to sort the gear alphabetically.

	infoname : "Basic Bomb [150 gp]", //Required; This is the name as it will appear in the equipment menu

	name : "Basic Bomb", //Required; The name as it will be put into the equipment table

	amount : 1, //Required; The amount as will be put into the equipment table. You can put "" here if you like

	weight : 1, //Required, has to be a number; The weight as will be put into the equipment table. Note that the total weight is calculated as Amount×Weight. You can put "" here if you like

	source : ["HB", 0] //Optional; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". //If you don't define this, the equipment will always be available, regardless of what sources are excluded/included // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]
};

GearList["grooming kit, animal"] = { 

	infoname : "Grooming Kit, Animal [2 sp]",
	name : "Grooming Kit, Animal",
	amount : "", 
	weight : 1, 
	source : ["HB", 0]
};


GearList["grappling bolts"] = { 

	infoname : "Grappling Bolts [2 gp]",
	name : "Grappling Bolts",
	amount : 5, 
	weight : 1, 
	source : ["HB", 0]
};


GearList["grappling arrows"] = { 

	infoname : "Grappling Arrows [2 gp]",
	name : "Grappling Arrows",
	amount : 5, 
	weight : 1, 
	source : ["HB", 0]
};

GearList["gunpowder small keg"] = { 

	infoname : "Gunpowder, Small Keg [20 gp]",
	name : "Gunpowder, Small Keg",
	amount : 1, 
	weight : 10, 
	source : ["HB", 0]
};

GearList["compass"] = { 

	infoname : "Compass [100 gp]",
	name : "Compass",
	amount : "", 
	weight : "", 
	source : ["HB", 0]
};

GearList["eye patch"] = { 

	infoname : "Eye Patch [1 sp]",
	name : "Eye Patch",
	amount : 1, 
	weight : "", 
	source : ["HB", 0]
};

GearList["pirate captain hat"] = { 

	infoname : "Pirate Captain's Hat [5 gp]",
	name : "Pirate Captain's Hat",
	amount : 1, 
	weight : 2, 
	source : ["HB", 0]
};

GearList["pirates hat"] = { 

	infoname : "Pirate's Hat [5 sp]",
	name : "Pirate's Hat",
	amount : 1, 
	weight : 1, 
	source : ["HB", 0]
};

GearList["nautical chart"] = { 

	infoname : "Nautical Chart [25 gp]",
	name : "Nautical Chart",
	amount : 1, 
	weight : "", 
	source : ["HB", 0]
};

GearList["sextant"] = { 

	infoname : "Sextant [100 gp]",
	name : "Sextant",
	amount : 1, 
	weight : 2, 
	source : ["HB", 0]
};
