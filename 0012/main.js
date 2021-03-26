function main()
{
   var http_obj = require('http'); 
    
   http_obj.createServer(function(request, response) 
   {
        response.writeHead(200, {'Content-Type': 'text/html'});
        var output = "";
        for(var i = 0; i < 5; i++)
        {
            for(var j = 0; j <= i; j++)
            {
                output = output + "*";
            }
            response.write(output);
            response.write('<br>');  //write newline '\n'
            output = "";
        }
        response.end();
   }).listen(1234); 
    
    //To run the program, open command prompt
    //go to the location of the file
    //type: node file_name.js
    //open a browser
    //type: http://localhost:1234
    
    //to stop, go to the command prompt, type ctrl + c
}

main();

/*
*
**
***
****
*****
*/