export const Pokedex: import('../../../sim/dex-species').ModdedSpeciesDataTable = {
	cresceidon: {
		inherit: true,
		baseStats: { hp: 80, atk: 32, def: 111, spa: 88, spd: 99, spe: 125 },
		abilities: { 0: "Multiscale", 1: "Rough Skin" },
		eggGroups: ["Undiscovered"],
	},
	quarbuncle: {
		num: 8675309,
		name: "Quarbuncle",
		types: ["Rock", "Electric"],
		genderRatio: { M: 0.5, F: 0.5 },
		baseStats: { hp: 85, atk: 100, def: 138, spa: 70, spd: 66, spe: 33 },
		abilities: { 0: "Energized", 1: "Solid Rock", H: "Galvanize" },
		heightm: 1.7,
		weightkg: 260.0,
		color: "Purple",
		eggGroups: ["Mineral", "Field"],
	},
};
