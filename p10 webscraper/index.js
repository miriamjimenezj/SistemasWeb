const http = require('http');

const port = 3000;
const url = "https://es.shein.com/"; //URL de la pagina que queremos analizar

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello, World!</h1>');
});

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});

/*
const https = require('https');
const options = {
    hostname: 'www.google.com',
    port: 443,
    path: '/',
    method: 'GET'
};
const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`);
    res.on('data', d => {
    process.stdout.write(d);
    });
});
req.on('error', error => {console.error(error);})
req.end();
*/