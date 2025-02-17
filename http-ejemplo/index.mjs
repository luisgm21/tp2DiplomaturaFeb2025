import http from 'http'

// Crea un servidor http básico

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html; charset=utf-8');
    res.end('¡Hola Mundo ñ!')
});

server.listen(3000,'127.0.0.1',()=>{
    console.log('Servidor corriendo en http://127.0.0.1:3000/');
});