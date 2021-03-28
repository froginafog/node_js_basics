//The event module is built into NodeJS.

const events = require('events'); 

const emitter = new events();  //event emitter object

function print_sum(...x)
{
	const num_x = x.length;
	var sum = 0;
	var output = "";
	var i = 0;
	
	if(num_x > 0)	
	{
		output = "sum = " + x[0];
		sum = sum + x[0];
	}
	
	if(num_x > 1)
	{	
		output = output + " + ";
		for(i = 1; i < num_x - 1; i++)
		{
			sum = sum + x[i];
			output = output + x[i] + " + ";
		}
		sum = sum + x[i];
		output = output + x[i];
	}	
	
	output = output + " = " + sum; 
	console.log(output);
} 

emitter.on("print_sum_event", print_sum);  

emitter.emit("print_sum_event", 1, 2, 3, 4, 5);  

/*
sum = 1 + 2 + 3 + 4 + 5 = 15
*/

