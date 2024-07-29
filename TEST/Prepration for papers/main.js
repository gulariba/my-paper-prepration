// starting file with a greet msg
// print message in a basic way
console.log("Assalamoalikum! welcome on my profile");
//now print messege in a advance way
let message = "Areeba Ahmed Khan";
console.log(`${message}`);
//there i use variable "let"and database type "string"
//variable in programing
let favouriteDish = "biryani";
console.log(favouriteDish);
//in this code we use sensitive case also
//i want to change dish because its not my favourite
favouriteDish = "qorma";
console.log(favouriteDish);
//dont repeat the variable when value reasign
//strong typing in typescript included in non programing variables
//specify type of data
let userName = "Areeba Ahmed Khan"; //string datatype
console.log(`${userName}`);
let classRoom = 5;
let students = 20; //number datatype
let teachers = 10;
console.log(`${classRoom + students + teachers}`);
//let phoneNumber:number =31128717
//console.log(phoneNumber);
//boolean datatype
let phoneNumber = true; //boolean datatyoe
console.log(`${phoneNumber}`);
let email = "asho1234$@gmail.com"; //any datatype
console.log(email);
// these datatypes specify which datatype can hold variable
// type interference means dataype not show but apply with variables
//variable advance
//let and const 
//what is let variable how its work?
//i go to shopping now i have 10 thousand after shopping
// i have left 2 thousand thats like the varible of let 
// value change anytime 
let beforeShopping = 10000;
let afterShopping = 2000;
console.log(beforeShopping - afterShopping); //8000 spend on shopping
//what is const variable?
// your bank account number is const and 
// your bank balance change any time that means 
// acount number never cchange its constant but balance
// change like variable value
const accountNumber = 123456789; //here i use const because account balance is always constant
let accountBlance = 5000; // i use let variable because balance change any time
let leftBalance = 2000;
let totalAccountbalance = 3000;
console.log(totalAccountbalance);
//additional primitive data type
// undefined = not assigned a value not initalized
// unknown = tye is not known
//bigint = store larger number than the maximum limit
// symbol = unique property key
// null = no value or emptyvalue
// errors
// syntax error = the any word type wrong
// type error = wrong word typing
// assignibility error = correct data type error entring wrong data type
// what is modules?
// importing and exporting called modules
// operators in typepscript
let apple = 5;
let banana = 2; // addition operators
console.log(5 + 2);
console.log(5 - 2); // subtraction operators
console.log(5 * 2); // multiplication operators
console.log(5 / 2); // division operators
console.log(5 ** 2); // exponient operators
console.log(5 % 2); // modules operators
// unary operators
let a = 20;
let b = 15;
console.log(a--);
console.log(++a);
console.log(b--);
console.log(++b);
//combining operators
let pizza = 3 + 4 * 5;
console.log(pizza); //23 first muitiply then plus 
let burger = 400 + 200 / 100; // first divide then plus
burger++;
console.log(burger++);
console.log(burger--);
export {};
