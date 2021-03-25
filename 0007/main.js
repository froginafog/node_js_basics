function main()
{
    var http = require('http');
    var url_obj = require('url');
    var port_number = 1234;

    http.createServer(function(request, response)
    {
        response.writeHead(200, {'Content-Type': 'text/html'});
        
        var query = url_obj.parse(request.url, true).query;
        //split the query string into readable parts (such as the url module)
        
        var output = query.month + " " + query.date + ", " + query.year + "\n";
        
        response.end(output);
    }).listen(port_number);
    
    //To run the program, open command prompt
    //go to the location of the file
    //type: node file_name.js
    //open a browser
    //type: http://localhost:1234/?&year=1995&month=March&date=12
    
    //month,date,year are specific identifiers
}

main();