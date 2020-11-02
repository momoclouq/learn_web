let arr;

//to initialize some data before each "it" without declaring them in the main code
//related to jasmine!
beforeEach(function(){
  arr = [1,3,5];
});

describe("Arrays", function(){
  describe("#push", function(){

    //the difference between toEqual and toBe
    //toEqual = check whether the elements in two arrays are equal, not the referece
    //toBe = check reference equality
    it("adds elements to an array", function(){
      arr.push(7);
      expect(arr).toEqual([1,3,5,7]);
    });
    it("returns the new length of the array", function(){
      expect(arr.push(7)).toBe(4);
    });
    it("adds anything into the array", function(){
      expect(arr.push({})).toBe(4);
    });
  });
});

//a very common flow in TDD: red, green, refactor
//1. start by writing a test that returns fail (red)
//2. Go write code to make the test past
//3. refactor the code as needed, as long as the code still passes the test, no bugs are introduced (not the current one at least)
function onlyStrings(arr){
    return arr.filter(function(el){
        return typeof el === "string";
    });
}

describe("onlyStrings", function(){
    it("returns an array", function(){
        expect(onlyStrings([1,2,3])).toEqual(jasmine.any(Array));
    });
    it("does not change arrays of strings", function(){
        expect(onlyStrings(["a","b","c"])).toEqual(["a","b","c"]);
    });
    it("removes non-string primitives from an array", function(){
        expect(onlyStrings([1,"hi",null,"cool",undefined,"woah",false,"ok"])).toEqual(["hi","cool","woah","ok"]);
      });
    it("removes reference types from an array", function(){
        expect(onlyStrings([{},"a",[],"b",function(){},"c"])).toEqual(["a","b","c"]);
    });
});

//unit test vs integration tests
//unit test: test for small components
//integration test: test the system as a whole
//more on this: https://stackoverflow.com/questions/5357601/whats-the-difference-between-unit-tests-and-integration-tests


