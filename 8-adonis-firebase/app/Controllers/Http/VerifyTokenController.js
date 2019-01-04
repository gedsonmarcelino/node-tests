'use strict'

class VerifyTokenController {

  async check({request, view}){
    const params = request.post()

    const admin = require('firebase-admin')
    const serviceAccount = require('../../../database/serviceAccount.json');

    try {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: 'https://vue-http-test-5bfdd.firebaseio.com'
      });
    } catch (e) {

    }

    console.log('Verify Token');
    await admin.auth().verifyIdToken(params.accessToken)
    .then(function(decodedToken) {
      var uid = decodedToken.uid;
      console.log('It is valided this token!')
    }).catch(function(error) {
      console.log('Error Verify Token', error)
    });
    console.log('End Verify Token');

    
    return view.render('verifyToken', {accessToken: params.accessToken})
  }
}

module.exports = VerifyTokenController
