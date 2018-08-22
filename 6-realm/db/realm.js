const Realm = require('realm')

const PokemonSchema = require('./schemas/Pokemon')
const PokemonMovesSchema = require('./schemas/PokemonMoves')

const config = {
  schema: [PokemonSchema, PokemonMovesSchema],
  path: './db/data/data.realm'
}

const createRealm = () => {
  return Realm.open( config )
  .then(realm => (realm))
  .catch(error => console.log(error));
}

module.exports = createRealm()