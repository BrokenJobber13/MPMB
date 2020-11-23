 MagicItemsList ["ring of spiritual guardianship"] = {
		name : "Ring of Spiritual Guardianship",
		source : ["HB", 0],
		type : "ring",
		rarity : "uncommon",
		magicItemTable : "F",
		description : "As a bonus action, I can use this ring to cast Spiritual Guardian.",
		descriptionFull : "While wearing this ring, you can cast the Spiritual Guardian spell from it as a bonus action, twice per short rest",
		attunement : true,
		action : [["bonus action", ""]],
		spellcastingBonus : {
			name : "Spirit Guard",
			spells : ["spirit guardians"],
			selection : ["spirit guardians"],
			firstCol : "atwill"
		},
		spellChanges : {
			"spiritual guardians" : {
				time : "1 bns",
				range : "Self",
				changes : "The casting time is only a bonus action instead of an action and it can only affect the wearer."
			},
		},
	};
    
   
