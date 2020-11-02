//this in an object
var friend = {
    firstName: "Ash",
    sayHi: function(){
        return this.firstName + " says hello!";
    }
};

// the keyword this will refer to friend when we invoke sayHi:
friend.sayHi(); // Ash says hello!

var dog = {
    name: "Whiskey",
    sleep: function() {
        return this.name + " is sleeping: zzzzz...."
    }
}

dog.sleep(); // Whiskey is sleeping: zzzzz....

var nested = {
    number: 1,
    anotherObject: {
        anotherNumber: 2,
        whatIsThis: function() {
            return this;
        }
    }
}

nested.anotherObject.whatIsThis(); //Object {anotherNumber: 2;}