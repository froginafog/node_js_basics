//use
//var file_system = require('fs'); 
//to include the file system module

function main()
{
    var file_system = require('fs');

    file_system.readFile("output.txt", {encoding: 'utf-8'}, function(error,data)
    {
        if(error) 
        {
            throw error;
        }
        else
        {
            console.log("output.txt is opened for reading");
            console.log("data:");
            console.log(data);
        }
    });

    //To run the program, open command prompt
    //go to the location of the file
    //type: node file_name.js
}

main();