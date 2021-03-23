//Node.js has a built-in module called HTTP.
//It allows Node.js to transfer data through the 
//Hyper Text Transfer Protocol (HTTP).

function main()
{
    var http = require("http");
    var port_number = 1234;
    var output = "Hello World";

    //create a server object
    //"req" represents the request from the client
    http.createServer(function(request, response)  
    {
        response.writeHead(200, {"Content-Type": "text/html"});  
        //If the response from the HTTP server is to be displayed HTML,
        //then we should include an HTTP header with the correct content type.
        //"200" is the status code which means OK
        //"{"Content-Type": "text/html"}" is an object containing the response headers

        response.write(output);  //write a response to the client
        response.end();          //end the response
    }).listen(port_number); //the server object listens on port 1234
    
    //The function passed into the http.createServer() will be executed 
    //when someone tries to access the computer on port "port_number" (1234).
    
    //To run the program, open command prompt
    //go to the location of the file
    //type: node file_name.js
    //open a browser
    //type: http://localhost:1234
}

main();