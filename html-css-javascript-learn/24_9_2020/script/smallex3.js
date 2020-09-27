function add(number1, number2){
    return number1 + number2;
}

function subtract(number1, number2){
    return number1 - number2;
}

function multiply(number1, number2){
    return number1*number2;
}

function divide (number1, number2){
    if (number2 == 0) return "number2 = 0?";
    return number1 / number2;
}

function sayHello(firstName){
    if (firstName === "minh") return "hello Boss";
    return "hello " + firstName;
}

function average (arr){
    let sum = 0;

    for (let value of arr){
        sum += value;
    }

    return sum / arr.length;
}

function createStudent(firstName, lastName){
    let student ={};

    student.firstName = firstName;
    student.lastName = lastName;

    return student;
}

//create 3 students
let studentone = createStudent("eru","Chitanda");
let studenttwo = createStudent("minh", "pham");
let studentthree = createStudent("yukino", "yukinoshita");

let students = [studentone, studenttwo, studentthree];
////////////////////

function findStudentByFirstname(firstName){
    for (let student of students){
        if(student.firstName.toLowerCase() == firstName.toLowerCase()) return true;
    }
    return false;
}

function extractEveryThird (arr){
    let temp = [];
    for (let i = 2; i < arr.length; i += 3){
        temp.push(arr[i]);
    }

    return temp;
}

function countEvansAndOdds(arr){
    let count = {
        even: 0,
        odd: 0
    };

    for (let value of arr){
        if (value % 2 == 0) count.even++;
        else count.odd++;
    }

    return count;
}

function onlyCapitalLetters(s){
    let temp = [];

    for (let i = 0; i<s.length; i++){
        if (s[i] != s[i].toLowerCase()) temp.push(s[i]);
    }
    
    return temp.join("");
}



console.log(findStudentByFirstname("asd"));
console.log(sayHello("minh"));
console.log(divide(1,2));
console.log(average([1,2,3,4,5]));
console.log(extractEveryThird([1,2,3,4,5,6,7,8,9]));
console.log(countEvansAndOdds([1,2,3,4,5,6,7,8]));
console.log(onlyCapitalLetters("ahaEUA asasdcAk asd"));


