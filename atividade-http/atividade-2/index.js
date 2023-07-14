const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/home') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<meta charset="UTF-8">')
    res.end('<h1>Bem-vindo à página inicial!</h1>\n');
  } else if (req.url === '/about') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<meta charset="UTF-8">')
    res.end('<h1>Sobre nós: somos uma empresa dedicada a...</h1>\n');
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.write('<meta charset="UTF-8">')
    res.end('<h1>Rota não encontrada</h1>\n');
  }
});

server.listen(port, () => {
  console.log(`http://localhost:${port} 🤠🤠🤠`);
});
