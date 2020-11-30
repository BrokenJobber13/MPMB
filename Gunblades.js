var iFileName = "Weapons v13.js";

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
 
AmmoList["cartridges"] = {
	name : "Cartridges",
	source : ["HB", 0],
	defaultExcluded : true,
	icon : "Bullets",
	weight : 0.05,
};

Ammunition
Names Price Damage Description
Lead Rounds (15) 30 Ds 2d6 Piercing Regular old lead round.
Scattershot Shells (10) 25 Ds 4d4 Piercing Regular shells filled with lead pellets, creating a 20 foot cone.
Incindiery Shots (8) 30 Ds 1d8 fire Special rounds of a mix of metal and chemicals creating searing heat on impact.
Chemical Shots (6) 35 Ds 2d6 acid Special rounds filled with corosive chemicals, releases a blob of acid on impact.
Freezer Shots (6) 20 Ds 3d4 cold Special rounds filled with liquid nitrigon, a splash of freezing liquid on impact.
