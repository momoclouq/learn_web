var expect = chai.expect;

//replaceWith: takes in a string, a character to replace and a character to replace it with and returns the string with the replacements. Write tests to make sure this is case sensitive
function replaceWith(word, replace, whatWith){
    let temp = [];

    for (let i = 0; i < word.length; i++){
        if (word[i] === replace) temp.push(whatWith);
        else temp.push(word[i]);
    }

    return temp.join('');
}

//
let word;
beforeEach(function(){
     word = "abcdeamsigasAasdkmSDKMS";
});

describe("replaceWith", function(){
    it("actually works", function(){
        let temp  = replaceWith(word, "a", "?");
        expect(temp).equal("?bcde?msig?sA?sdkmSDKMS");
    });
    it("is case-sensitive", function(){
        let temp = replaceWith(word, "A", "?");
        expect(temp).equal("abcdeamsigas?asdkmSDKMS");
    });
});

//expand:  which takes an array and a number and returns a copy of the array with as many numbers as specified
function expand(arr, times){
    let temp = [];

    for (let i = 0; i < times; i++){
        arr.forEach(function(value){
            temp.push(value);
        });
    }

    return temp;
}

//preparation
let arr = [];
beforeEach(function(){
    arr = [1,2,3];
});

describe("expand", function(){
    it("does work", function(){
        let result = expand(arr, 3);
        expect(result).to.deep.equal([1,2,3,1,2,3,1,2,3]);
    });
    it("length works", function(){
        let result = expand(arr, 4);
        expect(result.length).to.deep.equal(12);
    });
});

//acceptNumberOnly: which takes in any number of arguments and returns true if all of them are numbers
function acceptNumbersOnly(){
    for (let i = 0; i < arguments.length; i++){
        if(typeof arguments[i] !== 'number') return false;
        if(Number.isNaN(arguments[i])) return false;
    }
    return true;
}

describe("acceptNumbersOnly", function(){
    it("it works :)", function(){
        expect(acceptNumbersOnly(1, "foo") && acceptNumbersOnly(1,2,3,4,5, true)).to.equal(false);
    });
    it("it works with NaN", function(){
        expect(acceptNumbersOnly(1,2,3, NaN, 4)).to.equal(false);
    });
});

//mergeArrays: which takes in two arrays and returns one array with the values sorted
function mergeArrays(arr1, arr2){
    //my way
    let arr = [];

    arr = arr1.concat(arr2);

    return arr.sort(function(a, b){
        return a - b;
    });
}

describe("mergeArrays",function(){
    it("it merges", function(){
        let arr1 = [1,2];
        let arr2 = [3,3,4];

        expect(mergeArrays(arr1, arr2)).to.deep.equal([1,2,3,3,4]);
    });
});

//mergeObjects:which takes in two objects and return an object with the keys and values combined. If the second parameter has the same key - it should override first one
//there is built in function: Object.assign(), research it later but dont use it now
function mergeObjects(obj1, obj2){
    let tempObj = {};

    for (let key in obj1){
        for (let key2 in obj2){
            if (key === key2) tempObj[key2] = obj2[key2];
            else {
                tempObj[key] = obj1[key];
                tempObj[key2] = obj2[key2];
            }
        }
    }

    return tempObj;
}

//preparation
let obj1;
let obj2;
beforeEach(function(){
    obj1 = {
        name: "Foo",
        num: 33
    };

    obj2 = {
        test: "thing",
        num: 55
    };
});

describe("mergeObjects", function(){
    it("it works", function(){
        expect(mergeObjects(obj1, obj2)).to.deep.equal({
            name: "Foo",
            test: "thing",
            num: 55
        });
    });
});
