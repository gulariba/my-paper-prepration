// assigment operators
// you assign taskk to your  family
let c:number = 10;
let d:number = 12;
c+= 2;
d+= 3;
console.log(c++);
console.log(d--);

// camparsion operators
// 5 == 2 is false  //is equal
// 5!= 2  is true   // is not equal
// 5 > 2  is true   // is greater than
// 5 < 2  is false  // is less than

let a = 5;
let b = 4;
console.log(a == b);  //false
console.log(a! = b);  // 4
console.log(a > b);   //false
console.log(a < b);   //false

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
let x: boolean = true;
let y: boolean = false;
console.log(a && b); // Output: false
//OR (||)
//Description: Returns true if at least one
// of the operands is true; otherwise, it returns false.
let w: boolean = true;
let v: boolean = false;
console.log(a || b); // Output: true
//NOT (!)
//Description: Returns true if the operand is false;
// otherwise, it returns false.
let e: boolean = true;
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
  let num: number = 10;

if (num > 0) {
  console.log("The number is positive");
} else {
  console.log("The number is not positive");
}
// Output: The number is positive

// if...else if...else
let num1: number = -5;

if (num1 > 0) {
  console.log("The number is positive");
} else if (num1 < 0) {
  console.log("The number is negative");
} else {
  console.log("The number is zero");
}
// Output: The number is negative

//some examples
let age: number = 20;
let hasPermit: boolean = true;

if (age >= 18 && hasPermit) {
  console.log("Allowed to drive");
} else {
  console.log("Not allowed to drive");
}
// Output: Allowed to drive

// login condition
let username: string = "admin";
let password: string = "admin123";

if (username === "admin" && password === "admin123") {
  console.log("Login successful");
} else if (username !== "admin") {
  console.log("Invalid username");
} else {
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

let isHungry = true;
let snack = isHungry ? "eat" : "drink";
console.log(`you should have some ${snack}`);

//switch statment

let classTimings = "wednesday";
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
};