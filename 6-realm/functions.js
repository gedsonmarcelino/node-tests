const realm = require('./db/realm')

const jsonData = require('./db.json')
const ingredientData = require('./ingredients.json')
const recipeData = require('./recipes.json')

exports.insertData  = () => {

  console.log('::: POKEMONS: ', jsonData.pokemons.length )
  console.log('::: IMPORTING POKEMONS: ')
  jsonData.pokemons.map( item => {
    const moves = []
    item.moves.map( move => moves.push({id_pokemon: item.number, ...move}))
    try {
      realm.write( () => {
        realm.create('Pokemon',{
          id: item.number,
          number: item.number,
          name: item.name,
          type1: item.type1,
          type2: item.type2,
          moves: moves
        })
      })
    } catch (error) {
      console.log(error)
    }
  })
  console.log('::: FINISHED POKEMONS ' )

  console.log('::: INGREDIENTS: ', ingredientData.typeIngredients.length )
  console.log('::: IMPORTING INGREDIENTS: ')
  ingredientData.typeIngredients.map( item => {
    try {
      realm.write( () => {
        realm.create('Ingredient',{
          id: item.id,
          name: item.name,
          description: item.description,
          color: item.color,
        })
      })
    } catch (error) {
      console.log(error)
    }
  })
  
  console.log('::: FINISHED RECIPES ' )
  console.log('::: RECIPES: ', recipeData.recipes.length )
  console.log('::: IMPORTING RECIPES: ')
  recipeData.recipes.map( item => {
    const ingredients = []
    item.ingredients.map( i => {
      ingredients.push({
        level: i.level,
        type: i.type,
        item_1: i.items[0],
        item_2: i.items[1],
        item_3: i.items[2],
        item_4: i.items[3],
        item_5: i.items[4],
      })
    })

    try {
      realm.write( () => {
        realm.create('Recipe',{
          id: item.id,
          name: item.name,
          description: item.description,          
          attracted: item.attracted,
          recipes: ingredients
        })
      })
    } catch (error) {
      console.log(error)
    }
  })
  console.log('::: FINISHED RECIPES ' )

}
  
exports.getDataPokemon = () => {
  Realm.then( realm => {
    const pokemons = realm.objects('Pokemon')
    pokemons.slice(0, 3).map( item => {
      console.log(':::LENGTH', item.moves.length)
      item.moves.map( move => console.log(move))
    })
  })
}

exports.getDataIngredient = () => {
  Realm.then( realm => {
    const ingredients = realm.objects('RecipeIngredient')
    ingredients.map( item => {
      console.log(item)
    })
  })
}

