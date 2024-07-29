// if else small example

let quizPassed : string = "successfull";
if (quizPassed === "successfull"){
    console.log("Conratulations!!! you successfull in exam");
}else{
    console.log("soory!!! you failed in exam");
}

// small if else game 
let positionHolders : string = "Areeba";
let positionHolder : string = "Amir";
if(positionHolders){
    console.log(`congrats! ${positionHolders} got 1st position`);
}else if(positionHolders){
    console.log(`congrats! you ${positionHolders} got 1st position`);
}else{
    console.log("keep it up!");
}

// Friend checker Game
let isFriend : string = "Areeba";
if(isFriend === "Areeba" || isFriend === "Mahnoor"){
    console.log(`${isFriend} is your friend`);
}else{
    console.log(`${isFriend} is not your friend`);
}

                                   // functions//
// what is functions?
// fundemnetal building of block code of javascript

function halfFryEgg(){
    let cooked = 1 + 2.5 + 3
    console.log(cooked);
}   
halfFryEgg()
halfFryEgg()
halfFryEgg()
halfFryEgg()
halfFryEgg()
halfFryEgg()
halfFryEgg()
halfFryEgg()

// another basic example of functions

function apple() {
    let eating = 1 + 1 + 1
    console.log(eating);
}
apple()
apple()
apple()

//  Returning function values

function marketBiryaniMasala() {
    let cookedBiryani = 250
    return cookedBiryani 
}
let tasteBiryani : number = marketBiryaniMasala()
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

function halfFryEgg1(butter:number, salt:number, egg:number) {
    return butter + salt + egg;
}
let response : number = halfFryEgg1(1.5 , 1.4 , 2); // upside there are 3 paramas thats why we ue three arguments
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
function greet(name:string , age?:number) {
    return name + age;
}
let mySelf : string = greet("Areeba" , undefined);
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
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7, 8)); // Output: 30

// spread operators
// like we spread ingredient in kitchen counter
function halfFryEgg2 (egg : number = 1 ,...ingredients: number[]){
    console.log(egg);
    console.log(...ingredients);
}
halfFryEgg2(1 , 1.5 , 2 , 5)

// arrow functions
//Arrow functions in TypeScript also support type annotations:
let multiply =(x:number , y:number) :number =>{
    return x*y
};
let product = multiply(4 , 5);
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
let number = 12;
console.log(number);

// anonymous function
let cooked  = function () {
    let cooked = 1 + 2.5 + 2
    console.log(cooked)
};
//cooked()   // function declared without a name

// invoked function
(function(){
    console.log("Run imedialtely!!!")   // call it directly
})();


