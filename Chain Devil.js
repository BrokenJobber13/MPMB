var iFileName = "Chain Devil.js"; 
RequiredSheetVersion(12.999); 

RaceList["chain devil"] = { 
	regExpSearch : /chain devil/i, 
	name : "Chain Devil", 
	source : ["HB", 0], 
	plural : "Chain Devils", 
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 },  	},
	languageProfs : ["Common", "Infernal"], 
  weaponsAdd : ["devils chains"],
	  weaponOptions : {
			regExpSearch : /devils chains/i,
			name : "Devils Chains",
			source : ["HB", 0],
			ability : 1,
			type : "Natural",
			damage : [1, 6, "slashing"],
			range : "melee, 10ft",
			description : "Hellforged, Brutal: Reroll 1's, Reach 10ft",
			abilitytodamage : true,
		},
	vision : [["Darkvision", 60]], 
	weaponprofs : [false, false, ["chains"]], 
  	savetxt : { 
		text : ["Magical darkness doesnt impede my darkvision"], 	},
	improvements : "Chain Devil: +2 Strength, +1 Constitution;", 
	scores : [1, 0, 1, 0, 0, 0], 
	trait : "Chain Devil (+2 Strength, +1 Constitution)\nI am a Devil (Fiend)Animate Chains: once per short rest using an action, a chain you can see within 60 feet of you magically sprouts razor-edged barbs and animates under your control, provided that the chain isn’t being worn or carried.\nThe animated chain is an object with AC 10 + your Wisdom modifier and proficiency bonus, hit points equal to your total level plus your Wisdom modifier, resistance to piercing damage, and immunity to psychic and thunder damage. You can use a bonus action to use your animated chain to make one additional chain attack, using the same general rules as your own chain attacks. An animated chain can grapple one creature of its own, but can’t make attacks while grappling. Your animated chain remains animated as long as you maintain concentration, up to 1 minute, or until its hit points are reduced to 0.\nChain Melee Weapon Attack: reach 10 feet, one target. Hit: 1d6 slashing damage, which increases to 2d4 at level 5 and 2d6 at level 13. The target is grappled (escape DC 8 plus your Dexterity modifier and proficiency bonus) if you aren’t already grappling a creature. Until that grapple ends, the target is restrained and takes damage from the chain attack at the start of each of its turns. You cannot make any other attacks while you have a creature grappled with a chain.",

features : {
    "animate chains" : { 
			name : "Animate Chains", 
			minlevel : 1,  
      usages : 1,
      recovery : "short rest",
			tooltip : "", 
			action : ["action", ""], 
			},
        "animated chain strike" : { 
			name : "Animated Chains strike", 
			minlevel : 1,  
			tooltip : "", 
			action : ["bonus action", ""], 
			},
    "devils chains" : {
			name : "Devils Chains",
			limfeaname : "Devils Chains",
			minlevel : 1,
			additional : ["1d6", "1d6", "1d6", "1d6", "2d4", "2d4", "2d4", "2d4", "2d6", "2d6", "2d6", "2d6", "3d4", "3d4", "3d4", "3d4", "3d6", "3d6", "3d6", "3d6"], 
			tooltip : "",
			action : ["action", ""], },
      },
      };
      
WeaponsList["devils chains"] = {

	name : "Devils Chains",
	source : ["HB", 0],
	defaultExcluded : true,
	regExpSearch : /    /i,
	type : "AlwaysProf",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 6, "slashing"],
	range : "Melee, 10ft",
	description : "Hellforged, Brutal: Reroll 1's, Reach: 10ft",
	list : "melee",
	weight : 15,
	isMagicWeapon : true,
	isAlwaysProf : true,
};
