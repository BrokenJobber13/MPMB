var iFileName = "Adventure Armour.js"; 
RequiredSheetVersion(12.999); 

ArmourList["heavy longcoat"] = { 
	regExpSearch : /Heavy Longcoat/i, 
	name : "Heavy Longcoat", 
	source : ["HB", 0], 
	type : "medium", 
	ac : 14, 
	dex : 2, 
	stealthdis : false, 
	weight : 17, 
	strReq : 13, 
	invName : "Heavy Longcoat", 
	addMod : true, 
};

ArmourList["light longcoat"] = { 
	regExpSearch : /Light Longcoat/i, 
	name : "Light Longcoat", 
	source : ["HB", 0], 
	type : "light", 
	ac : 12, 
	dex : 2, 
	stealthdis : false, 
	weight : 8, 
	strReq : 10, 
	invName : "Light Longcoat", 
	addMod : true, 
};

ArmourList["layered furs"] = { 
	regExpSearch : /layered furs/i, 
	name : "Layered Furs", 
	source : ["HB", 0], 
	type : "light", 
	ac : 10, 
	dex : 2, 
	stealthdis : false, 
	weight : 5, 
	strReq : 10, 
	invName : "Layered Furs", 
	addMod : true, 
};

ArmourList["marine uniform"] = { 
	regExpSearch : /marine uniform/i, 
	name : "Marine Uniform", 
	source : ["HB", 0], 
	type : "light", 
	ac : 11, 
	dex : 2, 
	stealthdis : true, 
	weight : 4, 
	strReq : 10, 
	invName : "Marine Uniform", 
	addMod : true, 
};
