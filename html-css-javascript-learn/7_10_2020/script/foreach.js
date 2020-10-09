//built-in methods on arrays called iterators

//forEach - 1 argument: a callback function that itself has 3 arguments (val, index, arr)
//to loop through the array without the forloop
//you do not have to provide all 3 argument for the callback function (just the ones you need)
let arr = [4,3,2,1];
arr.forEach(function(val, index, arr){  //loop through each value
    console.log(val);
});

arr.forEach(function(val, index){
    console.log(index);
});

//remember: forEach function will always return undefined (no matter what return command you write)

//double function - return a function that double the given array
function double(arr){
    let temp = [];

    arr.forEach(function(val){
        temp.push(val * 2);
    });

    return temp;
}

console.log(double([1,2,3,4]));

//exercise for forEach
function printFirstAndLast(arr){
    arr.forEach(function(val){
        let theString = String(val);
        console.log(theString[0] + theString[theString.length - 1]);
    });
}

printFirstAndLast(['awesome','example','of','forEach']);

function addKeyAndValue(arr, key ,value){
    arr.forEach(function(val){
        if (typeof val !== 'object' || val === null) {
            console.log("value is not an object");
        } else val[key] = value;
    });
}

let arr2 = [{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}];

addKeyAndValue(arr2, "isSane", false);
console.log(arr2);

//map - the function is the same as forEach, but it returns the array
//so the function will apply to each iteration and the element at that index will have to be returned
//so if you do not return anything, the value at that index of the new array will be undefined
let arr3 = [1,2,3,4];
arr3.map(function(val, index, array){
    return val * 2
}); //this will return [2,4,6,8] but does not change the original array

console.log(arr3);

//exercise for map
function valTimesIndex(arr){
    return arr.map(function(val, index){
        return val * index;
    });
}

console.log(valTimesIndex([1,2,3]));

function extractKey(arr, key){
    return arr.map(function(val){
        if (typeof val !== 'object' || val === null)
            console.log("value is not an object");
        else {
            return val[key];
        }
    });
}

let arr4 = extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name");
console.log(arr4);

//filter - returns an array jjust like map, but the callback you must return an boolean expression
//if the boolean exp is true, the value is then added to the outcome
let arr5 = [1,2,3,4];
let valuesGreaterThanTwo = arr.filter(function(val){
    return val > 2;
});

console.log(valuesGreaterThanTwo);

//exercise - filter
//tips: there is no character data type in js
function filterLetters(arr, letter){
    let temp = arr.filter(function(character){
        if (character.toLowerCase() === letter) return true;
    });
    return temp.length; 
}

console.log(filterLetters(["a","a","b","c","A"], "a")); // 3
console.log(filterLetters(["a","a","b","c","A"], "z")); // 0
console.log(filterLetters(["a","a","b","c","A"], "B"));

function filterKey(arr, key){
    return arr.filter(function(val){
        return val[key] === true;
    });
}

console.log(filterKey([{name: "Elie", isInstructor:true, isHilarious: false},{name: "Tim", isInstructor:true, isHilarious: true},{name: "Matt", isInstructor:true}], "isHilarious"));