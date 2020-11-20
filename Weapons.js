var iFileName = "Homebrew Syntax - Weapons.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned

WeaponsList["cutlass"] = { //Object name; Note the use of only lower case! Also note the absence of the word "var" and the use of brackets []

	regExpSearch : /Cutlass/i, // Required; regular expression of what to look for (i.e. now it looks for any entry that has the word "le" followed by the word "attack" in it, disregarding capitalization). If this looks too complicated, just write: /leattack/i

	name : "Cutlass", // Required; name of the weapon

	source : ["HB", 0], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]

	list : "melee", //optional; by having this attribute, the attack will appear in the dropdown fields. It will be grouped according to what you enter. The lists of weapons in the sheet are: "melee", "ranged", "spell", and "improvised" // However, you can define your own groupings. These will always appear below all the weapons that are included in the sheet

	ability : 1, // Required; the ability score used to calculate the to hit modifier (and the damage if applicable, see below). [Str=1, Dex=2, Con=3, Int=4, Wis=5, Cha=6]

	type : "Simple", // Required; the type of the weapon. Alternatives are "Cantrip", "Martial", "Natural" (= always proficient), "Other", "Spell", or "Improvised Weapons" // Alternatively, you can define a type yourself. If this type matches a word in the 'Other Weapon Proficiencies' field, the character will be considered proficient with the weapon

	damage : [1, 6, "slashing"], // Required; the damage it does. First entry is the amount of dice, second is the type of dice, and third is the damage type. This example is 2d4 worth of piercing damage. //if you want the amount of dice to be an amount determined by the Character Level, then put "C" as the first value. Alternatively, you can use "B" for the value minus 1 (such as with Green-Flame Blade)

	range : "Melee", // Required; the range of the weapon

	description : "Finesse, Light, Special: Adv against being Disarmed.", // Required; the description of the attack. If you have nothing to put here, just put two quotation marks ("").

	abilitytodamage : true, // Required; whether or not the ability score modifier is added to the damage (true or false)

	weight : 4, // Optional; the weight in lb. If the attack has no weight, just remove this line. If this line is not present, the item will be ignored when adding weapons to the inventory.

	modifiers : [1, "STR"], // Optional; bonuses to: [to hit, to damage]; "" means ignore. These values are added to the corresponding Modifier/Blue-Text fields. // You can also enter the three-letter abbreviation of an ability score (Str, Dex, Con, Int, Wis, or Cha), to have that ability's modifier added to it.

};

WeaponsList["harpoon"] = { //Object name; Note the use of only lower case! Also note the absence of the word "var" and the use of brackets []

	regExpSearch : /Harpoon/i, // Required; regular expression of what to look for (i.e. now it looks for any entry that has the word "le" followed by the word "attack" in it, disregarding capitalization). If this looks too complicated, just write: /leattack/i

	name : "Harpoon", // Required; name of the weapon

	source : ["HB", 0], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]

	list : "Melee", //optional; by having this attribute, the attack will appear in the dropdown fields. It will be grouped according to what you enter. The lists of weapons in the sheet are: "melee", "ranged", "spell", and "improvised" // However, you can define your own groupings. These will always appear below all the weapons that are included in the sheet

	ability : 2, // Required; the ability score used to calculate the to hit modifier (and the damage if applicable, see below). [Str=1, Dex=2, Con=3, Int=4, Wis=5, Cha=6]

	type : "Simple", // Required; the type of the weapon. Alternatives are "Cantrip", "Martial", "Natural" (= always proficient), "Other", "Spell", or "Improvised Weapons" // Alternatively, you can define a type yourself. If this type matches a word in the 'Other Weapon Proficiencies' field, the character will be considered proficient with the weapon

	damage : [1, 10, "piercing"], // Required; the damage it does. First entry is the amount of dice, second is the type of dice, and third is the damage type. This example is 2d4 worth of piercing damage. //if you want the amount of dice to be an amount determined by the Character Level, then put "C" as the first value. Alternatively, you can use "B" for the value minus 1 (such as with Green-Flame Blade)

	range : "Melee, 10/80 ft", // Required; the range of the weapon

	description : "Special, Thrown (10/80)", // Required; the description of the attack. If you have nothing to put here, just put two quotation marks ("").

	abilitytodamage : true, // Required; whether or not the ability score modifier is added to the damage (true or false)

	weight : 6, // Optional; the weight in lb. If the attack has no weight, just remove this line. If this line is not present, the item will be ignored when adding weapons to the inventory.

	modifiers : [1, "Dex"], // Optional; bonuses to: [to hit, to damage]; "" means ignore. These values are added to the corresponding Modifier/Blue-Text fields. // You can also enter the three-letter abbreviation of an ability score (Str, Dex, Con, Int, Wis, or Cha), to have that ability's modifier added to it.
};

WeaponsList["kunai"] = { //Object name; Note the use of only lower case! Also note the absence of the word "var" and the use of brackets []

	regExpSearch : /^ninja(?=.*kunai).*$/i, // Required; regular expression of what to look for (i.e. now it looks for any entry that has the word "le" followed by the word "attack" in it, disregarding capitalization). If this looks too complicated, just write: /leattack/i

	name : "Kunai", // Required; name of the weapon

	source : ["HB", 0], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]

	list : "Ranged", //optional; by having this attribute, the attack will appear in the dropdown fields. It will be grouped according to what you enter. The lists of weapons in the sheet are: "melee", "ranged", "spell", and "improvised" // However, you can define your own groupings. These will always appear below all the weapons that are included in the sheet

	ability : 2, // Required; the ability score used to calculate the to hit modifier (and the damage if applicable, see below). [Str=1, Dex=2, Con=3, Int=4, Wis=5, Cha=6]

	type : "Martial", // Required; the type of the weapon. Alternatives are "Cantrip", "Martial", "Natural" (= always proficient), "Other", "Spell", or "Improvised Weapons" // Alternatively, you can define a type yourself. If this type matches a word in the 'Other Weapon Proficiencies' field, the character will be considered proficient with the weapon

	damage : [1, 4, "piercing"], // Required; the damage it does. First entry is the amount of dice, second is the type of dice, and third is the damage type. This example is 2d4 worth of piercing damage. //if you want the amount of dice to be an amount determined by the Character Level, then put "C" as the first value. Alternatively, you can use "B" for the value minus 1 (such as with Green-Flame Blade)

	range : "Ranged, 10/80 ft", // Required; the range of the weapon

	description : "Light, Thrown(10/80)", // Required; the description of the attack. If you have nothing to put here, just put two quotation marks ("").

	abilitytodamage : true, // Required; whether or not the ability score modifier is added to the damage (true or false)

	weight : 1, // Optional; the weight in lb. If the attack has no weight, just remove this line. If this line is not present, the item will be ignored when adding weapons to the inventory.

	monkweapon : false, // Optional; whether or not the items counts as a monk weapon (true or false)

	modifiers : [1, "DEX"], // Optional; bonuses to: [to hit, to damage]; "" means ignore. These values are added to the corresponding Modifier/Blue-Text fields. // You can also enter the three-letter abbreviation of an ability score (Str, Dex, Con, Int, Wis, or Cha), to have that ability's modifier added to it.

};

WeaponsList["leattack"] = { //Object name; Note the use of only lower case! Also note the absence of the word "var" and the use of brackets []

	regExpSearch : /^le(?=.*attack).*$/i, // Required; regular expression of what to look for (i.e. now it looks for any entry that has the word "le" followed by the word "attack" in it, disregarding capitalization). If this looks too complicated, just write: /leattack/i

	name : "LeAttack", // Required; name of the weapon

	source : ["HB", 0], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]

	list : "spell", //optional; by having this attribute, the attack will appear in the dropdown fields. It will be grouped according to what you enter. The lists of weapons in the sheet are: "melee", "ranged", "spell", and "improvised" // However, you can define your own groupings. These will always appear below all the weapons that are included in the sheet

	ability : 1, // Required; the ability score used to calculate the to hit modifier (and the damage if applicable, see below). [Str=1, Dex=2, Con=3, Int=4, Wis=5, Cha=6]

	type : "Simple", // Required; the type of the weapon. Alternatives are "Cantrip", "Martial", "Natural" (= always proficient), "Other", "Spell", or "Improvised Weapons" // Alternatively, you can define a type yourself. If this type matches a word in the 'Other Weapon Proficiencies' field, the character will be considered proficient with the weapon

	damage : [2, 4, "piercing"], // Required; the damage it does. First entry is the amount of dice, second is the type of dice, and third is the damage type. This example is 2d4 worth of piercing damage. //if you want the amount of dice to be an amount determined by the Character Level, then put "C" as the first value. Alternatively, you can use "B" for the value minus 1 (such as with Green-Flame Blade)

	range : "Melee, 100/200 ft", // Required; the range of the weapon

	description : "Ammunition, light", // Required; the description of the attack. If you have nothing to put here, just put two quotation marks ("").

	abilitytodamage : true, // Required; whether or not the ability score modifier is added to the damage (true or false)

	weight : 2, // Optional; the weight in lb. If the attack has no weight, just remove this line. If this line is not present, the item will be ignored when adding weapons to the inventory.

	monkweapon : true, // Optional; whether or not the items counts as a monk weapon (true or false)

	ammo : "bullet", // Optional; the type of ammunition the weapon uses. If the weapon uses no ammunition, remove this line. The options are: "arrow", "bolt", "bullet", "dagger", "dart", "flask", "axe", "javelin", "hammer", "needle", "spear", "trident", and "vial" [note the use of only lower case!]  Any ammunition you add yourself can of course be added here as well

	dc : true, // optional, will make the To Hit field display a DC instead. This will overwrite the first value you put in Modifiers (only from v10 onwards)

	modifiers : [1, ""], // Optional; bonuses to: [to hit, to damage]; "" means ignore. These values are added to the corresponding Modifier/Blue-Text fields. // You can also enter the three-letter abbreviation of an ability score (Str, Dex, Con, Int, Wis, or Cha), to have that ability's modifier added to it.

	SpellsList : "eldritch blast", // Optional; if the attack you are making is a spell/cantrip that is listed in the SpellsList variable under another name that you are using for this weapon (in this example it would be "leattack"), write the name used in the SpellsList variable here
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


AmmoList["lead ball"] = { //Object name; Note the use of only lower case! Also note the absence of the word "var" and the use of brackets []. The spelling here is used to identify the ammo with.

	name : "Lead Ball", //Required; the name of the ammunition

	source : ["HB", 0], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]

	weight : 0.06, //Required; the weight in lb

	icon : "Bullets", //Required; the icon to use for the ammunition. Depending on the icon you choose, the display and checks have to be assigned correctly. See below for the different options

	checks : [".Bullet"], //Required; the type of checkboxes to display

	display : 50, //Required; the amount of checkboxes to display

	invName : "Ball, Lead", //Optional; the name as it will be added to the equipment section if selected to do so in the equipment menu. If you omit this, the sheet will use the above defined 'name' when adding this to the equipment section
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

WeaponsList["Gnomish Repeatng Crossbow"] = {
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

