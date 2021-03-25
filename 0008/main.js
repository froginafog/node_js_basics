//use
//var file_system = require('fs'); 
//to include the file system module

//create a Node.js file that reads the HTML file and return the content
function main()
{
    var http = require('http');
    var file_system = require('fs');
    
    http.createServer(function (request, response) 
    {
        //open a file on the server
        //read the file 'index.html' 
        //return the content of 'index.html'
        file_system.readFile('index.html', function(err, data) 
        {
            //"data" is an object 
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data);  
            //the html content that are read are stored in "data"
            return response.end();
        });
    }).listen(1234);
    
    //To run the program, open command prompt
    //go to the location of the file
    //type: node file_name.js
    //open a browser
    //type: http://localhost:1234
}

main();