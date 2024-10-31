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

/**
 * ----- Exercise 01. Variables & Data Types: --------------------
 */

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
console.log("------------------------------------------");

/**
 * ------------Exercise 02.Conditonal Statements:----------------------------
 */

/**
 
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
const number = 20;
if (number % 2 === 0) {
  console.log("This number " + number + " is even");
} else if (number % 1 === 0) {
  console.log("This number is odd");
}
//another way to do it
const isEven = number % 2 === 0;
const isOdd = number & (1 === 0);
if (isEven) {
  console.log("Example 02: This number is even");
}
if (isOdd) {
  console.log("Example 02: This number is odd");
}

//  c. write nested if statements to check if a student
const score = 50;
if (score >= 90) {
  console.log(" You got A");
} else if (score >= 80) {
  console.log(" You got B");
} else if (score >= 60) {
  console.log(" You got C");
} else {
  console.log(" You got F, do it again");
}

//d. write a switch statement to display a message,
function whatDay(day) {
  switch (day) {
    case 1:
      return "Sunday";

    case 2:
      return "Monday";

    default:
      return "pick one of the two days above";
  }
}
console.log(whatDay(1));
console.log(whatDay(2));
console.log(whatDay(6));

/*
e. write an ternary operator to determine if a person
  is eligible to vote based on their age.
*/
const herAge = 28;
age > 18
  ? console.log("yes, you can drive")
  : console.log("come back, when you grow up");

//it is the same as the if statement below:
if (herAge > 18) {
  console.log("yes, you can drive");
} else {
  console.log("come back, when you grow up");
}
console.log("-----------------Exercise 03.Loops-------------------------");

/**
 * ------------Exercise 03.Loops:----------------------------
 
a. Write a for loop to iterate from 1 to 5 and display each number.
b. Write a while loop to print even numbers between 1 and 10.
c. Write a do-while loop to prompt the user to enter a number until they enter a negative number.
d. Iterate over an array of names using a for loop and display each name.
e. Use a for loop to find the sum of all numbers in an array.

*/

//a. Write a for loop to iterate from 1 to 5 and display each number.
for (let i = 1; i <= 5; i++) { //increments  i++
  console.log(i);
}

//b. Write a while loop to print even numbers between 1 and 10.
// const testing = 2; // Start from the first even numbers

// while (testing <= 10)
// {
//   testing += 2; // Increment by 2 to get the next even number
//   // Console.WriteLine(testing);
// }





//c. Write a do-while loop to prompt the user to enter a number until they enter a negative number.

