//The event module is built into NodeJS.

const events = require('events'); 

const event_emitter = new events();  //event emitter object

function print_messages(...messages)
{
	const num_messages = messages.length;
	for(var i = 0; i < num_messages; i++)
	{
		console.log(messages[i]);
	}
} 

event_emitter.on("message_event", print_messages);  

event_emitter.emit("message_event", "To Node or not to Node.", "To C or not to C.", "To Javascript or not to Javascript.");  

/*
To Node or not to Node.
To C or not to C.
To Javascript or not to Javascript.
*/
