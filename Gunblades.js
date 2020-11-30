var iFileName = "Weapons v13.js";

Single Barrel Free A regular old iron barrel. Capable of single shot fire.
Double Barrel 30 Ds Two iron barrels attached to eachother. Can handle shooting up to two shots simultaneously.
Strong Barrel 80 Ds A strong steal barrel. Capable of granting Semi-Auto, an uncommon gunblade barrel.
Rifled Barrel 120 Ds Increases range by 100 feet. Mostly found on high-grade Gunblades. [ Rare. ]
Cooling Barrel 120 Ds Capable of granting Full-Auto. Mostly found on high-grade Gunblades. [ Super Rare. ]


WeaponsList["Barrel, Single"] = {

	name : "Barrel, Single",
	source : ["HB", 0],
	defaultExcluded : false,
	regExpSearch : /Barrel, Single/i,
	type : "Exotic",
	ability : 1,
	abilitytodamage : false,
	damage : [1, 4, "piercing"],
	range : "Melee",
	description : "Gunblade Barrel, Single (1), Reload: Action",
	list : "Exotic",
	weight : 0.05,
 };

WeaponsList["Freezer Shots"] = {

	name : "Freezer Shots",
	source : ["HB", 0],
	defaultExcluded : true,
	regExpSearch : /Freezer Shots/i,
	type : "Exotic",
	ability : 1,
	abilitytodamage : false,
	damage : [3, 4, "cold"],
	range : "Melee",
	description : "Gunblade Ammunition (6)",
	list : "Exotic",
	weight : 0.05,
 };

WeaponsList["Chemical Shots"] = {

	name : "Chemical Shots",
	source : ["HB", 0],
	defaultExcluded : true,
	regExpSearch : /Chemical Shots/i,
	type : "Exotic",
	ability : 1,
	abilitytodamage : false,
	damage : [2, 6, "acid"],
	range : "Melee",
	description : "Gunblade Ammunition (6)",
	list : "Exotic",
	weight : 0.05,
 };

WeaponsList["Incindiery Shots"] = {

	name : "Incindiery Shots",
	source : ["HB", 0],
	defaultExcluded : true,
	regExpSearch : /Incindiery Shots/i,
	type : "Exotic",
	ability : 1,
	abilitytodamage : false,
	damage : [1, 8, "fire"],
	range : "Melee",
	description : "Gunblade Ammunition (8)",
	list : "Exotic",
	weight : 0.05,
 };

WeaponsList["Scattershot Shells"] = {

	name : "Scattershot Shells",
	source : ["HB", 0],
	defaultExcluded : true,
	regExpSearch : /Scattershot Shells/i,
	type : "Exotic",
	ability : 1,
	abilitytodamage : false,
	damage : [4, 4, "piercing"],
	range : "20ft Cone",
	description : "Gunblade Ammunition (10)",
	list : "Exotic",
	weight : 0.05,
 };

WeaponsList["Lead Rounds"] = {

	name : "Lead Rounds",
	source : ["HB", 0],
	defaultExcluded : true,
	regExpSearch : /Lead Rounds/i,
	type : "Exotic",
	ability : 1,
	abilitytodamage : true,
	damage : [2, 6, "piercing"],
	range : "Melee",
	description : "Gunblade Ammunition (15)",
	list : "Exotic",
	weight : 0.05,
 };

WeaponsList["Extended Gunblade"] = {

	name : "Extended Gunblade",
	source : ["HB", 0],
	defaultExcluded : true,
	regExpSearch : /Extended Gunblade/i,
	type : "Exotic",
	ability : 1,
	abilitytodamage : true,
	damage : [2, 8, "slashing"],
	range : "Melee",
	description : "Ammunition, Range (130/300), Reach 10ft, Special: ",
	list : "Exotic",
	weight : 15,
 };

WeaponsList["Large Gunblade"] = {

	name : "Large Gunblade",
	source : ["HB", 0],
	defaultExcluded : true,
	regExpSearch : /Large Gunblade/i,
	type : "Exotic",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 12, "slashing"],
	range : "Melee",
	description : "Ammunition, Range (80/160), Two Handed, Heavy, Special: ",
	list : "Exotic",
	weight : 19,
 };

WeaponsList["Long Gunblade"] = {

	name : "Long Gunblade",
	source : ["HB", 0],
	defaultExcluded : true,
	regExpSearch : /Long Gunblade/i,
	type : "Exotic",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 10, "slashing"],
	range : "Melee",
	description : "Ammunition, Range (100/200), Versatile 2d6, Special: ",
	list : "Exotic",
	weight : 6,
 };

WeaponsList["Short Gunblade"] = {

	name : "Short Gunblade",
	source : ["HB", 0],
	defaultExcluded : true,
	regExpSearch : /Short Gunblade/i,
	type : "Exotic",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 8, "slashing"],
	range : "Melee",
	description : "Ammunition, Range (60/120), Finesse, Special: ",
	list : "Exotic",
	weight : 4,
 };

WeaponsList["Small Gunblade"] = {

	name : "Small Gunblade",
	source : ["HB", 0],
	defaultExcluded : true,
	regExpSearch : /Small Gunblade/i,
	type : "Exotic",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 6, "slashing"],
	range : "Melee",
	description : "Ammunition, Range (40/100), Finesse, light, Special: ",
	list : "Exotic",
	weight : 2,
 };
 

