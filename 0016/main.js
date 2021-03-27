//In this program, we read the content of an html file
//and output the content to the browser.

var http_obj = require('http');
var fs_obj = require('fs');
var read_file_address = __dirname + "/" + "index.html";  

//__dirname is the name of the current directory

var read_stream_obj = fs_obj.createReadStream(read_file_address, 'utf8');  //read the data from a file

var server_obj = http_obj.createServer(function(request, response)
                                       {
                                            response.writeHead(200, {'Content-Type': 'text/html'});  
                                            //we specify 'html' so that it gets treated as an HTML file (instead of plain text file)
    
                                            read_stream_obj.pipe(response);  
                                            //pipe the "read_stream_obj" to the "response"
                                       }
                                      );

server_obj.listen(1234, '127.0.0.1');
console.log("listening to the port 1234");

//to run this program
//open the command prompt
//go to the location of this file
//type: node file_name.js
//open the browser
//type: http://127.0.0.1:1234