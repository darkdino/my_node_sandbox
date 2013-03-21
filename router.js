//request router


function route(handle, pathname, response, request){
    console.log("Got a request like that: " + pathname);
    if(typeof handle[pathname] === 'function'){
        return handle[pathname](response, request);
    }
    else{
        console.log("No request found for: " + pathname);
		response.writeHead(404, {"Content-Type": "text/html"});
		response.write("404 Not Found");
		response.end();
    }
}

exports.route = route;
