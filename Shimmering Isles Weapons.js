var iFileName = "Shimmering Isles Weapons.js"; 
RequiredSheetVersion(12.999); 

AmmoList["black powder"] = { 
	name : "Black Powder", 
	source : ["HB", 0], 
	weight : 0.05, 
	icon : "Bullets", 
	checks : [".Bullet"], 
	display : 50, 
	invName : "Black Powder", 
};

WeaponsList["wire net"] = { 
	regExpSearch : /Wire Net/i, 
	name : "Wire Net", 
	source : ["HB", 0], 
	list : "ranged", 
	ability : 1, 
	type : "Simple", 
	damage : [1, 8, "bludgeoning"], 
	range : "Range 10/20ft", 
	description : "Thrown, Upto Large creature restrianed on hit, Resistant to slashing dmg. Escape DC 15 Str.", 
	abilitytodamage : true, 
	weight : 15, 
	modifiers : [1, "STR"], 
};

WeaponsList["grappling hook"] = { 
	regExpSearch : /Grappling Hook/i, 
	name : "Grappling Hook", 
	source : ["HB", 0], 
	list : "ranged", 
	ability : 1, 
	type : "Simple", 
	damage : [1, 4, "piercing"], 
	range : "Range 10/30ft", 
	description : "Thrown, Range 10/30ft, On hit target is grappled, Adv on Climbing.", 
	abilitytodamage : true, 
	weight : 1, 
	modifiers : [1, "STR"], 
};

WeaponsList["grenado"] = { 
	regExpSearch : /Grenado/i, 
	name : "Grenado", 
	source : ["HB", 0], 
	list : "ranged", 
	ability : 2, 
	type : "Martial", 
	damage : [2, 4, "fire"], 
	range : "Range 10/30ft", 
	description : "Thrown 10/30ft, Light, Sphere: 5ft radius, Dex DC save 12, fail dmg on succuss. ", 
	abilitytodamage : true, 
	weight : 2, 
	modifiers : [1, "DEX"], 
};

WeaponsList["hook hand"] = { 
	regExpSearch : /Hook Hand/i, 
	name : "Hook Hand", 
	source : ["HB", 0], 
	list : "melee", 
	ability : 2, 
	type : "Martial", 
	damage : [1, 4, "piercing"], 
	range : "Melee", 
	description : "Affixed, Light", 
	abilitytodamage : true, 
	weight : 2, 
	modifiers : [1, "DEX"], 
};

WeaponsList["poisoned net"] = { 
	regExpSearch : /Poisoned Net/i, 
	name : "Poisoned Net", 
	source : ["HB", 0], 
	list : "ranged", 
	ability : 2, 
	type : "Simple", 
	damage : [1, 4, "piercing"], 
	range : "Range 5/15ft", 
	description : "Thrown 5/15, 1Attack, upto Large creature hit is restrained. Con DC 10 save or be poisoned, 1min. 1d6 poison dmg.", 
	abilitytodamage : true, 
	weight : 3, 
	modifiers : [1, "DEX"], 
};

WeaponsList["greased net"] = { 
	regExpSearch : /Greased Net/i, 
	name : "Greased Net", 
	source : ["HB", 0], 
	list : "ranged", 
	ability : 2, 
	type : "Simple", 
	damage : [1, 4, "bludgeoning"], 
	range : "Range 5/15ft", 
	description : "Thrown 5/15, 1Attack, upto Large creature hit is restrained. Dex DC save 10 or fail prone", 
	abilitytodamage : true, 
	weight : 3, 
	modifiers : [1, "DEX"], 
};

WeaponsList["weighted net"] = { 
	regExpSearch : /Weighted Net/i, 
	name : "Weighted Net", 
	source : ["HB", 0], 
	list : "ranged", 
	ability : 2, 
	type : "Simple", 
	damage : [1, 8, "bludgeoning"], 
	range : "Range 10/20ft", 
	description : "Thrown, Upto Large creature restrianed on hit, Vulnerable to slashing dmg. Escape DC 15 Str.", 
	abilitytodamage : true, 
	weight : 8, 
	modifiers : [1, "DEX"], 
};

WeaponsList["bladed net"] = { 
	regExpSearch : /Bladed Net/i, 
	name : "Bladed Net", 
	source : ["HB", 0], 
	list : "ranged", 
	ability : 2, 
	type : "Simple", 
	damage : [2, 4, "piercing"], 
	range : "Range 5/15ft", 
	description : "Thrown, Upto Large creature restrianed on hit, All within 10ft make Dex save DC13, half damage on success.", 
	abilitytodamage : true, 
	weight : 10, 
	modifiers : [1, "DEX"], 
};

WeaponsList["barbed net"] = { 
	regExpSearch : /Barbed Net/i, 
	name : "Barbed Net", 
	source : ["HB", 0], 
	list : "ranged", 
	ability : 2, 
	type : "Simple", 
	damage : [1, 4, "piercing"], 
	range : "Range 5/15ft", 
	description : "Thrown, Upto Large creature restrianed on hit, All within 10ft make Dex save DC13, half damage on success.", 
	abilitytodamage : true, 
	weight : 5, 
	modifiers : [1, "DEX"], 
};

WeaponsList["assassins hidden blade"] = { 
	regExpSearch : /Assassins Hidden Blade/i, 
	name : "Assassins Hidden Blade", 
	source : ["HB", 0], 
	list : "melee", 
	ability : 2, 
	type : "Martial", 
	damage : [4, 4, "slash/pierc"], 
	range : "Melee", 
	description : "Affixed, Light, Finesse, Concealed, Special: Adv to keep hidden.", 
	abilitytodamage : true, 
	weight : 2, 
	modifiers : [1, "DEX"], 
};
WeaponsList["hidden blade"] = { 
	regExpSearch : /Hidden Blade/i, 
	name : "Hidden Blade", 
	source : ["HB", 0], 
	list : "melee", 
	ability : 2, 
	type : "Simple", 
	damage : [2, 4, "slash/pierc"], 
	range : "Melee", 
	description : "Affixed, Light, Finesse, Concealed, Special: Adv to keep hidden.", 
	abilitytodamage : true, 
	weight : 2, 
	modifiers : ["", "DEX"], 
};
WeaponsList["boot dagger"] = { 
	regExpSearch : /Boot Dagger/i, 
	name : "Boot Dagger", 
	source : ["HB", 0], 
	list : "melee", 
	ability : 2, 
	type : "Martial", 
	damage : [1, 8, "slashing"], 
	range : "Melee", 
	description : "Light, Finesse, Concealed, Special: Adv to keep hidden.", 
	abilitytodamage : true, 
	weight : 2, 
	modifiers : [1, "DEX"], 
};
WeaponsList["explosive tag"] = { 
	regExpSearch : /Explosive Tag/i, 
	name : "Exposive Tag", 
	source : ["HB", 0], 
	list : "ranged", 
	ability : 2, 
	type : "Martial", 
	damage : [5, 4, "fire"], 
	range : "Range 30ft", 
	description : "Thrown, Range 30ft, All within 10ft make Dex save DC13, half damage on success.", 
	abilitytodamage : true, 
	weight : 1, 
	modifiers : [1, "DEX"], 
};
WeaponsList["boarding axe"] = { 
	regExpSearch : /Boarding Axe/i, 
	name : "Boarding Axe", 
	source : ["HB", 0], 
	list : "melee", 
	ability : 1, 
	type : "Simple", 
	damage : [1, 6, "slashing"], 
	range : "Melee", 
	description : "Light, Special: Adv to Str checks for climbing.", 
	abilitytodamage : true, 
	weight : 3, 
	modifiers : [1, "STR"], 
};
WeaponsList["spiked sickle"] = { 
	regExpSearch : /Spiked Sickle/i, 
	name : "Spiked Sickle", 
	source : ["HB", 0], 
	list : "melee", 
	ability : 2,  
	type : "Martial", 
	damage : [2, 8, "slashing"], 
	range : "Melee", 
	description : "Light, Brutal: Reroll 1's", 
	abilitytodamage : true, 
	weight : 3, 
};
AmmoList["cannon ball"] = { 
	name : "Cannon Ball", 
	source : ["HB", 0], 
	weight : 8.00, 
	icon : "Bullets", 
	checks : [".Bullet"], 
	display : 50, 
	invName : "Ball, Cannon", 
};
WeaponsList["great cannon"] = {
	regExpSearch : /Great Cannon/i,
	name : "Great Cannon",
	source : ["HB", 0],
	list : "Other",
	ability : 4,
	type : "Simple",
	damage : [3, 6, "force"],
	range : "Ranged 40/200",
	weight : 3,
	ammo : "lead ball", 
	dc : true, 
	description : "Launch (40/200), Firearm, Ammunition, Misfire (1), Reload:Bonus Action",
	abilitytodamage : true
}; 
WeaponsList["standard cannon"] = {
	regExpSearch : /Standard Cannon/i,
	name : "Standard Cannon",
	source : ["HB", 0],
	list : "Other",
	ability : 4,
	type : "Simple",
	damage : [2, 6, "force"],
	range : "Ranged 40/200",
	weight : 3,
	ammo : "lead ball", 
	dc : true, 
	description : "Launch (40/200), Firearm, Ammunition, Misfire (1), Reload:Action",
	abilitytodamage : true
}; 
WeaponsList["small cannon"] = {
	regExpSearch : /Small Cannon/i,
	name : "Small Cannon",
	source : ["HB", 0],
	list : "Other",
	ability : 4,
	type : "Simple",
	damage : [2, 6, "force"],
	range : "Ranged 40/200",
	weight : 3,
	ammo : "lead ball", 
	dc : true, 
	description : "Launch (40/200), Firearm, Ammunition, Misfire (4), Reload:Action",
	abilitytodamage : true
}; 
WeaponsList["odachi katana"] = { 
	regExpSearch : /Odachi Katana/i, 
	name : "Odachi Katana", 
	source : ["HB", 0], 
	list : "melee", 
	ability : 1, 
	type : "Martial", 
	damage : [1, 12, "slashing"], 
	range : "Melee", 
	description : "Two Handed. Special: Adv against being Disarmed.", 
	abilitytodamage : true, 
	weight : 4, 
	modifiers : [1, "STR"], 
};

WeaponsList["cutlass"] = { 
	regExpSearch : /Cutlass/i, 
	name : "Cutlass", 
	source : ["HB", 0], 
	list : "melee", 
	ability : 1, 
	type : "Simple", 
	damage : [1, 6, "slashing"], 
	range : "Melee", 
	description : "Finesse, Light, Special: Adv against being Disarmed.", 
	abilitytodamage : true, 
	weight : 4, 
	modifiers : [1, "STR"], 
};

WeaponsList["harpoon"] = { 
	regExpSearch : /Harpoon/i, 
	name : "Harpoon", 
	source : ["HB", 0], 
	list : "Melee", 
	ability : 2, 
	type : "Simple", 
	damage : [1, 10, "piercing"], 
	range : "Melee, 10/80 ft", 
	description : "Special, Thrown (10/80)", 
	abilitytodamage : true, 
	weight : 6, 
	modifiers : [1, "Dex"], 
};

WeaponsList["kunai"] = { 
	regExpSearch : /^ninja(?=.*kunai).*$/i, 
	name : "Kunai", 
	source : ["HB", 0], 
	list : "Ranged", 
	ability : 2, 
	type : "Martial", 
	damage : [1, 4, "piercing"], 
	range : "Ranged, 10/80 ft", 
	description : "Light, Thrown(10/80)", 
	abilitytodamage : true, 
	weight : 1, 
	monkweapon : false, 
	modifiers : [1, "DEX"], 
};

WeaponsList["sharks powerful bite"] = {
	regExpSearch : /sharks powerful bite/i,
	name : "Sharks Powerful Bite",
	source : ["HB", 0],
	list : "Natural",
	ability : 1,
	type : "Martial",
	damage : [4, 6, "Piercing"],
	range : "Melee",
	description : "Lunge 15ft, Finesse, Brutal Reroll 1's.",
	abilitytodamage : true,
}; 

WeaponsList["sharks greater bite"] = {
	regExpSearch : /sharks greater bite/i,
	name : "Sharks GreaterBite",
	source : ["HB", 0],
	list : "Natural",
	ability : 1,
	type : "Martial",
	damage : [2, 6, "Piercing"],
	range : "Melee",
	description : "Lunge 10ft, Finesse, Brutal Reroll 1's.",
	abilitytodamage : true,
}; 

WeaponsList["sharks standard bite"] = {
	regExpSearch : /sharks standard bite /i,
	name : "Sharks Bite",
	source : ["HB", 0],
	list : "Natural",
	ability : 1,
	type : "Simple",
	damage : [1, 6, "Piercing"],
	range : "Melee",
	description : "Lunge 10ft, Finesse, Brutal Reroll 1's.",
	abilitytodamage : true,
}; 

WeaponsList["powder charge"] = {
	regExpSearch : /^(?=.*powder)(?=.*charge).*$/i,
	name : "Powder Charge",
	source : ["HB", 0],
	list : "Other",
	ability : 4,
	type : "Martial",
	damage : [3, 6, "Piercing/Thunder"],
	range : "30ft Area",
	weight : 3,
	description : "Thrown, Firearm, Launch, Light, Penetrate.Targets in 10ft DexSave, 2d6piercing on fail.",
	abilitytodamage : false,
}; 

WeaponsList["flash bomb"] = {
	regExpSearch : /^(?=.*flash)(?=.*bomb).*$/i,
	name : "Flash Bomb",
	source : ["HB", 0],
	list : "Other",
	ability : 2,
	type : "Martial",
	damage : [1, 8, "radiant"],
	range : "Ranged 20/80",
	weight : 6,
	description : "Dex save or be Blinded. On miss, Dex save or blinded and no damage.",
	abilitytodamage : true
}; 

WeaponsList["Firepot"] = {
	regExpSearch : /^(?=.*fire)(?=.*pot).*$/i,
	name : "Firepot",
	source : ["HB", 0],
	list : "Other",
	ability : 2,
	type : "Simple",
	damage : [2, 6, "fire"],
	range : "Ranged 20/80",
	weight : 3,
	description : "Thrown (20/80), Firearm, Launch, Light",
	abilitytodamage : true
}; 

WeaponsList["hidden crossbow"] = {
	regExpSearch : /^(?=.*Hidden)(?=.*Crossbow).*$/i,
	name : "Hidden Crossbow",
	source : ["HB", 0],
	list : "ranged",
	ability : 2,
	type : "Martial",
	damage : [1, 4, "piercing"],
	range : "Ranged 20/40",
	weight : 6,
	description : "One Hand, Affixed, Conceal, Light, Reload: Bonus",
	abilitytodamage : true
}; 

WeaponsList["compound bow"] = {
	regExpSearch : /^(?=.*Compound)(?=.*Bow).*$/i,
	name : "Compound Bow",
	source : ["HB", 0],
	list : "ranged",
	ability : 2,
	type : "Martial",
	damage : [1, 10, "piercing"],
	range : "ranged (200/800)",
	weight : 3,
	description : "Two Handed, Ranged (200/800), Penetrate, Reload: Part of attack. ",
	abilitytodamage : true
}; 

WeaponsList["gladius"] = {
	regExpSearch : /Gladius/i,
	name : "Gladius",
	source : ["HB", 0],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 6, "slashing"],
	range : "Melee",
	weight : 3,
	description : "Finesse, Light",
	abilitytodamage : true
}; 


WeaponsList["spiked chain"] = {
	regExpSearch : /Spiked Chain/i,
	name : "Spiked Chain",
	source : ["HB", 0],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [2, 4, "piercing"],
	range : "Melee",
	weight : 10,
	description : "Finesse, Two-Handed, Special: Enemies have disadv on saves to knock prone or disarm.",
	abilitytodamage : true
};

WeaponsList["hand cannon"] = {
	regExpSearch : /Hand Cannon/i,
	name : "Hand Cannon",
	source : ["HB", 0],
	list : "ranged",
	ability : 2,
	type : "Martial",
	damage : [1, 10, "piercing"],
	range : "Ranged 20/200",
	weight : 3,
        ammo : "lead ball", 
	description : "Firearm, Ammunition, Misfire (1), Reload: Attack, Penetrate, Light.",
	abilitytodamage : true
};


AmmoList["lead ball"] = { 
	name : "Lead Ball", 
	source : ["HB", 0], 
	weight : 0.06, 
	icon : "Bullets", 
	checks : [".Bullet"], 
	display : 50, 
	invName : "Ball, Lead", 
};


WeaponsList["elven bladed bow"] = {
	regExpSearch : /Elven Bladed Bow/i,
	name : "Elven Bladed Bow",
	source : ["HB", 0],
	list : "ranged",
	ability : 2,
	type : "Martial",
	damage : [2, 4, "piercing"],
	range : "Range 100/400",
	weight : 6,
        ammo : "arrow", 
	description : "Adaptable: Melee 2d6slashing,5ft. Ammunition, Light, Finesse, Heavy, Two Handed.",
	abilitytodamage : true
};

WeaponsList["gnomish repeatng crossbow"] = {
	regExpSearch : /Gnomish Repeating Crossbow/i,
	name : "Gnomsh Repeating Crossbow",
	source : ["HB", 0],
	list : "ranged",
	ability : 2,
	type : "Martial",
	damage : [1, 8, "piercing"],
	range : "Ranged 80/320",
	weight : 7,
        ammo : "bolt", 
	description : "Ammunition, Range 80/320, Reload: Action(5), Misfire (1), Two Handed.",
	abilitytodamage : true
};

WeaponsList["tiefling chainsword"] = {
	regExpSearch : /Tiefling Chainsword/i,
	name : "Tiefling Chainsword",
	source : ["HB", 0],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 6, "slashing"],
	range : "Melee",
	weight : 8,
	description : "Double Use, Two Handed, Light, Finesse, Blade:1d6slash. Chain:1d6piercing.",
	abilitytodamage : true
};

WeaponsList["pistol sword"] = {
	regExpSearch : /Pistol Sword/i,
	name : "Pistol Sword",
	source : ["HB", 0],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [2, 8, "pierc/slash"],
	range : "Melee",
	weight : 4,
	description : "Ammunition, Reload (4), Light, Misfire (2) ",
	abilitytodamage : true
};

WeaponsList["buggy ball"] = {
	regExpSearch : /Buggy Ball/i,
	name : "Buggy Ball",
	source : ["HB", 0],
	list : "Ranged",
	ability : 2,
	type : "Martial",
	damage : [5, 6, "Force/Fire"],
	range : "Ranged 20/200",
	weight : 3,
	description : "The explosion causes a line 10ft by 200ft, all targets Dex save, half damage on success.",
	abilitytodamage : true
};

WeaponsList["basic bomb"] = {
	regExpSearch : /Basic Bomb/i,
	name : "Basic Bomb",
	source : ["HB", 0],
	list : "Ranged",
	ability : 2,
	type : "Simple",
	damage : [2, 6, "Force/Fire"],
	range : "5ft Area",
	weight : 3,
	description : "Explosion (9sq area), all targets Dex save 10, half damage on success.",
	abilitytodamage : true
};

WeaponsList["standard bomb"] = {
	regExpSearch : /Standard Bomb/i,
	name : "Standard Bomb",
	source : ["HB", 0],
	list : "Ranged",
	ability : 2,
	type : "Martial",
	damage : [2, 8, "Force/Fire"],
	range : "10ft Area",
	weight : 3,
	description : "Explosion (9sq area), all targets Dex save 15, half damage on success.",
	abilitytodamage : true
};

WeaponsList["claymore"] = {
	regExpSearch : /Claymore/i,
	name : "Claymore",
	source : ["HB", 0],
	list : "Melee",
	ability : 1,
	type : "Martial",
	damage : [2, 6, "Slashing"],
	range : "Melee",
	weight : 7,
	description : "Heavy, Finesse, Brutal: Reroll 1's",
	abilitytodamage : true
};

WeaponsList["hatchet"] = {
	regExpSearch : /Hatchet/i,
	name : "Hatchet",
	source : ["HB", 0],
	list : "Melee",
	ability : 1,
	type : "Martial",
	damage : [3, 4, "Hacking"],
	range : "Melee",
	weight : 2,
	description : "Thrown 20/60, Finesse, Brutal: Reroll 1's",
	abilitytodamage : true
};

WeaponsList["canesword"] = {
	regExpSearch : /Canesword/i,
	name : "Canesword",
	source : ["HB", 0],
	list : "Melee",
	ability : 2,
	type : "Martial",
	damage : [1, 8, "Slashing"],
	range : "Melee",
	weight : 3,
	description : "Finesse, Concealed: Adv on checks to keep hidden",
	abilitytodamage : true
};

WeaponsList["wicked cleaver"] = {
	regExpSearch : /Wicked Cleaver/i,
	name : "Wicked Cleaver",
	source : ["HB", 0],
	list : "Melee",
	ability : 1,
	type : "Simple",
	damage : [2, 4, "Slashing"],
	range : "Melee",
	weight : 3,
	description : "Finesse, Brutal: Reroll 1's",
	abilitytodamage : true
};

