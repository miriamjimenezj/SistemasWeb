const http = require('http');
const os = require('os');
const osUtils = require('os-utils');

const port = 3000;

// Función para mostrar información del sistema y versión de Node.js
function showSystemInfo() {
    console.log(`Sistema operativo: ${os.platform()} ${os.release()}`);
    console.log(`Versión de Node.js: ${process.version}`);
}

//Funcion que muestra por consola la información
function showInfo() {
    console.log(`Uso de memoria: ${osUtils.freememPercentage().toFixed(2)}% libre`);
    console.log(`Tiempo activo del sistema: ${os.uptime().toFixed(0)} segundos`);
    console.log(`Tiempo activo de Node.js: ${process.uptime().toFixed(0)} segundos`);
    console.log('------------------');
}

const server = http.createServer((req, res) => {
    showInfo();
    res.statusCode= 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello, World!</h1>');
});

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
    showSystemInfo();
});