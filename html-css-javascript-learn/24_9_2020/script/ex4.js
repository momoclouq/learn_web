//difference - takes two parameters and output the difference
function difference(value1, value2){
    return value1 - value2;
}

console.log(difference(1,2));
console.log(difference("asd","casd"));

//product - output the product of 2 parameters
function product(value1, value2){
    return value1 * value2;
}

console.log("product: " + product(2, 4));

//printDay - print the day in the week (1 = sunday)
function printDay(day){
    if (day == 1) return "Sunday";
    if (day == 2) return "Monday";
    if (day == 3) return "Tuesday";
    if (day == 4) return "Wednesday";
    if (day == 5) return "Thursday";
    if (day == 6) return "Friday";
    if (day == 7) return "Saturday";
    return undefined;
}

console.log("Printday: " + printDay(1));
console.log("Printday: " + printDay(19));

//lastElement - return the last element in an array
function lastElement(arr){
    return arr[arr.length - 1];
}

console.log(lastElement([12,13]));

//numberCompare - compare the 2 arguements
console.log(
(function numberCompare(number1, number2){
    if (number1 === number2) return "numbers are equal";
    if (number1 > number2) return "number1 > number2";
    if (number1 < number2) return "number1 < number2";
})(1,2));

//singleLetterCount - count the occurence of the single letter given
function singleLetterCount(code, letter){
    let temp = code.toLowerCase();
    let tempL = letter.toLowerCase();
    let count = 0;

    for (let i = 0; i < temp.length; i++){
        if (temp[i] === tempL) count++;
    }

    return count;
}

console.log("count single letter: " + singleLetterCount("amazing", "A"));
console.log("count single letter: " + singleLetterCount("aaaaa","b"));

//multipleLetterCount - count all the letter in the string
function multipleLetterCount(code){
    let count = {};

    for (let i = 0; i < code.length; i++){
        count[code[i]] = 0;
    }

    for (let i = 0; i < code.length; i++){
        count[code[i]]++;
    }

    return count;
}

console.log(multipleLetterCount("asdcmqisdcas"));

//array manipulation
//there are a few ways to simulate overloading functions in javascript(it does not support natively)
function arrayManipulation(arr, command, position, valuex = 0){

    if (command === "add"){
        switch (position){
            case "beginning":
                arr.unshift(valuex);
                valuex = arr.slice();
                break;
            case "end":
                arr.push(valuex);
                valuex = arr.slice();
                break;
            default: 
                console.log("There is something wrong with the position");
        }
    } else if (command === "remove"){
        switch (position){
            case "beginning":
                valuex = arr.shift();
                break;
            case "end":
                valuex = arr.pop();
                break;
            default: 
                console.log("There is something wrong with the position");
        }
    } else console.log("Wrong command");

    return valuex;
}

console.log(arrayManipulation([1,2,3],"remove", "end"));
console.log(arrayManipulation([1,2,3],"remove", "beginning"));
console.log(arrayManipulation([1,2,3],"add", "end", 100));
console.log(arrayManipulation([1,2,3],"add", "beginning", 100));

//isPalindrome
function isPalindrome(word){
    let wordAfter = (function(word){
        let result = [];

        for (let i = 0; i < word.length; i++){
            if (word[i] != " ") result.push(word[i].toLowerCase());
        }

        return result.join("");
    })(word);

    for (let i = 0; i < wordAfter.length / 2; i++){
        if(wordAfter[i] !== wordAfter[wordAfter.length - i - 1]) return false;
    }

    return true;
}

console.log('a man a plan a canal Panama: ' + isPalindrome('a man a plan a canal Panama'));
console.log('aha:' + isPalindrome('aha'));
console.log('0a13a: ' + isPalindrome('0a13a'));

let rockPaperScissor = {
    move: "",
    startGame: function(){
        while (true){
            move = prompt("Please enter your move (rock, paper, scissor): ");
            if (move == "rock" || move == "paper" || move == "scissor") break;
            alert("wrong move");
        }
        console.log(this.whatHappened(this.counterMove())); //an object cannot access its own function, without calling the object
    },
    counterMove: function(){
        let returnMove = Math.random() * 3;

        if (returnMove < 1) return "rock";
        if (returnMove < 2) return "paper";
        return "scissor";
    },
    whatHappened: function(moveComputer){
        if (move === moveComputer) alert("draw");
        if (move === "scissor" && moveComputer === "rock") alert("you lose");
        if (move === "scissor" && moveComputer === "paper") alert("you win");
        if (move === "rock" && moveComputer === "paper") alert("you lose");
        if (move === "rock" && moveComputer === "scissor") alert("you win");
        if (move === "paper" && moveComputer === "rock") alert("you win");
        if (move === "paper" && moveComputer === "scissor") alert("you lose");
    }
};

rockPaperScissor.startGame();