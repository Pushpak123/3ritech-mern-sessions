// import the required modules
var http = require("http");

// creating the server and setting the headers
// and port number setting
http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end("we are displaying the data at web");
}).listen(8081);

// display a logger statement
console.log(`server is listening at http://localhost:8081`);