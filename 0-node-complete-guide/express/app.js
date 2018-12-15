const http = require('http');
const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('It was requested');
  next();
})

app.use((req, res, next) => {
  console.log('It was another requested');
  res.send("Hello my middleware!");
})

const server = http.createServer(app);
server.listen(3000);