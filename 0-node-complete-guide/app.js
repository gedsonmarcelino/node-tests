const http = require('http');

const server = http.createServer( (req, res) => {
  console.log(req);
});

const PORT = 3000;
console.log('Listen on port '+PORT);
server.listen(PORT);