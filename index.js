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
/**
 * --------------------------------------------------
 */

/**
  Exercise 02.Conditonal Statements:
  a. Write an if statement to check if a number is greater than 10.
  b. Write an if-else statement to check if a number is even or odd.
  c. write nested if statements to check if a student
   pass or failed an exam, based on their score (passing score >= 60).
  d. write a switch statement to display a message,
  based on the day of the week.
  e. write an ternary operator to determine if a person
  is eligible to vote based on their age.
 */

//a. Write an if statement to check if a number is greater than 10.
const examOne = 100;
if (age > 10) {
  console.log("YOu are welcome");
}

//b. Write an if-else statement to check if a number is even or odd.
const number = 345;
if (number % 2 === 0) {
  console.log("This number " + number + "is even");
}
return "This number is odd";

//  c. write nested if statements to check if a student
