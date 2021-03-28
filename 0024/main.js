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
		console.log("Correct Answer");
	}
	else
	{
		console.log("Wrong Answer");
	}
	readline_interface.close();
}

readline_interface.question(`What is ${n1} + ${n2}? `, get_user_input);

/*
What is 5 + 4? 9
Correct Answer
*/

/*
What is 3 + 1? 3
Wrong Answer
*/
