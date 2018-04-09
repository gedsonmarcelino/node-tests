var nodemailer = require('nodemailer')
var config = require('./config') // return { user: '', pass: '}

var transporte = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: config.user,
    pass: config.pass
  }
})

var email = {
  from: 'scoker.br@gmail.com',
  to: 'gedson.marcelino@gmail.com',
  subject: 'Node.js ♥ unicode',
  html: 'E-mail foi enviado do <strong>Node.js</strong>'
}

transporte.sendMail(email, function (err, info) {
  if (err) throw err
  console.log('Email enviado! Leia as informações adicionais: ', info)
})
