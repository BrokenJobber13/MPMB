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
    
   
MagicItemsList["snake-waker"] = {
    name : "Snake-Waker",
    source : ["GSE"],
    type : "weapon (any firearm)",
    rarity : "unknown",
    attunement : true,
    description : "This magical firearm adds +2 to attack and damage rolls made with it. Advantage on initiative roll when wielded. Maximum damage against surprised enemies.",
    descriptionFull : "This magical firearm adds +2 to attack and damage rolls made with it. Whenever you roll for initiative, this weapon magically leaps into your hand(s) unless you choose for it not to do so. As long as the weapon is in your hand(s) when you roll for initiative, you gain advantage on the roll. Furthermore, the weapon deals maximum damage against surprised enemies.",
    allowDuplicates : true,
    advantages : [["Initiative", true]],
    chooseGear : {
        type : "weapon",
        prefixOrSuffix : "brackets",
        itemName1stPage : ["suffix", "Snake-Waker"],
        descriptionChange : ["replace", "weapon"],
        excludeCheck : function (inObjKey, inObj) {
            return inObj.list != "firearm";
        }
    },
    calcChanges : {
        atkAdd : [
            function (fields, v) {
                if (v.theWea.list == "firearm" && (/snake-waker/i).test(v.WeaponText)) {
                    fields.Description += (fields.Description ? '; ' : '') + 'maximum damage vs surprised opponents';
                }
            },
            'If I include the word "Snake-Waker" in a the name of a firearm, it will be treated as the magic item Snake-Waker Gun. +2 to attack and damage rolls, advantage on initiative rolls when wielded and maximum damage against surprised oppenents.'
        ],
            atkCalc : [
                function (fields, v, output) {
                    if (v.theWea.list == "firearm" && (/snake-waker/i).test(v.WeaponText)) {
                        output.magic = v.thisWeapon[1] + 2;
                    }
                }, ''
            ],
    }
};


MagicItemsList["skybreaker"] = {
    name: "Skybreaker",
    source: [["Beniverse", 0]],
    description: "I have a +2 bonus to attack and damage rolls with Skybreaker. On a roll of 20 to hit, it cuts off one limb (see notes). If the target has no limbs or is immune to force damage, it takes +3d8 necrotic damage instead. Target of attack has AC 10 + Dex. Can be summoned as an action. Is dismissed if disarmed.",
    type: "weapon" /* Weapon */ + " (Mistblade)",
    rarity: 'artifact',
    attunement: true,
    weaponsAdd: ["Skybreaker"],
    action: [['action', " (summon)"], ['bonus action', " (dismiss)"]],
    weaponOptions: [{
            regExpSearch: /skybreaker/i,
            name: "Skybreaker",
            isAlwaysProf: true,
            type: 'AlwaysProf',
            ability: 1 /* Strength */,
            abilitytodamage: true,
            damage: [2, 6, 'force'],
            range: "Melee",
            description: "Versatile (2d8); Dismissed if disarmed; Keen: Target AC is 10 + Dex; On 20 to hit: sever limb",
            modifiers: [2, 2],
        }],
    toNotesPage: [{
            name: "Skybreaker Limb Sever table",
            source: ["Beniverse", 0],
            popupName: "Skybreaker Limb Sever table",
            page3notes: true,
            note: [
                "d6 Effect",
                "1   Left foot is severed, target moves at half speed",
                "2   Right foot is severed, target moves at half speed",
                "3   Main hand is severed, target can only hold one item and makes attacks with disadvantage",
                "4   Off-hand is severed, target cannot use two handed weapons and can only hold one item",
                "5   A blow to the head. The target is blinded.",
                "6   Roll twice taking both results (ignoring this result)"
            ]
        }]
};

