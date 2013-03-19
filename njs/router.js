//request router


function route(handle, pathname){
    console.log("Got a request like that: " + pathname);
    if(typeof handle[pathname] === 'function'){
        handle[pathname]();
    }
    else{
        console.log("No request found for: " + pathname + " typeof: " + typeof handle["/"]);
    }
}

exports.route = route;