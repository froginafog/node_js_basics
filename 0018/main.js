//This program reads from an existing text file and outputs the content
//of the text file to the webpage.

//How to run the program:
//open the terminal
//type: node main.js
//open a web browser
//type: http://localhost:1234

var fs_obj = require('fs');

var read_file_address = __dirname + "/" + "data.txt"; 
var read_stream_obj = fs_obj.createReadStream(read_file_address);

var chunk_count = 0;

function print_data(input_data)
{
	var chunk = input_data.toString();
	chunk_count++;
	chunk = "chunk number " + chunk_count + ": " + "\n" + chunk + "\n------------------------------------\n";
    console.log(chunk);
}

read_stream_obj.on('data', print_data);  //data event handler

/*
var http_obj = require('http');

function server_function(request, response)
{
	response.writeHead(200, {'Content-Type': 'text/html'});  
    //we specify 'html' so that it gets treated as an HTML file (instead of plain text file)
    
    read_stream_obj.pipe(response);  
    //pipe the "read_stream_obj" to the "response"
}

var server_obj = http_obj.createServer(server_function);

server_obj.listen(1234);

console.log("listening to the port 1234");
*/
