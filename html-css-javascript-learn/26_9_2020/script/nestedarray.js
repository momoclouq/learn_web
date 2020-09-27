//multidimensional arrays
let myFirstSubarray = [["This", "is"], ["super", "cool"]];

//example
let nestedArr = [[1, 2], [3, 4]];
for (let i = 0; i < nestedArr.length; i++) {
  for (let j = 0; j < nestedArr[i].length; j++) {
    // notice that we are going inside the outer array
    // and now inside of the inner array
    console.log(nestedArr[i][j]);
  }
}

//exercise
//printEvens - print all even elements
console.log("Ex1:");
function printEvens(arr){
    //simplify case
    for (let i = 0; i< arr.length; i++){
        for (let k = 0; k < arr[i].length; k++){
            if (arr[i][k] % 2 == 0) console.log(arr[i][k]);
        }
    }
}

printEvens([[1,2], [2,5], [4,4,3]]);

//sumTotal - sum of all numbers in the array
function sumTotal(arr){
    let sum = 0;

    for (let i = 0; i < arr.length; i++){
        for (let k = 0; k <arr[i].length; k++){
            sum += arr[i][k];
        }
    }

    return sum;
}

console.log("Sum: " + sumTotal([[1,2], [2,3], [3,5], 5]));

//countVowels
function countVowelsword(word){
    let count = 0;
    for (let i = 0; i < word.length; i++){
        if("aeiou".includes(word[i])) count++;
    }

    return count;
}

function countVowels(arr){
    let count = 0;
    for(let sub of arr){
        if (Array.isArray(sub)) count += countVowels(sub);
        else count += countVowelsword(sub);
    }

    return count;
}

let testing = [
    "eekda",
    ["matt", ["tom"]],
    ["hams", "james"],
    "elkie"
];

console.log("String convert: " + testing.toString()); //we can use this to convert multidimensional arrays into 1 string

console.log("result: " + countVowels(testing));


