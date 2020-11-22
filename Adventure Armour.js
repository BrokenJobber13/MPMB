var iFileName = "Adventure Armour.js"; 
RequiredSheetVersion(12.999); 




ArmourList["dragon scale"] = { 
	regExpSearch : /Dragon Scale/i, 
	name : "Dragon Scale", 
	source : ["HB", 0], 
	type : "heavy", 
	ac : 18, 
	stealthdis : true, 
	weight : 60, 
	strReq : 14, 
	invName : "Dragon Scale", 
};

ArmourList["shinobi jacket"] = { 
	regExpSearch : /Shinobi Jacket/i, 
	name : "Shinobi Jacket", 
	source : ["HB", 0], 
	type : "medium", 
	ac : 13, 
	dex : 3,
	stealthdis : false, 
	weight : 20, 
	strReq : 12, 
	invName : "Shinobi Jacket", 
};
ArmourList["full samurai armour"] = { 
	regExpSearch : /Full Samurai Armour/i, 
	name : "Full Samurai Armour", 
	source : ["HB", 0], 
	type : "heavy", 
	ac : 18, 
	stealthdis : true, 
	weight : 50, 
	strReq : 15, 
	invName : "Full Samurai Armour", 
};
ArmourList["bronze cuirass"] = { 
	regExpSearch : /Bronze Cuirass/i, 
	name : "Bronze Cuirass", 
	source : ["HB", 0], 
	type : "medium", 
	ac : 14, 
	dex : 3, 
	stealthdis : true, 
	weight : 30, 
	strReq : 10, 
	invName : "Bronze Cuirass", 
	addMod : true, 
};

ArmourList["scaled leather"] = { 
	regExpSearch : /Scaled Leather/i, 
	name : "Scaled Leather", 
	source : ["HB", 0], 
	type : "light", 
	ac : 13, 
	stealthdis : true, 
	weight : 15, 
	strReq : 10, 
	invName : "Scaled Leather", 
	addMod : true, 
}
ArmourList["forge dwarf plate"] = { 
	regExpSearch : /Forge Dwarf Plate/i, 
	name : "Forge Dwarf Plate",
	source : ["HB", 0], 
	type : "heavy", 
	ac : 18, 
	dex : 0, 
	stealthdis : true, 
	weight : 80, 
	strReq : 17, 
	invName : "Forge Dwarf Plate", 
	addMod : false, 
};

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
