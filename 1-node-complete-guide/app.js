const http = require('http');

const server = http.createServer( (req, res) => {
  res.setHeader('Content-Type','text/html');
  res.write('<html>');  
  res.write('<head><title>Node JS</title></head>');
  res.write('<body><p>Hello guys!</p></body>');
  res.write('</html>');
  res.end();
});

const PORT = 3000;
console.log('Listen on port '+PORT);
server.listen(PORT);