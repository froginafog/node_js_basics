const readline = require('readline');

const readline_interface = readline.createInterface({input: process.stdin, output: process.stdout});  
//readline_interface is an object

let n1 = Math.floor((Math.random() * 10) + 1); 
//get a random number between 1 and 10

let n2 = Math.floor((Math.random() * 10) + 1); 
//get a random number between 1 and 10

let result = n1 + n2;

function get_user_input(user_input)
{
	user_input = user_input.trim();  //trim the trailing spaces
	user_input = Number(user_input);
	if(user_input === result)
	{
		readline_interface.close();   //close() emits the 'close' event
	}
	else
	{
		console.log("Wrong Answer, Try Again");
		readline_interface.setPrompt(`What is ${n1} + ${n2}? `);
		readline_interface.prompt();
		readline_interface.on('line', get_user_input);
	}
}

readline_interface.question(`What is ${n1} + ${n2}? `, get_user_input);

readline_interface.on('close', function(){console.log("Correct Answer")}); 
//'close' is an event

/*
What is 9 + 10? 15
Wrong Answer, Try Again
What is 9 + 10? 16
Wrong Answer, Try Again
What is 9 + 10? 19
Correct Answer
*/





