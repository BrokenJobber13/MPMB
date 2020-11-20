var iFileName = "Adventure Armour.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned

ArmourList["layered furs"] = { //Object name; Note the use of only lower case! Also note the absence of the word "var" and the use of brackets []

	regExpSearch : /layered furs/i, //Required; regular expression of what to look for (i.e. now it looks for any entry that has the word "protect" followed by the word "me" in it, disregarding capitalization). If this looks too complicated, just write: /protectme/i

	name : "Layered Furs", //Required;

	source : ["HB", 0], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]

	type : "light", //Required; the type of the weapon. Options are "medium", "light", "heavy", and ""

	ac : 10, //Required; the Armour Class (AC) granted by the Armour

	dex : 2, //Optional; the maximum Dexterity modifier that is allowed in combination with this armour. Just remove this entry if the armour doesn't have a maximum Dex mod allowance or if the Dex mod is determined by the armour type (i.e. 2 for Medium and 0 for Heavy). //This entry will always override any maximum that is determined by the type. // If you set this to -10, no Dex mod will be added to the AC, regardless of the value of the Dex mod (so also not negative values)

	stealthdis : false, //Required; whether or not the armour gives disadvantage on stealth checks (true or false)

	weight : 5, //Optional; the weight in lb. If the armour has no weight, just remove this line. If this line is not present, the item will be ignored when adding armour to the inventory

	strReq : 10, //Optional; the Strength score required to be able to wear the armour; the sheet doesn't actually do anything with this information (yet)

	invName : "Layered Furs", //Optional; the name as it will be added to the equipment section if selected to do so in the equipment menu. If you omit this, the sheet will use the above defined 'name' when adding this to the equipment section

	addMod : true, //Optional; set to true if the armour also allows for the addition of a secondary ability modifier (so in addition to Dex), as is the case with the monk's unarmed defence. This secondary ability modifier is taken from the three-letter abbreviation in brackets in the name. So if the name contains "(Str)", it adds the Strength modifier.
};
