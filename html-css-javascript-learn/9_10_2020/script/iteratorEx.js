//rithm 2 js - iterator
//preparation
let users = [
    {
      username: 'larry',
      email: 'larry@foo.com',
      yearsExperience: 22.1,
      favoriteLanguages: ['Perl', 'Java', 'C++'],
      favoriteEditor: 'Vim',
      hobbies: ['Fishing', 'Sailing', 'Hiking'],
      hometown: {
        city: 'San Francisco',
        state: 'CA'
      }
    },
    {
      username: 'jane',
      email: 'jane@test.com',
      yearsExperience: 33.9,
      favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
      favoriteEditor: 'Emacs',
      hobbies: ['Swimming', 'Biking', 'Hiking'],
      hometown: {
        city: 'New York',
        state: 'NY'
      }
    },
    {
      username: 'sam',
      email: 'sam@test.com',
      yearsExperience: 8.2,
      favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
      favoriteEditor: 'Atom',
      hobbies: ['Golf', 'Cooking', 'Archery'],
      hometown: {
        city: 'Fargo',
        state: 'SD'
      }
    },
    {
      username: 'anne',
      email: 'anne@test.com',
      yearsExperience: 4,
      favoriteLanguages: ['C#', 'C++', 'F#'],
      favoriteEditor: 'Visual Studio Code',
      hobbies: ['Tennis', 'Biking', 'Archery'],
      hometown: {
        city: 'Albany',
        state: 'NY'
      }
    },
    {
      username: 'david',
      email: 'david@test.com',
      yearsExperience: 12.5,
      favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
      favoriteEditor: 'VS Code',
      hobbies: ['Volunteering', 'Biking', 'Coding'],
      hometown: {
        city: 'Los Angeles',
        state: 'CA'
      }
    }
  ];
//////////////////////////////////////////////

function printEmails(){
    users.forEach(function(val){
        console.log(val.email);
    });
}

printEmails();

//printHobbies
function printHobbies(){
    users.forEach(function(val){
        val.hobbies.forEach(function(valIn){
            console.log(valIn);
        });
    });
}

printHobbies();

//findHometownByState
function findHometownByState(state){
    return users.find(function(val){
        return val.hometown.state === state;
    });
}

console.log(findHometownByState('CA'));

//allLanguages
function allLanguages(){
    return users.reduce(function(acc, currentUser){
        currentUser.favoriteLanguages.forEach(function(lang){
            if (acc.every(function(val){
                return val !== lang;
            })) acc.push(lang);
        });
        return acc;
    }, []);
}

console.log(allLanguages());

//hasFavoriteEitor
function hasFavoriteEditor(editor){
    return users.some(function(currentUser){
        return currentUser.favoriteEditor === editor;
    });
}

console.log(hasFavoriteEditor('Eclipse'));
console.log(hasFavoriteEditor('VS Code'));

//findByUsername
function findByUsername(name){
    return users.find(function(val){
        return val.username === name;
    });
}

console.log(findByUsername('david'));

//part 2
//vowelCount
let vowels = ['a','e','i','u','o'];
function vowelCount(theString){
    let result = {};

    for(let i = 0; i<theString.length; i++){
        if(vowels.indexOf(theString[i]) >= 0) 
            if (result[theString[i]] > 0){
                result[theString[i]]++;
            } else result[theString[i]] = 1;
    }

    return result;
}

console.log(vowelCount("asjcdnaksdmcasieieueisodc"));

//removeVowels
function removeVowels(theString){
    let temp = [];

    for (let i = 0; i<theString.length; i++){
        if(!vowels.some(function(val){
            return val === theString[i];
        })) temp.push(theString[i]);
    }

    return temp;
}

console.log(removeVowels("amazing"));
console.log(removeVowels("asdkcmqw9nvskd10sdncasdcimasd"));