//modern frameworks like React and Angular 2 use it frequently
//just a layer of abstraction
class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHi(){
        return `${this.firstName} ${this.lastName} says Hello!`;
    }
    static isPerson(person){
        return person.constructor === Person;
    }
}

3