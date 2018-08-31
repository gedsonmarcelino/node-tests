const Realm = require('realm')

const config = {
  schema: [
    require('./schemas/Pokemon'),
    require('./schemas/PokemonMoves'), 
    require('./schemas/Recipe'), 
    require('./schemas/RecipeIngredient'), 
    require('./schemas/Ingredient')
  ],
  path: './db/data/data.realm'
}

// const createRealm = () => {
//   return Realm.open( config )
//   .then(realm => (realm))
//   .catch(error => console.log(error));
// }

const createRealm = () => {
  return new Realm( config )
}

module.exports = createRealm()