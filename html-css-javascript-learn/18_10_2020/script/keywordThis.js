//intro to key word this
//this is just a keyword to refer to some objects
//the value depends on where in the code you use it
//default binding - the last possible option when other rules do not apply (window for browser)

let thing = this;
thing; //window

function outer(){
    return this;
}

outer(); //window

//strict mode: prevent coders to use global variables
"use strict"

console.log(this);