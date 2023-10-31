const http = require('http');
const os = require('os');

const port = 3000;

// Función para mostrar información del sistema y versión de Node.js
function showSystemInfo() {
    console.log(`Sistema operativo: ${os.platform()} ${os.release()}`);
    console.log(`Versión de Node.js: ${process.version}`);
}

const server = http.createServer((req, res) => {
    showSystemInfo();
    res.statusCode= 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello, World!</h1>');
});

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});