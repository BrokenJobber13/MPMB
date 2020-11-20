var iFileName = "Shimmering Isles - SourceList.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned

SourceList["HB:SI"] = { //Object name; This is the way the source is called upon, so the way you would enter it as the "Source" in any other of the JavaScript Syntax. Note that this is case sensitive! //Also note that this has to be an unique value. Look at the default sources in the "Complete SourceList.js" file

	name : "Homebrew: Shimmering Isles", //Required; The name of the source as written in full. This will be used in the tooltips/mouseover text.

	abbreviation : "HB:SI", //Required; The abbreviation of the source. This can only be letters and a colon! This will be used to refer to the source in the form fields //Note that this doesn't have to be the same as the way the source is called upon, but it can be for convenience

	group : "Unearthed Arcana", //Optional; Adding this will make the sheet put the source into a group when using the "Sources" function where you can include/exclude sources. // The default options for this are "Unearthed Arcana", "Official Sources", "Official Sources (small)", and "default". // If you enter "default", the source can't be excluded using the "Sources" function

	url : "", //Optional; A link to the source if it can be found on the internet. This link is used in the Source Selection Dialogue

	date : "2020/11/19", //Optional; the date of the resource, written as year/month/day
}
