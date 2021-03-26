function function_caller(function_to_be_called)
{
    function_to_be_called();
}

var say_hello = function()
                {
                    console.log("hello");
                }

var say_bye = function()
              {
                  console.log("bye");
              }

function main()
{
    function_caller(say_hello);
    function_caller(say_bye);
}

main();

/*
hello
bye
*/