// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: import('../sim/dex-formats').FormatList = [

	// Random Battles
	///////////////////////////////////////////////////////////////////

	{
		section: "Plasma Random Battles",
		column: 1,
	},
	{
		name: "[Gen 8] [Plasma] Random Battle",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with sets that are generated to be competitively viable.`,
		mod: 'gen8',
		team: 'random',
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod'],
	},
	{
		name: "[Gen 8] [Plasma] Random Doubles Battle",
		mod: 'gen8',
		gameType: 'doubles',
		team: 'random',
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Illusion Level Mod'],
	},

	// Sw/Sh Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "Plasma Singles",
		column: 2,
	},
	{
		name: "[Gen 8] [Plasma] Ubers",
		mod: 'gen8',
		ruleset: ['Standard'],
		banlist: ['AG', 'Shadow Tag', 'Baton Pass'],
	},
	{
		name: "[Gen 8] [Plasma] OU",
		mod: 'gen8',
		ruleset: ['Standard'],
		banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Power Construct', 'Sand Veil', 'Shadow Tag', 'Snow Cloak', 'King\'s Rock', 'Baton Pass'],
	},
	{
		name: "[Gen 8] [Plasma] UU",
		mod: 'gen8',
		ruleset: ['[Gen 8] [Plasma] OU'],
		banlist: ['OU', 'UUBL', 'Light Clay'],
	},
	{
		name: "[Gen 8] [Plasma] RU",
		mod: 'gen8',
		ruleset: ['[Gen 8] [Plasma] UU'],
		banlist: ['UU', 'RUBL'],
	},
	{
		name: "[Gen 8] [Plasma] NU",
		mod: 'gen8',
		ruleset: ['[Gen 8] [Plasma] RU'],
		banlist: ['RU', 'NUBL', 'Drizzle', 'Drought', 'Slush Rush'],
	},
	{
		name: "[Gen 8] [Plasma] PU",
		mod: 'gen8',
		ruleset: ['[Gen 8] [Plasma] NU'],
		banlist: ['NU', 'PUBL'],
	},
	{
		name: "[Gen 8] [Plasma] ZU",
		mod: 'gen8',
		ruleset: ['[Gen 8] [Plasma] PU'],
		banlist: ['PU', 'ZUBL', 'Damp Rock', 'Grassy Seed'],
	},
	{
		name: "[Gen 8] [Plasma] LC",
		mod: 'gen8',
		ruleset: ['Little Cup', 'Standard'],
		banlist: [
			'Corsola-Galar', 'Cutiefly', 'Drifloon', 'Gastly', 'Gothita', 'Magby', 'Rufflet', 'Scraggy', 'Scyther', 'Sneasel', 'Swirlix',
			'Tangela', 'Vulpix-Alola', 'Woobat', 'Zigzagoon-Base', 'Chlorophyll', 'Moody', 'Baton Pass', 'Sticky Web',
		],
	},	{
		name: "[Gen 8] [Plasma] Anything Goes",
		mod: 'gen8',
		ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},
	{
		name: "[Gen 8] [Plasma] Battle Stadium Singles",
		mod: 'gen8',
		bestOfDefault: true,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 8', 'VGC Timer', 'Limit Two Restricted'],
		restricted: ['Restricted Legendary'],
	},
	// Sw/Sh Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "Plasma Doubles",
		column: 3,
	},
	{
		name: "[Gen 8] [Plasma] Doubles Ubers",
		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', '!Gravity Sleep Clause'],
		banlist: [],
	},
	{
		name: "[Gen 8] [Plasma] Doubles OU",
		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', 'Swagger Clause'],
		banlist: ['DUber', 'Power Construct', 'Shadow Tag'],
	},
	{
		name: "[Gen 8] [Plasma] Doubles UU",
		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['[Gen 8] [Plasma] Doubles OU'],
		banlist: ['DOU'],
	}
];
