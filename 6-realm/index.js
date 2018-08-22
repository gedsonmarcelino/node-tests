const Realm = require('./db/realm')

const jsonData = require('./db.json')

Realm.then( realm => {
  jsonData.pokemons.map( item => {
    try {
      realm.write( () => {
        realm.create('Pokemon',{
          id: item.number,
          number: item.number,
          name: item.name,
          type1: item.type1,
          type2: item.type2
        })
      })
    } catch (error) {
      console.log(error)
    }
  })
})

// Realm.then( realm => {
//   const pokemons = realm.objects('Pokemon')
//   pokemons.slice(0, 6).map( item => console.log(item) )
// })