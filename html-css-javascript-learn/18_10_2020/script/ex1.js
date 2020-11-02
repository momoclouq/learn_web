//part 1
/*
function logThis(){
    return this;
}

console.log(logThis());

var instructor = {
    firstName: 'Tim',
    sayHi: function(){
        console.log("Hello! " + this.firstName);
    }
}

instructor.sayHi(); // ?

var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true,
        displayLocation: function(){
            return this.data.location;
        },
        data: {
            location: "Oakland"
        }
    },
}
*/
//console.log(instructor.info.displayLocation());
/////////////////////////////////////////////////////////////
//part 2
//call apply bind exercises

//fix the following code
var obj = {
    person: {
        fullName: "harry potter",
        sayHi: function(){
            return "This person's name is " + this.fullName;
        }
    }
}

console.log(obj.person.sayHi());

//sumEvenArugments
function sumEvenArguments(){
    for(let i = 0; i < arguments.length; i++){
        if (isNaN(arguments[i]) || (typeof arguments[i] !== "number")) return "?"; 
    }

    return [].slice.call(arguments).reduce(function(acc, val){
        if (val % 2 === 0) acc += val;
        return acc;
    }, 0);
}

//test
describe("sumEvenArguments", function(){
    it("works with numbers", function(){
        expect(sumEvenArguments(1,2,3,4,5,0)).toEqual(6);
    });

    it("does not work with strings", function(){
        expect(sumEvenArguments(1,2,3,"asdcasd",[1,1,2])).toEqual("?"); 
    });
});

//arrayfrom - convers an array-like-object into an array
function arrayFrom(sampleobj){
    return [].slice.call(sampleobj);
}

//test
function sample(){
    var arr = arrayFrom(arguments)
    if(!arr.reduce) throw "This is not an array!"
    return arr.reduce(function(acc,next){
        return acc+next;
    },0)
}

console.log(sample(1,2,3,4,5));

//invokeMax - which accepts a function and a maximum amount. invokeMax should return a function that when called increments a counter. If the counter is greater than the maximum amount, the inner function should return "Maxed Out!"
function invokeMax(func, max){
    /*
    let count = 0;

    return function(a,b){
        if (count === maximum) return "maxed out";
        else {
            count++;
            console.log(this);
            console.log(a);            
            return fn(a);
        }
    };
    */
   counter = 0;

   let result = function(...args){
       if (counter == max){
           return "MAX";
       }
        counter++;
       return func(...args);
   }

   return result;
}

function add(a,b){
    return a+b;
}

function multiply(a,b,c){
    return a*b*c;
}

var addOnlyThreeTimes = invokeMax(add,3);
console.log(addOnlyThreeTimes(1,2));
console.log(addOnlyThreeTimes(2,2));
console.log(addOnlyThreeTimes(1,2));
console.log(addOnlyThreeTimes(1,2));
console.log(addOnlyThreeTimes(1,2));
console.log(addOnlyThreeTimes(1,2));

var multiplyThree = invokeMax(multiply, 3);
console.log(multiplyThree(1,2,3));
console.log(multiplyThree(1,2,3));
console.log(multiplyThree(1,2,3));
console.log(multiplyThree(1,2,3));
console.log(multiplyThree(1,2,3));
console.log(multiplyThree(1,2,3));

//guessingGame
/*
function guessingGame(amount){
    let times = 0;

    let value = Math.floor(Math.random() * 10);

    return function(guess){
        times++;
        if(times > amount) return "You are all done playing";
        if(times <= amount && guess == value){
            times = amount + 1;
            return "you are correct";
        }
        if(times < amount && guess < value){
            return "higher than that";
        } 
        if(times < amount && guess > value){
            return "lower than that";
        }
        return "game over. value is " + value;
    }
}

let game = guessingGame(5);
console.log(game(1));
console.log(game(5));
console.log(game(6));
console.log(game(7));
console.log(game(3));
*/