/**
 Exercise 01. Variables & Data Types: 
    a. Declare a variable 'name', and assign it to a string value.
    b. Declare a variable 'age', and assign it to a number value.
    c. Declare a variable 'isStudent', and assign it to a boolean value.
    d. Declare a variable 'result', and assign it to a method adding two numbers.
    e. Declare a variable 'message ', and assign it to a string concatenation of name,
    and greeting message.
 */

//camel Case
const userName = "Marriah";
//all caps
const ROLE = "admin";
//pascal Case
const UserName = "Walter";

//snake or kebab Case
const user_name = "SKy";

//a. Declare a variable 'name', and assign it to a string value.
const name = "Turkiano";

//b. Declare a variable 'age', and assign it to a number value.
const age = 18;

//c. Declare a variable 'isStudent', and assign it to a boolean value.
const isStudent = true;

//d. Declare a variable 'result', and assign it to a method adding two numbers.
const numberOne = 10;
const numberTwo = 7;
const result = numberOne + numberTwo;
console.log(result);

//e.Declare a variable 'message ', and assign it to a string concatenation of name, and greeting message.
const message = "hello" + userName;

console.log(message);

const exampleTwo = `Hello, ${userName}`;
console.log(exampleTwo);
