//to determine the value of keyword this: explicit binding
//using functions: call, apply, bind
var animal = {
    introduce: function() {
        return this.name + " is a " + this.type + " and says " + this.sound + "!";
    }
};

var whiskey = {
    name: "Whiskey",
    type: "dog",
    sound: "woof"
};

var moxie = {
    name: "Moxie",
    type: "cat",
    sound: "meow"
};

// set the thisArg to be the object whiskey:
animal.introduce.call(whiskey); // "Whiskey is a dog and says woof!"

// set the thisArg to be the object moxie:
animal.introduce.call(moxie); // "Moxie is a cat and says meow!"

var person1 = {
    name: "Matt",
    greet: function(otherName) {
        return "Hi, " + otherName + ", I'm " + this.name + ". Nice to meet you!";
    }
}

var person2 = { 
    name: "Tim"
}

// person1 greets person2:

person1.greet(person2.name); // "Hi Tim, I'm Matt. Nice to meet you!

// person2 tries to greet person1, but there's a problem...

//person2.greet(person1.name); // TypeError: person2.greet is not a function

// person2 doesn't have a greet method! So let's borrow the one from person1...

person1.greet.call(person2); // "Hi, undefined, I'm Tim. Nice to meet you!"

// We still need to pass person1's name to the function being called! Let's pass the argument to the function inside of call:

person1.greet.call(person2, person1.name); // "Hi, Matt, I'm Tim. Nice to meet you!"

//one of the most common use cases for all is to convert an array like object into an actual array
function sumArgumentsIncorrectly(){
    return arguments.reduce(function(acc,next){
        return acc + next;
    },0);
}

//sumArgumentsIncorrectly(1,2,3,4,5) // this throws a type error because the arguments "array-like object" does not contain the method reduce!

function sumArgumentsCorrectly(){
    // we are going to use the slice method which makes copies of arrays, but instead of making a copy of [], we will use the arguments array as the context that we want slice to be called in. We can immediately attach reduce and we are good to go!
    return [].slice.call(arguments).reduce(function(acc,next){
        return acc + next;
    },0)
}

sumArgumentsCorrectly(1,2,3,4,5) // 15

let arrtest = [1,2,3,4];
console.log(arrtest.slice());

//call vs apply: apply is very similar to call
//except it only takes a maximum of 2 arguments, first one is thisArg (to set the keyword this)
//the second is always an array of parameters
//In other words, fn.call(thisArg,arg1,arg2,arg3) will produce the same result as fn.apply(thisArg,[arg1,arg2,arg3]) for any function fn

//so when to use either?
// If you have an array of parameters to pass, or you don't know exactly how many arguments 
//you'll be passing, apply might be a better bet. If you only have one argument to pass, 
//or you always know which arguments you'll need to pass, maybe call is a better choice

var matt = {
    firstName: "Matt",
    lastName: "Lane",
    instructor: true,
    favColor: "blue",
    dogOwner: true,
    deleteInfo: function() {
        console.log(arguments);
        for (var i = 0; i < arguments.length; i++) {
            delete this[arguments[i]];
        }
    }
}

var tim = {
    firstName: "Tim",
    lastName: "Garcia",
    instructor: true,
    favColor: "blue",
    dogOwner: false
};

var elie = {
    firstName: "Elie",
    lastName: "Schoppik",
    instructor: true,
    favColor: "purple",
    dogOwner: false
};

matt.deleteInfo('instructor', 'favColor');
matt; // {firstName: "Matt", lastName: "Lane", dogOwner: true}

matt.deleteInfo.apply(tim,['firstName', 'dogOwner', 'favColor']);
tim; // {lastName: "Garcia", instructor: true}

matt.deleteInfo.apply(elie,['instructor','favColor','dogOwner','lastName']);
elie; // {firstName: "Elie"}

//two common use-case of apply: Math.max
var numbersArray = [1,2,3,4,5];
Math.max.apply(this, numbersArray); //5

//flatten an array
var arrayToBeFlattened = [1,2,[3,4],[5,6]];

[].concat.apply([],arrayToBeFlattened);

//Bind
//takes the same arguments as the call function
//but bind does not require you to invoke the function immediately
//it can return a function which can be invoked later (if you provide insufficient arguments at first)
function add(a,b){
    return a+b;
}

var partialAdd = add.bind(this,2);
partialAdd(4); // 6

var obj1 = {
    firstName: "Elie",
    sayHi: function(){
        setTimeout(function(){
            console.log(this.firstName + " says hi!");
        }.bind(this),1000);
    }
}

obj1.sayHi();