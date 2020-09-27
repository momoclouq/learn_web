//functions basics exercise
function myName(){
    return "Pham Hoang Minh";
}

let favoriteFoods = ["pizza", "ice cream"];

function randomFood(){
    let value = Math.random();
    if (value >= 0.5){
        return favoriteFoods[0];
    }

    return favoriteFoods[1];
}

let numbers = [1,2,3,4,5,6,7,8,9,10];

function displayOddNumber(){
    for (let value of numbers){
        if (value % 2 == 1) console.log(value);
    }
}

function displayEvenNumber(){
    for (let value of numbers){
        if (value % 2 == 0) console.log(value);
    }
}

function returnFirstEven(){
    for(let value of numbers){
        if (value % 2 == 0) {
            return value;
            break;
        }
    }
}

function returnFirstOdd(){
    for(let value of numbers){
        if (value % 2 == 1){
            return value;
            break;
        }
    }
}

function returnFirstHalf(){
    return numbers.slice(0, numbers.length / 2);
}

function returnSecondHalf(){
    return numbers.slice(numbers.length / 2);
}

console.log(returnSecondHalf());
console.log(returnFirstHalf());
displayOddNumber();

