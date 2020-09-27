let instructor = {
    name: "Matt",
    mathWizard: true,
    dogOwner: false
};

//looping over objects: in vs of (looping over array)
//so we have keys = string
for (let keys in instructor){
    console.log(instructor[keys]);
}

//determine if a key exists in an object


let obj = {
    favoriteGirl: "chitanda",
    waifu1: "mashiro"
};

if ("favoriteGirl" in obj){
    console.log("The favoriteGirl is " + obj.favoriteGirl);
}

if ("Nothing" in obj){
    console.log("Nothing exists");
}