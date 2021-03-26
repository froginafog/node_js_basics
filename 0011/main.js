//to install 'upper-case' package
//open command prompt
//type: npm install upper-case 

//npm means node package manager
function main()
{
   var http_obj = require('http'); 
   var upper_case_obj = require('upper-case');  //to include the 'upper-case' package
    
   http_obj.createServer(function(request, response) 
   {
        response.writeHead(200, {'Content-Type': 'text/html'});
        var output = "To Node or not to Node.";
        response.write(output);
        response.write('<br>');  //write newline '\n'
        output = upper_case_obj.upperCase(output);     
        response.write(output);  //write this to the webpage
        response.end();
   }).listen(1234); 
    
    //To run the program, open command prompt
    //go to the location of the file
    //type: node file_name.js
    //open a browser
    //type: http://localhost:1234
    
}

main();

/*
To Node or not to Node.
TO NODE OR NOT TO NODE.
*/
