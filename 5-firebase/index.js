var firebase = require('firebase')
var config = require('./config') // firebase config exporting var {db} = firebase.database

firebase.initializeApp(config)

var db = firebase.database()

var newData = async (db) => {
  await db.ref('contacts/').push({
    email: 'test123@teste.com',
    name: 'olha só',
    subject: 'que coisa é essa',
    text: 'my text will be here in some moment'
  }, (error) => console.log(error))
}

var updateData = async (db) => {
  await db.ref('contacts/-L9gsMP1NezIccCJerOH').update({
    email: 'test1111@teste.com',
    name: 'olha só 1111',
    subject: 'que coisa é essa 1111',
    text: 'my text will be here in some moment 1111'
  }, (error) => console.log(error))
}

var getData = async (db) => {
  await db.ref('contacts').on('value', (snapshot) => {
    console.log(snapshot.val())
  }, error => console.log(error))
}

var removeData = async (db) => {
  await db.ref('contacts/-L9gq5Wz-F_KH-EkzyYs').remove( result  => {
    console.log( result )
  })
}

// Write new contact
// newData(db)

// Update a contact
// updateData(db)

// Remove specific contact
// removeData(db)

// Get data: contacts
// getData(db)
