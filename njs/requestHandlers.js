//a collection of request handlers

function start(){
    console.log("Request handler 'start'.");
}

function upload(){
    console.log("Request handler 'upload'.");
}

exports.start = start;
exports.upload = upload;