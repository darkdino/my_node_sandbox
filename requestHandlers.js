//a collection of request handlers

var exec = require("child_process").exec;
var querystring = require("querystring");
var fs = require("fs");
var formidable = require("formidable");

function start(response, request){
    console.log("Request handler 'start'.");
	
	
  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" '+
    'content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="file" name="upload">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
	
	
}

function upload(response, request){
    console.log("Request handler 'upload'.");
	
	
	var form = new formidable.IncomingForm();
	console.log('about to parse incoming post');
	form.parse(request, function(error, fields, files){
		console.log('parsing done, inside callback now');
		
		fs.rename(files.upload.path, "C:\\Users\\sergey\\AppData\\Local\\Temp\\test.png", function(err) {
			if(err){
				fs.unlink("C:\\Users\\sergey\\AppData\\Local\\Temp\\test.png");
				fs.rename(files.upload.path, "C:\\Users\\sergey\\AppData\\Local\\Temp\\test.png");
			}
		});
	});
	
	
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("received image:<br />");
	response.write("<img src='/show' />");
	response.end();
}

function show(response, request){
	console.log("Request handler 'show'.");
	fs.readFile("C:\\Users\\sergey\\AppData\\Local\\Temp\\test.png", "binary", function(error, file) {
		if(error){
			response.writeHead(500, {"Content-Type":"text/plain"});
			response.write(error+"\n");
			response.end();
		}
		else {
			response.writeHead(200, {"Content-Type":"image/png"});
			response.write(file, "binary");
			response.end();
		}
	});
}

exports.start = start;
exports.upload = upload;
exports.show = show;