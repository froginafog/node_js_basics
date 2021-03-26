function main()
{
    var count = 0;
    var interval = setInterval(print_message, 1000); 
    
    console.log("start");
    
    function print_message()
    {
        if(count == 0 || count == 1)
        {
            console.log(count + " second");
        }
        else
        {
            console.log(count + " seconds");
        }
    
        count++;
    
        if(count > 10)
        {
            clearInterval(interval);
            console.log("end");
        }
    }
    
    //if we put console.log("end") here, then console.log("end") would be executed before print_message()
}

main();

/*
start
0 second
1 second
2 seconds
3 seconds
4 seconds
5 seconds
6 seconds
7 seconds
8 seconds
9 seconds
10 seconds
end
*/