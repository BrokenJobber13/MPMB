var iFileName = "Adventure Packs.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned

PacksList["tamer"] = { //Object name; Note the use of only lower case! Also note the absence of the word "var" and the use of brackets [].

	name : "Tamer's Kit (3 gp)", // Required; the name as it will appear in the equipment menu.

	source : ["HB", 0], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]

	items : [ // Required; an array of all the items. Although the array is required, you don't actually have to put anything in it.
		["Backpack, with:", "", 5], // Optional; you can add any number of these lines and the syntax is [Item name, Amount, Weight]; A item name is required, but the other two can be put as "", if you don't want it to have anything

		//the rest below are examples:
		["pieces of Dried animal food", 16, ""],
		["Vials of animal scents", 10, ""],
	]
};

PacksList["archaeologists"] = { //Object name; Note the use of only lower case! Also note the absence of the word "var" and the use of brackets [].

	name : "Archaeologists Tools (50 gp)", // Required; the name as it will appear in the equipment menu.

	source : ["HB", 0], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]

	items : [ // Required; an array of all the items. Although the array is required, you don't actually have to put anything in it.
		["Backpack, with:", "", 5], // Optional; you can add any number of these lines and the syntax is [Item name, Amount, Weight]; A item name is required, but the other two can be put as "", if you don't want it to have anything

		//the rest below are examples:
		["Trowel", 1, 1],
		["Hand Brush", "", ""],
		["Magnifying Glass", "", ""],
		["Ink", "", ""],
		["Set of Brushes", "", 1],
		["Full Body Harness", "", 5],
		["Pitons", 10, .25],
		["Argil", "", ""],
		["Calipers", "", ""],
		["Rations", 5, 2],
		["Small Mallet", "", 1],
		["Tinderbox", "", 1],
		["Book of History", "", 1],
		["Book of Languages", "", 1],
		["Waterskin", "", 5],
		["Miner's Pick", "", 2]
		["10Coin Slot container", "", 2],
	]
};

PacksList["pirates pack"] = { //Object name; Note the use of only lower case! Also note the absence of the word "var" and the use of brackets [].

	name : "Pirate's pack (10 gp)", // Required; the name as it will appear in the equipment menu.

	source : ["HB", 0], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]

	items : [ // Required; an array of all the items. Although the array is required, you don't actually have to put anything in it.
		["Satchel, with:", "", 5], // Optional; you can add any number of these lines and the syntax is [Item name, Amount, Weight]; A item name is required, but the other two can be put as "", if you don't want it to have anything

		//the rest below are examples:
		["Bottle of Rum", 1, ""],
		["Pistol Belt", "", ""],
		["Pirate's Clothes", "", ""],
		["Candles", 5, ""],
		["Bandana", "", ""],
		["Hooded lantern", "", 2],
		["Oil, flasks of", 2, 1],
		["Rations, days of", 5, 2],
		["Tinderbox", "", 1],
		["Waterskin", "", 5],
		["Hempen rope, feet of", 50, 0.2]
	]
};

PacksList["pirate captain's pack"] = { //Object name; Note the use of only lower case! Also note the absence of the word "var" and the use of brackets [].

	name : "Pirate Captain's pack (50 gp)", // Required; the name as it will appear in the equipment menu.

	source : ["HB", 0], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]

	items : [ // Required; an array of all the items. Although the array is required, you don't actually have to put anything in it.
		["Backpack, with:", "", 5], // Optional; you can add any number of these lines and the syntax is [Item name, Amount, Weight]; A item name is required, but the other two can be put as "", if you don't want it to have anything

		//the rest below are examples:
		["Nautical Map", 1, ""],
		["Bicorne Hat", "", ""],
		["Sextant", "", ""],
		["Candles", 5, ""],
		["Loaded Dice", 2, ""],
		["Captain's Clothes", "", ""],
		["Pistol Belt", 2, ""],
		["Small Barrel of Rum", "", 1],
		["Hooded lantern", "", 2],
		["Oil, flasks of", 2, 1],
		["Rations, days of", 5, 2],
		["Tinderbox", "", 1],
		["Waterskin", "", 5],
		["Hempen rope, feet of", 50, 0.2]
	]
};

PacksList["cook's supplies"] = { //Object name; Note the use of only lower case! Also note the absence of the word "var" and the use of brackets [].

	name : "Cook's Supplies (15 gp)", // Required; the name as it will appear in the equipment menu.

	source : ["HB", 0], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]

	items : [ // Required; an array of all the items. Although the array is required, you don't actually have to put anything in it.
		["Backpack, with:", "", 5], // Optional; you can add any number of these lines and the syntax is [Item name, Amount, Weight]; A item name is required, but the other two can be put as "", if you don't want it to have anything

		//the rest below are examples:
		["Cooking Pot", 1, 2],
		["Set of Chef's Knives", "", 1],
		["Big Wooden Spoon", "", ""],
		["Bottles of Seasoning", 6, 1],
		["Recipe Journal", "", ""],
		["Cutting Board", "", ""],
		["Harvester's Knives", 5, 1],
		["Oil, flasks of", 2, 1],
		["Rations, days of", 5, 2],
		["Tinderbox", "", 1],
		["Waterskin", "", 5],
		["Hempen rope, feet of", 50, 0.2]
	]
};
