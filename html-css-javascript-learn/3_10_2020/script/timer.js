//when we want code to be executed after a specific amount of time
//setTimeout and setInterval: both are higher order functions
//setTimeout will only run the callback function once, whilc setInterval will run it infinite amount of times

/*
//examples
let timerId = setTimeout(function(){
    console.log("Hello!");
}, 2000);

//to stop the timer (we use expression functions)
clearTimeout(timerId);
*/

//asynchronous code: code will be executed at a later point in time
//remember: javascript is single-threaded (only 1 process can happen at a time)
//however, we can "simulate" asynchronous code using callback functions

//How JS manages asynchronous code?
/*
define a few terms:
- call stack: where function calls are put (each one is called a "stack frame")
The call stack (or "the stack") is a LIFO data structure.
- event queue: when an asynchronous event occurs, it gets put into what is called the "event queue" (or the queue)
Wehn the stack is empty, a message is taken out of the queue and processed
It is then moved to the stack when the stack is clear. The message processing ends when the when the stack becomes empty again

- heap: where objects are stored. The heap is an unstructured/ unorganized region of memory

Javascript also has internally sth called "event loop", which checks the queue and sees if there are any processes to execute
*/

//example of event loop
console.log("first");
setTimeout(function(){
    console.log("second");
}, 0);
console.log("third");

//result: first - third - second
//why? first -> a message is sent to the queue to log "second" in 0 milliseconds, during another log function comes on the stack and prints out "third"
//after the stack is clear, the callback to the setTimeout foes on the stack and "second" is printedss