//nested objects exercises
//preparation
let nestedData = {
    innerData: {
      order: ["first", "second", "third"],
      snacks: ["chips", "fruit", "crackers"],
      numberData: {
          primeNumbers: [2,3,5,7,11],
          fibonnaci: [1,1,2,3,5,8,13]
      },
      addSnack: function(snack){
          this.snacks.push(snack);
          return this;
      }
    }
  }
//////////////////////////////////////

//part 1 using expression function
let part1 = function(){ 
    let arr = nestedData.innerData.numberData.primeNumbers;

    for (let value of arr){
        console.log(value);
    }
}

//part1();

//part 2
function part2(){
    let arr =  nestedData.innerData.numberData.fibonnaci;
    for (let value of arr){
        console.log(value);
    }
}

//part 3
console.log(nestedData.innerData.order[1]);

//part 4
nestedData.innerData.addSnack("chocolate");

console.log(nestedData.innerData.snacks);

//part 5
//this = innerData obj

//preparation
let nestedObject = {
    speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
    data: {
      continents: {
        europe: {
          countries: {
            switzerland: {
              capital: "Bern",
              population: 8000000
            }
          }
        }
      },
      languages: {
        spanish: {
            hello: "Hola"
        },
        french: {
            hello: "Bonjour"
        }
      }
    }
  }
///////////////////////////////////////////////
function addSpeaker(value){
    let destination = nestedObject.speakers;

    destination.push({name: value});

    return destination;
}

console.log(addSpeaker("age"));

function addLanguage(country, value){
    let destination = nestedObject.data.languages;

    destination[country] = {
        hello: value
    };

    return destination;
}

console.log(addLanguage("vietnam", "chao"));

function addCountry(name, capital, population){
    let des = nestedObject.data.continents.europe.countries;

    des[name] = {
        capital: capital,
        population: population
    };

    return des;
}

console.log(addCountry("german", "berlin", 200000));



