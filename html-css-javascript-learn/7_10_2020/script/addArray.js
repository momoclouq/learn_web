//more methods to deal with arrays in js

//some
//return true if any value passes a condition specifed in the callback
let arr = [1,2,3,4];
console.log(arr.some(function(val){
    return val > 2;
}));

(function(){
    console.log("testing");
})();

//every - same as some, but every value must satify the condition for the function to return true
let everythingLessThanFive = arr.every(function(val){
    return val < 5;
});

console.log(everythingLessThanFive);

//find
//find an lelement in an array based on some conditions
let arr1 = [-3,1,8,4];
let firstValueGreaterThanTwo = arr1.find(function(val){
    return val > 2;
});

console.log(firstValueGreaterThanTwo);

//findIndex
//find the first index that satisfies a condition (the callback function)
let firstIndexOfElementGreaterThanTwo = arr.findIndex(function(){
    return val > 2;
});

console.log(firstIndexOfElementGreaterThanTwo);

//combining iterators
//filter/map/forEach/reduce/some/every/find/findIndex
let arr2 = [1,2,3,4,5];

function isNumberOdd(val){
    return val % 2 === 1;
}

function doubleValue(val){
    return val * 2;
}

function sum(a,b){
    return a + b;
}

arr2.filter(isNumberOdd).map(doubleValue).reduce(sum, 0);

//remember that these iterators do not support break/continue command
//use for loop for them

