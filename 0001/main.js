//Node JS allows us to run JavaScript on the server side
//Open command prompt.
//Go to this directory.
//to run the program,type: node file_name.js
//open the internet browser
//type: http://localhost:1234

//Use require("module_name") to include a module. 
var http_obj = require("http");

http_obj.createServer(function(request, response) 
{
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World");
}).listen(1234); 

connection.destroy();
