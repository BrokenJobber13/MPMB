var iFileName = "Adventure Tools.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned

ToolsList["marked playing cards"] = { //Note the use of only lower case! Also note the absence of the word "var" and the use of brackets [].

	infoname : "Marked Playing Cards [5 gp]", //Required; This is the name as it will appear in the equipment menu

	name : "Marked Playing Cards", //Required; The name as it will be put into the equipment table

	amount : "54", //Required; The amount as will be put into the equipment table. You can put "" here if you like

	weight : "", //Required, has to be a number; The weight as will be put into the equipment table. Note that the total weight is calculated as Amount×Weight. You can put "" here if you like
};

ToolsList["loaded dice"] = { //Note the use of only lower case! Also note the absence of the word "var" and the use of brackets [].

	infoname : "Loaded dice [5 gp]", 
	name : "Loaded Dice", 
	amount : "2", 
	weight : "", 
};

ToolsList["grooming kit"] = { //Note the use of only lower case! Also note the absence of the word "var" and the use of brackets [].

	infoname : "Grooming Kit [5 gp]", 
	name : "Grooming Kit", 
	amount : "", 
	weight : "1", 
};
