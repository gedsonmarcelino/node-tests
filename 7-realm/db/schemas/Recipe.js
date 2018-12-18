const Recipe = {
	name: 'Recipe',
	properties: {
		id: 'int',
    name: 'string',
    description: 'string',
    attracted: 'string',
    recipes: 'RecipeIngredient[]'
	}
};

module.exports = Recipe