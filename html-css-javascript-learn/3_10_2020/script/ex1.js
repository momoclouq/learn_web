//higher order functions, timers and closures exercises
//countdown
function countDown(time){
    let countTime = time;
    let timer = setInterval(function(){
        countTime--;
        if (countTime === 0){
            clearInterval(timer);
            console.log("Done");
            return;
        }
        console.log(countTime);
    }, 1000); 
}

//countDown(10);

//randomGame
function randomGame(){
    let tries = 0;

    let game = setInterval(function(){
            tries++;
            let value = Math.random();
            if (value > 0.75) {
                clearInterval(game); 
            }
    }, 1000);

    return function(){
        return tries;
    }
}

let game = randomGame();

setTimeout(function(){
    console.log(game());
}, 10000);

//isEven
function isEven(num){
    return num % 2 === 0;
}

//isOdd
function isOdd(num){
    return num % 2 != 0;
}

//isPrime
function isPrime(num){

    for(let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0) {
            return false;
        }
    }
    

    return true;
}

//numberFact
function numberFact(num, checker){
    return checker(num);
}

console.log(numberFact(59, isEven));
console.log(numberFact(59, isOdd));
console.log(numberFact(59, isPrime));

//find
function find(arr, fnbool){
    for (let val of arr){
        if (fnbool(val)) return val;
    }
}

console.log(find([8,11,4,27], function(val){return val >= 10}));
console.log(find([8,11,4,27], function(val){return val === 5}));

//findIndex
function findIndex(arr, fn){
    return arr.indexOf(find(arr, fn));
}

console.log(findIndex([8,11,4,27], function(val){return val >= 10}));
console.log(findIndex([8,11,4,27], function(val){return val === 5}));

//specialMultiply (using closure and arguments to solve)
function specialMultiply(){
    switch(arguments.length){
        case 1: 
            let a = arguments[0];
            return function(b){
                return a * b;
            };
        
        case 2:
            return arguments[0] * arguments[1];
        
        default:
            console.log("Something is wrong with the arguments");
    }

    return "Sth wrong";
}

console.log(specialMultiply(3,4));
console.log(specialMultiply(3)(4));
console.log(specialMultiply(3));
