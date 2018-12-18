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

app.listen(3000);