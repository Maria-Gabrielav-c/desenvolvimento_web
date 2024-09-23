var http = require ('http');

http.createServer( 
function(request, response){
response.writeHead(200, ('content.Type' , 'text/plain'));
response.end('Olá Servidor!');
}
).listen (8000, '127.0.0.1');
console.log('Servidor Executado');