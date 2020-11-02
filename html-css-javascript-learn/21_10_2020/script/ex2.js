//convert to es2015
let person = {
    fullName: "Harry Potter",
    sayHi(){
        setTimeout(()=>{
            console.log("Your name is " + this.fullName)
        }, 1000);
    }
}

person.sayHi();

//
let name = "Josie";
console.log(`When ${name} comes home, so good`);

//
const DO_NOT_CHANGE = 50;
console.log(DO_NOT_CHANGE);

//
let arr = [1,2];
let [a,b] = arr;
[a,b] = [b,a];

//
let double = (arr) => {
    return arr.map(val => val * 2);
}

console.log(double([1,2]));

let add = (a=10, b = 10) => a+b;