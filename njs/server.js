//HTTP server code

var http = require("http");
var url = require("url");

function start(route, handle){
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        
        route(handle, pathname);
        
        response.writeHead("200", {"Content-Type": "text/html"});
        response.write('<h3>Server as a module</h1>');
        response.end();
    }    

    http.createServer(onRequest).listen(process.env.PORT, process.env.IP);

    console.log('Server has started');
  

}
   
exports.start = start;   


