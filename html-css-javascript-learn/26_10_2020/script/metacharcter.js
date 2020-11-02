//metacharacters
//\d - a digit character
let simplePhoneRegex = /\d{3}-\d{3}-\d{4}/;
let str = "My phone number is 201-867-5093";
console.log(str.match(simplePhoneRegex));

//\D - a non-digit character
let noNumbers = /\D+/g; //+: more of the same thing
let str2 = "H3llo";
console.log(str2.match(noNumbers));  

//\n, \r, \t (newline, carriage return, tab)
//more in link!!!!