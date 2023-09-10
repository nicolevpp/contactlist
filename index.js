// importamos nuestra app

const app = require('./app');
const http = require('http');

const server = http.createServer(app);

// escucha cualquier request del frontend

server.listen(3005, () => {
    console.log('El servidor está corriendo');
});


