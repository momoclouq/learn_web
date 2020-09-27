let namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
};

for(let keys in namesAndHobbies){
    console.log(namesAndHobbies[keys] + " => " + keys);
}

namesAndHobbies["minh"] = "girls";

if ("minh" in namesAndHobbies){
    console.log(namesAndHobbies["minh"] + " => " + "minh");
}