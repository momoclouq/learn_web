//reduce javascript 2 rithm
//reduce is one of the most powerful iterators, purpose: take an array and reduce it to a single value
//the value you reduce can be anything (string, boolean, object even a 2D array)

//the parameters to the callback of reduce takes 4 arguments
//first argument (new) can be called start/previous/accumulator
//more in the web
//you have to return the value to have the 'next' acc 
let arr = [2,4,6,8];
console.log(arr.reduce(function(acc, next){
    return acc + next;
}, 5));

/*
In the first iteration, acc is 5 and next is 2; the callback returns 5 + 2 = 7.
In the second iteration, acc is 7 and next is 4; the callback returns 7 + 4 = 11.
In the third iteration, acc is 11 and next is 6; the callback returns 11 + 6 = 17.
In the last iteration, acc is 17 and next is 8; the callback returns 17 + 8 = 25.
Now the array is exhausted, so reduce returns 25 (which is the sum of all elements in the array, plus 5)
*/

//in case there is no initial acc (5 in the last example), acc will be the first element of the array
//then next will be the second element ...

let arr2 = [1,2,3,4];
let obj1 = arr2.reduce(function(acc, next){
    if(next >= 2){
        acc['key' + next] = next;
    }
    return acc;
}, {});

//exercise - reduce
function extractKey(arr, key){
    return arr.reduce(function(acc, val){
        if (typeof val !== 'object' || val === null){
            console.log("something is wrong");
        } else acc.push(val[key]);
        return acc;
    }, []);
}

console.log(extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name"));

function filterLetters(arr, letter){
    if(letter.length != 1) return "wrong letter dumbass";
    else {
        return arr.reduce(function(acc, val){
            let isThere = 0;
            if (val.toLowerCase() === letter.toLowerCase()) isThere = 1;
            return acc + isThere;
        }, 0);
    }
}

console.log(filterLetters(["a","a","b","c","A"], "a"));
console.log(filterLetters(["a","a","b","c","A"], "z")); // 0
console.log(filterLetters(["a","a","b","c","A"], "B"));

function addKeyAndValue(arr, key, value){
    return arr.reduce(function(acc, val){
        if (typeof val !== 'object' || val === null){
            console.log("val is not object you pos");
        } else {
            val[key] = value;
            acc.push(val);
            return acc;
        }
    }, []);
}

console.log(addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true));

//check out reduceRight (same as reduce, but starts from the end of the array)