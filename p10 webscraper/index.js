const http = require('http');
const https = require('https');
const cheerio = require('cheerio');

const port = 3000;
const options = {
    hostname: 'www.amazon.es',
    port: 443,
    path: '/',
    method: 'GET'
};
// HTML de amazon en un intervalo de tiempo
setInterval(() => {
    const req = https.request(options, res => {
        console.log(`statusCode: ${res.statusCode}`);
        res.on('data', d => {
            process.stdout.write(d);
        });
    });
    req.on('error', error => {console.error(error);})
    req.end();
}, 60);

// Servidor
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello, World!</h1>');
});

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});


