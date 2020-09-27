//there are 2 ways to declare a function
//1 is function declaration (normal)
//2 is function expression

let expression = function(){
    return "I am a function expression";
};

//one difference is that we do not give a name to the function when creating with expression
//they are called anonymous functions

//IIFE: immediately invoked function expressions
//gets called after it is written immediately

(function(){
    let person = "momo";
    return person;
})();

//we can even save the result with variable declaration etc
let result = (function(){
    let value = 5 * 5;
    return value;
})();
console.log(result);

//one common use case for IIFEs is object creation
let personObject = (function(){
    return {
        name: "Minh",
        age: 32,
        occupation: "developer",
        hobbies: "sailing"
    };
})();

//now oop related stuff
let personObject2 = (function invokeRightAway(){
    let person = "Elie";
    return {
        getName: function(){ //define a function for an object
            return person;
        },
        setName: function(newName){
            person = newName;
        }
    };
})();
