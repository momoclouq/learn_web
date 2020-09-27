//objects within objects
let schools = {
    georgieInstituteOfTechnology: {
        address: "North Ave 89",
        phoneNumber: "(404) 194492",
        dateEstablished: "October 13"
    }
};

let school1 = schools.georgieInstituteOfTechnology;

school1.address;
school1.phoneNumber;

//Arrays within Objects
/*
let instructorData = {
    name: "Tim",
    favoriteHobbies: ["dreaming", "coding"]
};
*/

//complex data
//some complex data, look up on the link for fuck sake

//exercise: because it is so short, im writing it here

//set up/////////////////////////////////////////////
let instructorData = {
    name: "Elie",
    additionalData: {
        instructor: true,
        favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
        moreDetails: {
            favoriteBasketballTeam: "New York Knicks",
            numberOfSiblings: 3,
            isYoungest: true,
            hometown: {
                city: "West Orange",
                state: "NJ",
            },
            citiesLivedIn: ["Seattle", "Providence", "New York"]
        }
    }
};
/////////////////////////////////////////////////////

function displayHometownData(){
    let destination = instructorData.additionalData.moreDetails.hometown;

    for (let keys in destination){
        console.log(destination[keys]);
    }
}

displayHometownData();

//display cities
function displayCities(){
    let destination = instructorData.additionalData.moreDetails.citiesLivedIn;

    for (let value of destination){
        console.log(value);
    }
}

displayCities();

//add details
function addDetail(key, value){
    let destination = instructorData.additionalData.moreDetails;

    destination[key] = value;
}

addDetail("isHilarious", true);
addDetail("previousApartments", ["Mission", "ahaah"]);
console.log(instructorData.additionalData.moreDetails);

//remove detail
function removeDetail(key){
    let destination = instructorData.additionalData.moreDetails;

    delete destination[key];
}

removeDetail('citiesLivedIn');
console.log(instructorData.additionalData.moreDetails);