//This program reads from an existing text file and outputs the content
//of the text file to the webpage.

//How to run the program:
//open the terminal
//type: node main.js
//open a web browser
//type: http://localhost:1234

var fs = require('fs');  //fs is now an object

var read_file_address = __dirname + "/" + "data.txt"; 
var read_stream = fs.createReadStream(read_file_address);  //read_stream is an object

var output = "";

function print_data(input_data)
{
	var chunk = input_data.toString();
	output = output + chunk;
}

read_stream.on('data', print_data);  //data event handler

//----------------------------------------------------------------------------------------------

var http = require('http');  //http is now an object

function server(request, response)
{
	response.writeHead(200, {'Content-Type': 'text/html'});  
    //we specify 'html' so that it gets treated as an HTML file (instead of plain text file)
    
    response.write(output);
    response.end();
}

http.createServer(server).listen(1234);

console.log("listening to the port 1234");

