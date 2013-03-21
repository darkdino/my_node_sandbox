//a collection of request handlers

var exec = require("child_process").exec;


function start(response){
    console.log("Request handler 'start'.");
	
	
	exec ("dir", function(error, stdout, stderr) {
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write(stdout);
		response.end();
	});
	
	
}

function upload(response){
    console.log("Request handler 'upload'.");
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<p>Upload handler</p>");
	response.end();
}

exports.start = start;
exports.upload = upload;