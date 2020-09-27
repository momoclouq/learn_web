let me = {
    firstName: "minh",
    lastName: "pham",
    occupation: "thinker"
};

//access
me.firstName;
me.lastName;
me.occupation;

me["firstName"];
me["lastName"];
me["occupation"];

//add key hobby
me["hobby"] = "girls";
console.log(me["hobby"]);

//delete the key
delete me.occupation;
console.log(me);