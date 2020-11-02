//prototypes exercise
//part 1
function Person(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.favoriteFoods = favoriteFoods;
}

Person.prototype.fullName = function(){
    return this.firstName + " " + this.lastName;
};

//testing
let person1 = new Person("Shana", "Malarkin", "Green", 38);
console.log(person1.fullName());

//override toString function of the Object.prototype
Person.prototype.toString = function(){
    return this.fullName() + ", Favorite Color: " + this.favoriteColor +", Favorite Number: " + this.favoriteNumber;
};

console.log(person1.toString());

Person.prototype.family = [];

function addToFamily(member){
    if (member instanceof Person){
        if (Person.prototype.family.includes(member)) console.log("duplicates");
        else Person.prototype.family.push(member);
    } else console.log("What is this?");
}

addToFamily(person1);
addToFamily(person1);
console.log(person1.family);

//part 2
Array.prototype.mapUpdate = function(fn){
    let temp = [];
    
    for (let i = 0; i < this.length; i++){
        temp[i] = fn(this[i], i, this);
    }

    return temp;
};

//testing
let arr = [1,2,3,4];
console.log(arr.mapUpdate(function(val){
    return val * 2;
}));

String.prototype.reverseUpdate = function(){
    let arr = [];

    for (let i = this.length-1; i >= 0; i--){
        arr.push(this.charAt(i));
    }

    return arr.join("");
}

let s1 = "abcd";
console.log(s1.reverseUpdate());

//implement function prototype bind - undone
Function.prototype.bindUpdate = function(context){
    let currentContext = this;
    let currentArguments = arguments;
}

let module = {
    getX: function(){
        return this.x;
    }
}

let moduleX = {
    x: "32"
}

let testing1 = module.getX;
console.log(testing1());

console.log(testing1.bind(moduleX));
