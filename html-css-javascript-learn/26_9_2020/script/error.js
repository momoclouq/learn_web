//errors: 2 types: syntax or do sth illegal
//catching and throwing errors

//example of try/throw/catch on javascript
try {
    if(Math.random() >= .5) {
        throw "Let's make an error!";
    }
    console.log("Whew...we made it.");
    console.log("We can only get here if the random number is less than .5.");
} catch(e){
    console.log("The error is ", e);
    console.log("We can only get here if an error was thrown. (Random number is greater than .5).");
}

console.log("Moving on.....");

//in a try/catch block, we can use finally to execute the code (regardless of the error)
try {
    // let's randomly try to throw an error
    if(Math.random() >= .5){
        // The following code will throw:
        // Uncaught TypeError: undefined is not a function(…)
        undefined();
    }
    console.log("Whew, we made it");
} catch(e){
   console.log("We didn't make it. The error message is", e.message);
} finally {
   console.log("No matter what we will see this statement");
}