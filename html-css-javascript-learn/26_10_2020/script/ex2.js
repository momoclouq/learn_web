function nothingSpecial(str){
    let leftover = str.match(/\w|\s/g);

    return leftover.join("");
}

function sentenceCount(para){
    let sentences = para.match(/[\.\?\!]/g);

    return sentences.length;
}

let test1 = sentenceCount("The illustration (examples) paragraph is useful when we want to explain or clarify something, such as an object, a person, a concept, or a situation. When we illustrate, we show how something is as we point out. When we illustrate with examples, we give instances that show or prove to the readers so they can see for themselves how something is as we claim it to be.");
console.log(test1);

function checkTime(time){
    let correctTime = time.match(/\d{2}\-\d{2}\-\d{4}\s\d{2}\:\d{2}/);

    if (correctTime)
        return time.length == correctTime.join("").length;
    
    return false;
}

console.log(checkTime("14-10-2016 01:12"));
console.log(checkTime("asdcsc"));

function authenticateUser(usernames){
    return usernames.every(function(val){
        console.log(val);
        if (val.length < 6 && val.length > 10) return false;
        if (!val.match(/[a-z]/)) return false;
        if (!val.match(/\d/)) return false;
        if (val.match(/[a-z0-9]/g).length != val.length) return false;
        return true;
    });
}

let testUsernames = ["asdckmk131k ", "AiakFka194", "adb13ad5", "010401", "asdc123"];
console.log(authenticateUser(testUsernames));

function removeExcla(str){
    let separate = str.replace(/\!+$/, ""); //it will only search for \!+ at the end of the string
    
    return separate;
}

console.log(removeExcla("!a!!sdc!!!"));

function mexicanPhone(phone){
    let lada = "(55|56|\\(55\\)|\\(56\\))";
    let validNumbers = new RegExp(lada + "\\s?\\d{2}\\s?\\d{2}\\s?\\d{2}");
    //let lada = /\s?\d{2}\s?\d{2}\s?\d{2}/;
    //let validNumbers = new RegExp(lada);
    console.log(validNumbers);
    let matches = phone.match(validNumbers);
    console.log(matches);
    if (matches)
        return matches[0].length == phone.length;
    return false;
}

console.log(mexicanPhone("(56) 84 65 52"));
console.log(mexicanPhone("56 84 65 52"));
console.log(mexicanPhone("56846552"));

function checkIPv4(ip){
    let trueIP = /([0-2][0-5][0-5]-){3}[0-2][0-5][0-5]/;
    let match = ip.match(trueIP);

    if(match)
        return match[0].length == ip.length;
    return false;
}

console.log(checkIPv4("111-111-111-111"));
console.log(checkIPv4("123-412-000-111"));
console.log(checkIPv4("a12-bfa-1234-14"));