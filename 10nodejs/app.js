var http=require('http')
http.createServer(function (request,response){
    response.end('http://localhost:8888')
}).listen(8888)

console.log('http://localhost:8888')