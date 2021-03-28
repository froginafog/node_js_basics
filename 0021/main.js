//The event module is built into NodeJS.

const events = require('events'); 

const event_emitter = new events();  //event emitter object

function print_hello()
{
	console.log("HELLO");
} 

event_emitter.on("say_hello", print_hello);  //set up an event
//"say_hello" is the name of the event
//print_hello is the function of the event

function print_bye()
{
	console.log("BYE");
} 

event_emitter.on("say_bye", print_bye);  //set up an event
//"say_bye" is the name of the event
//print_bye is the function of the event

event_emitter.emit("say_hello");  //emit the event
event_emitter.emit("say_bye");  //emit the event

/*
HELLO
BYE
*/
