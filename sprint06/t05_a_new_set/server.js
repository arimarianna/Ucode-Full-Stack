const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('index.html').pipe(res);
    } else if (req.url === '/style.css') {
        res.writeHead(200, {'Content-Type': 'text/css'});
        fs.createReadStream('style.css').pipe(res);
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Error 404!');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

