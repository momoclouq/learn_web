//exercise for anonymous functions and IIFE

//first
console.log((function displayFullName(firstName, lastName){
    return firstName + " " + lastName;
})("minh", "Pham"));

function createCalculator(){
    return {
        add: function(number1, number2){
            return number1 + number2;
        },
        subtract: function(number1, number2){
            return number1 - number2;
        },
        multiply: function(number1, number2){
            return number1 * number2;
        },
        divide: function(number1, number2){
            if (number2 == 0) return "number2 = 0?";
            return number1 / number2;
        }
    };
}

//test
let calc = createCalculator();
console.log(calc.add(1,2));
console.log(calc.divide(1,0));