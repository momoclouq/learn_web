let people = ["Greg", "Mary", "Devon", "james"];

//1
for (let per of people){
    console.log(per);
}

//2
people.shift();

//3
people.pop();

//4
people.unshift("Matt");

//5
people.push("hanekawa");

//6
for (let i = 0; i < people.length; i++){
    console.log(people[i]);
    if (people[i] == "Mary") break;
}

//7
//if you use slice, the second arguement indicates the index of the last value (not the number of elements)
let copy = people.slice(2);
console.log(copy);

//8
console.log(people.indexOf("Mary"));

//9
console.log(people.indexOf("Foo"));

//10
let people1 = ["Greg", "Mary", "Devon", "James"];
people1.splice(2,1,"Elizabeth", "Artie");
console.log(people1.join("-"));
