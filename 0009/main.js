//use
//var file_system = require('fs'); 
//to include the file system module

function main()
{
    var file_system = require('fs');
    var output;
    
    output = "I am you and you are me.";

    //If the file "output.txt" exists, 
    //then the content of "output" is written to the file.
    //If the file "output.txt" does not exist,
    //then it is created and the content of "output" is written to the file.
    file_system.writeFile("output.txt", output , function(err) 
    {
        if(err) 
        {
            throw err;
        }
        else
        {
            console.log("output.txt is created");
        }
    });

    //To run the program, open command prompt
    //go to the location of the file
    //type: node file_name.js
}

main();