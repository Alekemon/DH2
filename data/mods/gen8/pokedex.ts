export const Pokedex: import('../../../sim/dex-species').ModdedSpeciesDataTable = {
	growlithehisui: {
		inherit: true,
		abilities: {0: "Intimidate", 1: "Flash Fire", H: "Justified"},
	},
	arcaninehisui: {
		inherit: true,
		abilities: {0: "Intimidate", 1: "Flash Fire", H: "Justified"},
	},
	typhlosionhisui: {
		inherit: true,
		abilities: {0: "Blaze", H: "Flash Fire"},
	},
	sneaselhisui: {
		inherit: true,
		abilities: {0: "Inner Focus", 1: "Keen Eye", H: "Poison Touch"},
	},
	shiftry: {
		inherit: true,
		abilities: {0: "Chlorophyll", 1: "Early Bird", H: "Pickpocket"},
	},
	piplup: {
		inherit: true,
		abilities: {0: "Torrent", H: "Defiant"},
	},
	prinplup: {
		inherit: true,
		abilities: {0: "Torrent", H: "Defiant"},
	},
	empoleon: {
		inherit: true,
		abilities: {0: "Torrent", H: "Defiant"},
	},
	gallade: {
		inherit: true,
		abilities: {0: "Steadfast", H: "Justified"},
	},
	giratinaorigin: {
		inherit: true,
		requiredItem: "Griseous Orb",
	},
	cresselia: {
		inherit: true,
		baseStats: {hp: 120, atk: 70, def: 120, spa: 75, spd: 130, spe: 85},
	},
	samurotthisui: {
		inherit: true,
		abilities: {0: "Torrent", H: "Shell Armor"},
	},
	braviaryhisui: {
		inherit: true,
		abilities: {0: "Keen Eye", 1: "Sheer Force", H: "Defiant"},
	},
	spewpa: {
		inherit: true,
		evos: ["Vivillon"],
	},
	vivillonfancy: {
		inherit: true,
		abilities: {0: "Shield Dust", 1: "Compound Eyes"},
		prevo: undefined,
		evoLevel: undefined,
	},
	vivillonpokeball: {
		inherit: true,
		abilities: {0: "Shield Dust", 1: "Compound Eyes"},
	},
	sliggoohisui: {
		inherit: true,
		abilities: {0: "Sap Sipper", 1: "Overcoat", H: "Gooey"},
	},
	goodrahisui: {
		inherit: true,
		abilities: {0: "Sap Sipper", 1: "Overcoat", H: "Gooey"},
	},
	decidueyehisui: {
		inherit: true,
		abilities: {0: "Overgrow", H: "Long Reach"},
	},
	zacian: {
		inherit: true,
		baseStats: {hp: 92, atk: 130, def: 115, spa: 80, spd: 115, spe: 138},
	},
	zaciancrowned: {
		inherit: true,
		baseStats: {hp: 92, atk: 170, def: 115, spa: 80, spd: 115, spe: 148},
	},
	zamazenta: {
		inherit: true,
		baseStats: {hp: 92, atk: 130, def: 115, spa: 80, spd: 115, spe: 138},
	},
	zamazentacrowned: {
		inherit: true,
		baseStats: {hp: 92, atk: 130, def: 145, spa: 80, spd: 145, spe: 128},
	},
	kleavor: {
		inherit: true,
		abilities: {0: "Swarm", 1: "Sheer Force", H: "Steadfast"},
	},
	basculegion: {
		inherit: true,
		abilities: {0: "Rattled", 1: "Adaptability", H: "Mold Breaker"},
	},
	basculegionf: {
		inherit: true,
		abilities: {0: "Rattled", 1: "Adaptability", H: "Mold Breaker"},
	},
	sneasler: {
		inherit: true,
		abilities: {0: "Pressure", H: "Poison Touch"},
		evoType: "useItem",
		evoItem: "Razor Claw",
		evoCondition: "during the day",
	},
	enamorus: {
		inherit: true,
		abilities: {0: "Healer", H: "Contrary"},
	},
	mossloth: {
		num: 1026,
		name: "Mossloth",
		types: ["Grass"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 45, atk: 49, def: 65, spa: 45, spd: 49, spe: 65},
		abilities: {0: "Solid Rock", H: "Leaf Guard"},
		heightm: 0.5,
		weightkg: 43,
		color: "Green",
		evos:["algeling"],
		eggGroups: ["Field","Grass"],
	},
	algeling: {
		num: 1027,
		name: "Algeling",
		types: ["Grass"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 60, atk: 62, def: 80, spa: 60, spd: 63, spe: 80},
		abilities: {0: "Solid Rock", H: "Leaf Guard"},
		heightm: 0.5,
		weightkg: 43,
		color: "Green",
		prevo: "Mossloth",
		evoLevel: 16,
		evos:["geotherium"],
		eggGroups: ["Field","Grass"],
	},
	geotherium: {
		num: 1028,
		name: "Geotherium",
		types: ["Grass","Rock"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 80, atk: 82, def: 100, spa: 80, spd: 83, spe: 100},
		abilities: {0: "Solid Rock", H: "Leaf Guard"},
		heightm: 0.5,
		weightkg: 43,
		color: "Green",
		prevo: "Algeling",
		evoLevel: 36,
		eggGroups: ["Field","Grass"],
	},
	nymbi: {
		num: 1029,
		name: "Nymbi",
		types: ["Fire"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 39, atk: 52, def: 43, spa: 65, spd: 60, spe: 50},
		abilities: {0: "Levitate", H: "Solar Power"},
		heightm: 0.5,
		weightkg: 43,
		color: "Red",
		evos:["deember"],
		eggGroups: ["Amorphous","Flying"],
	},
	deember: {
		num: 1030,
		name: "Deember",
		types: ["Fire","Electric"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 58, atk: 64, def: 58, spa: 80, spd: 80, spe: 65},
		abilities: {0: "Levitate", H: "Solar Power"},
		heightm: 0.5,
		weightkg: 43,
		color: "Red",
		prevo: "Nymbi",
		evoLevel: 16,
		evos:["heastorm"],
		eggGroups: ["Amorphous","Flying"],
	},
	heastorm: {
		num: 1031,
		name: "Heastorm",
		types: ["Fire","Electric"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 78, atk: 84, def: 78, spa: 100, spd: 109, spe: 85},
		abilities: {0: "Levitate", H: "Solar Power"},
		heightm: 0.5,
		weightkg: 43,
		color: "Red",
		prevo: "Deember",
		evoLevel: 16,
		eggGroups: ["Amorphous","Flying"],
	},
	selphin: {
		num: 1032,
		name: "Selphin",
		types: ["Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 44, atk: 48, def: 65, spa: 43, spd: 50, spe: 64},
		abilities: {0: "Torrent", H: "Rain Dish"},
		heightm: 0.5,
		weightkg: 43,
		color: "Blue",
		evos:["orchymph"],
		eggGroups: ["Water1","Water2"],
	},
	orchymph: {
		num: 1033,
		name: "Orchymph",
		types: ["Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 59, atk: 63, def: 80, spa: 58, spd: 65, spe: 80},
		abilities: {0: "Torrent", H: "Rain Dish"},
		heightm: 0.5,
		weightkg: 43,
		color: "Blue",
		prevo: "Selphin",
		evoLevel: 16,
		evos:["emperorch"],
		eggGroups: ["Water1","Water2"],
	},
	emperorch: {
		num: 1034,
		name: "Emperorch",
		types: ["Water","Ice"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 79, atk: 83, def: 100, spa: 78, spd: 85, spe: 105},
		abilities: {0: "Torrent", H: "Rain Dish"},
		heightm: 0.5,
		weightkg: 43,
		color: "Blue",
		prevo: "Orchymph",
		evoLevel: 36,
		eggGroups: ["Water1","Water2"],
	},
};
