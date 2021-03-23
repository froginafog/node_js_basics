function main()
{
    var http_object = require("http");
    var obj = require("./current_date_module");  //use "./" to locate the module

    http_object.createServer(function(request, response) 
    {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("current date and time: " + obj.current_date());
        response.end();
    }).listen(1234);
    
    //open the internet browser
    //type: http://localhost:1234
}

main();

/*
current date and time: Wed Dec 30 2020 21:44:06 GMT-0500 (Eastern Standard Time)
*/