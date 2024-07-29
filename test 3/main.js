// if else small example
var quizPassed = "successfull";
if (quizPassed === "successfull") {
    console.log("Conratulations!!! you successfull in exam");
}
else {
    console.log("soory!!! you failed in exam");
}
// small if else game 
var positionHolders = "Areeba";
var positionHolder = "Amir";
if (positionHolders) {
    console.log("congrats! ".concat(positionHolders, " got 1st position"));
}
else if (positionHolders) {
    console.log("congrats! you ".concat(positionHolders, " got 1st position"));
}
else {
    console.log("keep it up!");
}
// Friend checker Game
var isFriend = "Areeba";
if (isFriend === "Areeba" || isFriend === "Mahnoor") {
    console.log("".concat(isFriend, " is your friend"));
}
else {
    console.log("".concat(isFriend, " is not your friend"));
}
// functions//
// what is functions?
// fundemnetal building of block code of javascript
function halfFryEgg() {
    var cooked = 1 + 2.5 + 3;
    console.log(cooked);
}
halfFryEgg();
halfFryEgg();
halfFryEgg();
halfFryEgg();
halfFryEgg();
halfFryEgg();
halfFryEgg();
halfFryEgg();
// another basic example of functions
function apple() {
    var eating = 1 + 1 + 1;
    console.log(eating);
}
apple();
apple();
apple();
//  Returning function values
function marketBiryaniMasala() {
    var cookedBiryani = 250;
    return cookedBiryani;
}
var tasteBiryani = marketBiryaniMasala();
console.log(tasteBiryani);
console.log(tasteBiryani);
console.log(tasteBiryani);
console.log(tasteBiryani);
// so in basic funtion to return function we learn that in function we call any operation many times and return
// function is a key of function to want to return any value
// parameters and arguments//
// what is parameters
// parameter(paramas) used as variable declaration
// what is arguments
// think like parameters are the ingredients in recipe and you use it called arguments.
function halfFryEgg1(butter, salt, egg) {
    return butter + salt + egg;
}
var response = halfFryEgg1(1.5, 1.4, 2); // upside there are 3 paramas thats why we ue three arguments
console.log(response);
console.log(response);
console.log(response);
console.log(response);
console.log(response);
// parameters types
// optional parameters
// default parameters
// rest parameters
// optional parameters
// Parameters that may or may not be provided. They are defined with a ? after the parameter name.
function greet(name, age) {
    return name + age;
}
var mySelf = greet("Areeba", undefined);
console.log(mySelf);
console.log(mySelf);
console.log(mySelf);
// default parameter
// what is default parameter
// when you dont pass argument and value is undefined when calling the function is default 
// when you dont pass the argumemt the function consider default function
//Use default parameter syntax parameter:=defaultValue if you want to set the default initialized value 
//for the parameter.
//Default parameters are optional.
//To use the default initialized value of a parameter, you omit the argument when calling the function 
//or pass the undefined into the function.
// //rest parameters
//Rest parameters allow a function to accept an indefinite
// number of arguments as an array. In TypeScript, you can use
// the rest parameter syntax (...) to indicate that a parameter
// should be a rest parameter. Here's an example:
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, num) { return total + num; }, 0);
}
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7, 8)); // Output: 30
// spread operators
// like we spread ingredient in kitchen counter
function halfFryEgg2(egg) {
    if (egg === void 0) { egg = 1; }
    var ingredients = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        ingredients[_i - 1] = arguments[_i];
    }
    console.log(egg);
    console.log.apply(console, ingredients);
}
halfFryEgg2(1, 1.5, 2, 5);
// arrow functions
//Arrow functions in TypeScript also support type annotations:
var multiply = function (x, y) {
    return x * y;
};
var product = multiply(4, 5);
console.log(product);
// function overloading//
//Function overloading allows you to define multiple signatures for a function:
//Function overloading enables a function to handle different types of arguments.
//Use function overloading to define multiple signatures for a single function to ensure type safety.
// variable scope//
// what is variable scope
// accesibilty or visiblity of variable in different part of code
// there are types of scope in typescript
// Global scope
// Function scope
// Block scope
// global scope
// ye wo hota ha jismen ham variable ko function sa bahar declare karwata hen
// function scope
// jismen ham function men variable ko dclare karta hen
// block scope
//variable declare with in block
// hoisting
//console.log(number2);  // cannot access before initialization
var number = 12;
console.log(number);
// anonymous function
var cooked = function () {
    var cooked = 1 + 2.5 + 2;
    console.log(cooked);
};
//cooked()   // function declared without a name
// invoked function
(function () {
    console.log("Run imedialtely!!!");
})();
