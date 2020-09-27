//for loop
for (let i = 0; i < 5; i++){
    console.log(i);
}

//while loop
let i = 0;
while(i < 5){
    console.log(i);
    i++;
}

//do while - do atleast once
i = 0;
do {
    console.log(i);
    i++;
} while(i < 5);

//break out of the loop: break;
//skip this iteration and continue the next one: continue;
//better for loop
let names = ["minh", "yuuko", "mashiro"];
for (let name of names){
    console.log(name);
}

//looping over string
let name = "Elie";
for (let i = 0; i < name.length; i++){
    console.log(name[i]);
}

//split (use with a string) - turn a string to an array (elements selected from delimiter)
//delimeter will be removed from the result
let string = "hello world";
string.split(""); //split at every character
string.split(" "); //split at every space

//strings are immutable
