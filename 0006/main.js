function main()
{
    var http = require("http");
    var port_number = 1234;
    
    http.createServer(function(request, response)  
    {
        response.writeHead(200, {"Content-Type": "text/html"});  
        response.write(request.url);
        response.end();     
    }).listen(port_number); 
    
    //To run the program, open command prompt
    //go to the location of the file
    //type: node file_name.js
    //open a browser
    //type: http://localhost:1234/message
}

main();