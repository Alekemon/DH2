export const Pokedex: {[speciesid: string]: ModdedSpeciesData} = {
	scyther: {
		inherit: true,
		canGigantamax: "G-Max Beheading",
	},
	scythergmax: {
		num: 123,
		name: "Scyther-Gmax",
		baseSpecies: "Scyther",
		forme: "Gmax",
		types: ["Bug", "Flying"],
		baseStats: {hp: 70, atk: 110, def: 80, spa: 55, spd: 80, spe: 105},
		abilities: {0: "Swarm", 1: "Technician", H: "Steadfast"},
		heightm: 15,
		weightkg: 0,
		color: "Green",
		eggGroups: ["Bug"],
		changesFrom: "Scyther",
	},
	heracross: {
		inherit: true,
		canGigantamax: "G-Max Horn Sharpening",
	},
	heracrossgmax: {
		num: 214,
		name: "Heracross-Gmax",
		baseSpecies: "Heracross",
		forme: "Gmax",
		types: ["Bug", "Fighting"],
		baseStats: {hp: 80, atk: 125, def: 75, spa: 40, spd: 95, spe: 85},
		abilities: {0: "Swarm", 1: "Guts", H: "Moxie"},
		heightm: 15,
		weightkg: 0,
		color: "Blue",
		eggGroups: ["Bug"],
		changesFrom: "Heracross",
	},
	lycanrocdusk: {
		inherit: true,
		canGigantamax: "G-Max Rock Crash",
	},
	lycanrocduskgmax: {
		num: 745,
		name: "Lycanroc-Dusk-Gmax",
		baseSpecies: "Lycanroc",
		forme: "Dusk-Gmax",
		types: ["Rock"],
		baseStats: {hp: 75, atk: 117, def: 65, spa: 55, spd: 65, spe: 110},
		abilities: {0: "Tough Claws"},
		heightm: 8,
		weightkg: 0,
		color: "Brown",
		eggGroups: ["Field"],
		battleOnly: "Lycanroc-Dusk",
		changesFrom: "Lycanroc-Dusk",
	},
	magnezone: {
		inherit: true,
		canGigantamax: "G-Max Anion",
	},
	magnezonegmax: {
		num: 462,
		name: "Magnezone-Gmax",
		baseSpecies: "Magnezone",
		forme: "Gmax",
		types: ["Electric", "Steel"],
		gender: "N",
		baseStats: {hp: 70, atk: 70, def: 115, spa: 130, spd: 90, spe: 60},
		abilities: {0: "Magnet Pull", 1: "Sturdy", H: "Analytic"},
		heightm: 12,
		weightkg: 0,
		color: "Gray",
		eggGroups: ["Mineral"],
		changesFrom: "Magnezone",
	},
	arctozolt: {
		inherit: true,
		canGigantamax: "G-Max Subzero Fossil",
	},
	arctozoltgmax: {
		num: 881,
		name: "Arctozolt-Gmax",
		baseSpecies: "Arctozolt",
		forme: "Gmax",
		types: ["Electric", "Ice"],
		gender: "N",
		baseStats: {hp: 90, atk: 100, def: 90, spa: 90, spd: 80, spe: 55},
		abilities: {0: "Volt Absorb", 1: "Static", H: "Slush Rush"},
		heightm: 23,
		weightkg: 0,
		color: "Blue",
		eggGroups: ["Undiscovered"],
		changesFrom: "Arctozolt",
	},
	scolipede: {
		inherit: true,
		canGigantamax: "G-Max Venomous Strike",
	},
	scolipedegmax: {
		num: 545,
		name: "Scolipede",
		types: ["Bug", "Poison"],
		baseStats: {hp: 60, atk: 100, def: 89, spa: 55, spd: 69, spe: 112},
		abilities: {0: "Poison Point", 1: "Swarm", H: "Speed Boost"},
		heightm: 25,
		weightkg: 0,
		color: "Red",
		eggGroups: ["Bug"],
		changesFrom: "Scolipede",
	},
	/*
	cursola: {
		inherit: true,
		canGigantamax: "G-Max Coral Curse",
	},
	cursolagmax: {
		
	},
	excadrill: {
		inherit: true,
		canGigantamax: "G-Max Construction Hazards",
	},
	excadrillgmax: {
		
	},
	tyranitar: {
		inherit: true,
		canGigantamax: "G-Max Darker Pursuit",
	},
	tyranitargmax: {
		
	},
	primarina: {
		inherit: true,
		canGigantamax: "G-Max Operetta",
	},
	primarinagmax: {
		
	},
	jirachi: {
		inherit: true,
		canGigantamax: "G-Max Doomsday",
	},
	jirachigmax: {
		
	},
	flygon: {
		inherit: true,
		canGigantamax: "G-Max Kaleidoscope",
	},
	flygongmax: {
		
	},
	polteageist: {
		inherit: true,
		canGigantamax: "G-Max Green Tea",
	},
	polteageistantique: {
		inherit: true,
		canGigantamax: "G-Max Green Tea",
	},
	polteageistgmax: {
		
	},
	polteageistantiquegmax: {
		
	},
	rapidashgalar: {
		inherit: true,
		canGigantamax: "G-Max Land Tremble",
	},
	rapidashgalargmax: {
		
	},
	incineroar: {
		inherit: true,
		canGigantamax: "G-Max Moonsault",
	},
	incineroargmax: {
		
	},
	/*
	darmanitan: {
		inherit: true,
		canGigantamax: "",
	},
	darmanitangalargmax: {
		
	},
	*/
	/*
	decidueye: {
		inherit: true,
		canGigantamax: "G-Max Arrow Raid",
	},
	decidueyegmax: {
		
	},
	kyuremblack: {
		inherit: true,
		canGigantamax: "G-Max Future Shock",
	},
	kyuremblackgmax: {
		
	},
	scizor: {
		inherit: true,
		canGigantamax: "G-Max Bug Shield",
	},
	scizorgmax: {
		
	},
	sableye: {
		inherit: true,
		canGigantamax: "G-Max Meddling",
	},
	sableyegmax: {
		
	},
	poliwrath: {
		inherit: true,
		canGigantamax: "G-Max Belly Swirl",
	},
	poliwrathgmax: {
		
	},
	talonflame: {
		inherit: true,
		canGigantamax: "G-Max Gale Force",
	},
	talonflamegmax: {
		
	},
	lurantis: {
		inherit: true,
		canGigantamax: "G-Max Petal Shake",
	},
	lurantisgmax: {
		
	},
	porygonz: {
		inherit: true,
		canGigantamax: "G-Max Conversion Seizure",
	},
	porygonzgmax: {
		
	},
	klefki: {
		inherit: true,
		canGigantamax: "G-Max Key Lock",
	},
	klefkigmax: {
		
	},
	slowbrogalar: {
		inherit: true,
		canGigantamax: "G-Max Shell Shock",
	},
	slowbrogalargmax: {
		
	},
	jigglypuff: {
		inherit: true,
		canGigantamax: "G-Max Puff Up",
	},
	jigglypuffgmax: {
		
	},
	palossand: {
		inherit: true,
		canGigantamax: "G-Max Gravedig",
	},
	palossandgmax: {
		
	},
	aggron: {
		inherit: true,
		canGigantamax: "G-Max Beastly Iron",
	},
	aggrongmax: {
		
	},
	articunogalar: {
		inherit: true,
		canGigantamax: "G-Max Cruel Chill",
	},
	articunogalargmax: {
		
	},
	zapdosgalar: {
		inherit: true,
		canGigantamax: "G-Max Sparking Strikes",
	},
	zapdosgalargmax: {
		
	},
	moltresgalar: {
		inherit: true,
		canGigantamax: "G-Max Devastation",
	},
	moltresgalargmax: {
		
	},
	braviary: {
		inherit: true,
		canGigantamax: "G-Max Rebellion",
	},
	braviarygmax: {
		
	},
	wobbuffet: {
		inherit: true,
		canGigantamax: "G-Max Recoil",
	},
	wobbuffetgmax: {
		
	},
	groudon: {
		inherit: true,
		canGigantamax: "G-Max Desolating Drought",
	},
	groudongmax: {
		
	},
	kyogre: {
		inherit: true,
		canGigantamax: "G-Max Drizzling Downpour",
	},
	kyogregmax: {
		
	},
	aurorus: {
		inherit: true,
		canGigantamax: "G-Max Crystal Hail",
	},
	aurorusgmax: {
		
	},
	quagsire: {
		inherit: true,
		canGigantamax: "G-Max Slime Slide",
	},
	quagsiregmax: {
		
	},
	reshiram: {
		inherit: true,
		canGigantamax: "G-Max Azure Flare",
	},
	reshiramgmax: {
		
	},
	obstagoon: {
		inherit: true,
		canGigantamax: "G-Max Breakdown",
	},
	obstagoongmax: {
		
	},
	starmie: {
		inherit: true,
		canGigantamax: "G-Max Shooting Star",
	},
	starmiegmax: {
		
	},
	/*
	gastrodon: {
		inherit: true,
		canGigantamax: "G-Max Swamp",
	},
	gastrodongmax: {
		
	},
	*/
	/*
	regirock: {
		inherit: true,
		canGigantamax: "G-Max Mountain Crash",
	},
	regirockgmax: {
		
	},
	regice: {
		inherit: true,
		canGigantamax: "G-Max Ice Age",
	},
	regicegmax: {
		
	},
	registeel: {
		inherit: true,
		canGigantamax: "G-Max Molten Iron",
	},
	registeelgmax: {
		
	},
	xurkitree: {
		inherit: true,
		canGigantamax: "G-Max Haywire",
	},
	xurkitreegmax: {
		
	},
	/*
	necrozma: {
		inherit: true,
		canGigantamax: "G-Max Supernova",
	},
	necrozmadawnwings: {
		inherit: true,
		canGigantamax: "G-Max Supernova",
	},
	necrozmaduskmane: {
		inherit: true,
		canGigantamax: "G-Max Supernova",
	},
	necrozmagmax: {
		
	},
	necrozmaduskmanegmax: {
		
	},
	necrozmadawnwingsgmax: {
		
	},
	necrozmaultragmax: {
		
	},
	*/
	/*
	latias: {
		inherit: true,
		canGigantamax: "G-Max Misty Mayhem",
	},
	latiasgmax: {
		
	},
	rayquaza: {
		inherit: true,
		canGigantamax: "G-Max Descending Dragon",
	},
	rayquazagmax: {
		
	},
	*/
};