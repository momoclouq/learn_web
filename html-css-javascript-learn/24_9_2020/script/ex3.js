let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

//add the Go language
programming.languages.push("Go");

//change the difficulty
programming.difficulty = 7;

delete programming.jokes;

programming.isFun = true;

for (let value of programming.languages){
    console.log("array consists:" + value);
}

for (let value in programming){
    console.log("object consists keys: " + value);
}

for (let keys in programming){
    console.log("object consists value: " + programming[keys]);
}