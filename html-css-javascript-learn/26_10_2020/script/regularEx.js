//regular expression: a sequence of characters that create a pattern
//search/find these patters in strings
//used to validate mails, phone numbers, zip codes and passwords
/*
//one way to create a regular expression is to place the pattern between two //
let pattern = /Elie/;

//match method: return an array of matches, or null if a match is not found
let str = "My name is Minh, is your name Minh?";
let matches = str.match(/Minh/);
console.log(matches);

//but that only match the first occurence
//we place flags after the closing / in a regular expression
matches = str.match(/Minh/g); //g = global
console.log(matches);

matches = str.match(/Minh/gi); //i = case insensitive
console.log(matches);

//more about regular expressions
//the wildcard character
let str2 = "The cat in the hat deserves a pat";
let matches2 = str2.match(/.at/g);
console.log(matches2);

//use wildcard multiple times
matches2 = str2.match(/..a.e/gi);

//match numbers
matches = str2.match(/.2/g);

//character sets (note that [a-e] = a to e, you can use[a,e,5,d])
let str3 = "amen let me help you";
let matches3 = str3.match(/[a-d].../g);
console.log(matches3);

//greedy match
//?
var match1 = "cookies".match(/cookies?/) // ['cookies']
var match2 = "cookie".match(/cookies?/) // ['cookie']
var match3 = "cookies".match(/cookiess?/) // ['cookies']
var match4 = "cookies".match(/cookiesss?/) // null
//+
 match1 = "cookiessssssssss".match(/cookies+/) // ["cookiessssssssss"]
 match2 = "cookies".match(/cookies+/) // ['cookies']
 match3 = "cookie".match(/cookies+/) // null

//* - everything

//character ranges
//{2} = exactly 2 times, {1,3} = 1 to 3 times, {1,} = more than 1 time
str = "helo hello hellllo hellllllllllo"
str.match(/hel{2,}o/g);

//escape key for special characters
str.match(/\./g);

//functions like replace, search, split
//using RegExp constructor
function countLetters(word, letter){
    let regex = new RegExp(letter, 'gi');
    let matches = word.match(regex);
    if(matches){
        return matches.length;
    }
    return 0;
}
*/

function countNumbers(numberStr){
    let count = 0;

    let matches = numberStr.match(/[0-9]/g);
    if (matches)
        count = matches.length;

    return count;
}

console.log(countNumbers("321321dsadsa930-29d132b13a")); // 16
console.log(countNumbers("this is so wonderful")); // 0
console.log(countNumbers("this is so 1234")); // 4

function capitalSentence(str){
    let matches = str.match(/[A-Z]/g);

    if(matches)
        return matches.join("");
    else return "";
}

console.log(capitalSentence("The Cat In The Hat")); // "TCITH"
console.log(capitalSentence("And I Think to Myself What a Wonderful World")); // "AITMWWW"\

function isValidPassword(password){
    let matchesSpecialChar = password.match(/[!,@,#,$,%]/);
    if (matchesSpecialChar && (password.length > 7)) return true;
    return false; 
}

isValidPassword('TacoCat') // false
isValidPassword('foo') // false
isValidPassword('awesome!') // true
isValidPassword('win!@') // false