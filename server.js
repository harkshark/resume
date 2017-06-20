
const HTTP = require('http');

const HOSTNAME = '127.0.0.1';
const PORT = 3000;

const SERVER = HTTP.createServer(
    function createServer(request, response) {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.end('Hello, World!');
    }
);

SERVER.listen(PORT, HOSTNAME, function listen() {
    console.log(`Server running at http://${HOSTNAME}:${PORT}`);
});

