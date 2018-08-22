const PokemonSchema = {
	name: 'Pokemon',
	properties: {
		id: 'int',
		number: 'int',
		name: 'string',
		type1: 'string',
		type2: 'string',
		moves: 'PokemonMoves[]'
	}
};

module.exports = PokemonSchema