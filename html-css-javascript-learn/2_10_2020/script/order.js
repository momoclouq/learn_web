//higher order functions
//what is higher order function?
//functions that accept functions as parameters

/*
//example
function sendMessage(message, fn){
    return fn(message);
}

sendMessage("Hello", console.log);
sendMessage("Hello", alert);
sendMessage("What is your name?", prompt);
sendMessage("Do you like JavaScript?", confirm);

//you can see that the functions are being referenced (not invoked) when sendMessage() was invoked
//So you pass the function's name, not the invocation of the function

//anonymous functions as parameters
sendMessage("Hi bitch", function(message){
    console.log(message + " from the other side");
});

//we call a function that is passed as an argument to a higher order function a callback
//another example
function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function math(a,b, fn){
    return fn(a,b);
}

math(1,4,add);
math(5,5,subtract);

//practice
function each(arr, fn){
    for (let val of arr){
        fn(val);
    }
}

console.log("testing 1");
each([1,2,3,4], function(val){
    console.log(val);
});

console.log("tesing 2");
each([1,2,3,4], function(val){
    console.log(val * 2);
});
*/

///exercises
function map(arr, fn){
    let temp = [];

    for (let val of arr){
        temp.push(fn(val));
    }

    return temp;
}

console.log("test ex 1");
console.log(map([1,2,3,4], function(val){
    return val * 2;
}));

function reject(arr, fn){
    let temp = [];

    for (let val of arr){
        if (!fn(val)) temp.push(val);
    }

    return temp;
}

console.log("test ex 2");
console.log(reject([1,2,3,4], function(val){
    return val > 2;
}))

console.log(reject([2,3,4,5], function(val){
    return val % 2 === 0;
}))