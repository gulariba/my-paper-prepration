// assigment operators
// you assign taskk to your  family
var c = 10;
var d = 12;
c += 2;
d += 3;
console.log(c++);
console.log(d--);
// camparsion operators
// 5 == 2 is false  //is equal
// 5!= 2  is true   // is not equal
// 5 > 2  is true   // is greater than
// 5 < 2  is false  // is less than
var a = 5;
var b = 4;
console.log(a == b); //false
console.log(a = b); // 4
console.log(a > b); //false
console.log(a < b); //false
//logical operators
//Logical operators are used in programming to perform
// logical operations, allowing you to make decisions 
//based on multiple conditions. The most common logical
// operators are AND, OR, and NOT. Here’s a quick 
//overview of these operators:
//AND (&&)
//Description: Returns true if both operands 
//are true; otherwise, it returns false.
//In TypeScript, logical operators are used just
// as they are in JavaScript. They are primarily
// used to combine or invert boolean expressions 
//and make decisions based on multiple conditions.
var x = true;
var y = false;
console.log(a && b); // Output: false
//OR (||)
//Description: Returns true if at least one
// of the operands is true; otherwise, it returns false.
var w = true;
var v = false;
console.log(a || b); // Output: true
//NOT (!)
//Description: Returns true if the operand is false;
// otherwise, it returns false.
var e = true;
console.log(!e); // Output: false
// logic statements
// if and if else statments
// deciding what to wear based on the weather
// if a rainy weather you wear raincoat
// otherwise (else) you wear a glasses
//In TypeScript, if...else statements are used
// to execute different blocks of code based on 
//different conditions. 
// Basic Syntax
//if (condition) {
// block of code to be executed if the condition is true
//} else if (anotherCondition) {
// block of code to be executed if the anotherCondition is true
//} else {
// block of code to be executed if none of the conditions are true
//}
var num = 10;
if (num > 0) {
    console.log("The number is positive");
}
else {
    console.log("The number is not positive");
}
// Output: The number is positive
// if...else if...else
var num1 = -5;
if (num1 > 0) {
    console.log("The number is positive");
}
else if (num1 < 0) {
    console.log("The number is negative");
}
else {
    console.log("The number is zero");
}
// Output: The number is negative
//some examples
var age = 20;
var hasPermit = true;
if (age >= 18 && hasPermit) {
    console.log("Allowed to drive");
}
else {
    console.log("Not allowed to drive");
}
// Output: Allowed to drive
// login condition
var username = "admin";
var password = "admin123";
if (username === "admin" && password === "admin123") {
    console.log("Login successful");
}
else if (username !== "admin") {
    console.log("Invalid username");
}
else {
    console.log("Invalid password");
}
// Output: Login successful
// conditional tenary operators
//In TypeScript, the conditional (ternary) operator is a shorthand
// way to perform a simple if...else statement. The ternary operator 
//takes three operands: a condition, an expression to execute if the
// condition is true, and an expression to execute if the condition 
//is false. The syntax is:
// when deciding on a snack you think am i hungry? if yes you eat if not you drink water
var isHungry = true;
var snack = isHungry ? "eat" : "drink";
console.log("you should have some ".concat(snack));
//switch statment
var classTimings = "wednesday";
switch (classTimings) {
    case "sunday":
        console.log("go to your class");
        break;
    case "monday":
        console.log("go to your work");
        break;
    case "tuesday":
        console.log("go to your work");
        break;
    case "wednesday":
        console.log("take a sick leave");
        break;
    default:
        console.log("holiday");
}
;
// self check quiz
var questionNumber = 1; // Change this number to test different questions
var answer;
switch (questionNumber) {
    case 1:
        console.log("What is the output of the following code?");
        console.log("console.log(5 + '5');");
        answer = "55";
        break;
    case 2:
        console.log("What is the type of NaN in JavaScript?");
        answer = "number";
        break;
    case 3:
        console.log("Which method is used to add an element to the end of an array?");
        answer = "push()";
        break;
    case 4:
        console.log("What does CSS stand for?");
        answer = "Cascading Style Sheets";
        break;
    case 5:
        console.log("What is the correct syntax for creating a function in TypeScript?");
        answer = "function myFunction(): void {}";
        break;
    default:
        console.log("Invalid question number");
        answer = undefined;
}
if (answer !== undefined) {
    console.log("Your answer: ".concat(answer));
}
