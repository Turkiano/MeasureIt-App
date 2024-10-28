/**
 * ------------Exercise 04.Array:----------------------------
 
a. Create an array colors with three color names.
b. Access the second element of the array colors.
c. Add a new color to the end of the colors array.
d. Remove the first color from the colors array.
e. Update the second color in the colors array.

*/

console.log("------------Exercise 04.Array:----------------------------");

//a. Create an array colors with three color names.
const colors = ["Red", "White", "Orange"];

//b. Access the second element of the array colors.
console.log(colors[1]);

//c. Add a new color to the end of the colors array.
colors.push("Black");
console.log(colors);

//d. Remove the first color from the colors array.

colors.shift();
console.log(colors);

//e. Update the second color in the colors array.
colors[1] = "Green";
console.log(colors);

/**
 * ------------Exercise 05.Functions:----------------------------
 
a. Write a function add that takes two numbers as parameters and returns their sum.
b. Write a function isEven that takes a number as a parameter and return true if it's even,
   otherwise return false.
c. Write a function greet that takes a name as a parameter and returns a greeting message.
d. Write a function calculateArea that takes the radius of a circle as a parameter,
   and returns its area.
 d.Write a function reverseString that takes a string as a parameter and returns its reverse.

*/
console.log("------------Exercise 05.Functions:----------------------------");

//a. Write a function add that takes two numbers as parameters and returns their sum.
//Option01. Normal function
function add(a, b) {
  return a + b;
}

//Option02.Arrow Function
const sumArrow = (a, b) => {
  return a + b;
};

console.log(add(1, 9));
console.log(sumArrow(1, 9));

//b. Write a function isEven that takes a number as a parameter and return true if it's even,
function isEven() {
  if (isEven % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(54));

//c. Write a function greet that takes a name as a parameter and returns a greeting message.
const name = "Turkiano";

function greeting() {
  return "Hello, " + name;
}

console.log(greeting());

//d. Write a function calculateArea that takes the radius of a circle as a parameter,
function calculateArea(radius) {
  const area = Math.PI * radius * radius;
  return area;
}

console.log(calculateArea(5)); // Output: 78.53981633974483 (for radius = 5)

// d.Write a function reverseString that takes a string as a parameter and returns its reverse.
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("uoYevoLI"));

console.log("------------Exercise 06.objects:----------------------------");

/**
 * /**
 * ------------Exercise 06.Objects:----------------------------
 a.Create an object person with properties name, age, and city.
 b. Access the name property of the person object.
 c. Add a new property country ot the person object.
 d. Update the age property of the person object.
 e. Delete the city property from the person object.
 */

// a.Create an object person with properties name, age, and city.
const person = {
  name: "Turkiano",
  age: 30,
  city: "Jeddah",
};

// b. Access the name property of the person object.
console.log(person);

// c. Add a new property country ot the person object.
person.country = "KSA";
console.log(person);

// d. Update the age property of the person object.
person.age = 38;
console.log(person);

// e. Delete the city property from the person object.
delete person.city;
console.log(person);

/**
 * /**
 * ------------Exercise 07.String Manipulation :----------------------------
 a.Concatenate two strinngs to orm a full name.
 b. Find the length of a given string.
 c. Convert a string to uppercase.
 d. Extract a substring from a string.
 e. Find the index of a specific character in a string.
 */

// a.Concatenate two strinngs to orm a full name.
const firstName = "Turki";
const lastName = "Saeed";
console.log("Full Name: " + firstName + lastName);

// b. Find the length of a given string.
let finding = firstName.length;
console.log(finding);

// c. Convert a string to uppercase.
let convertingUpper = firstName.toUpperCase();
console.log(convertingUpper);

// d. Extract a substring from a string.
const substring = lastName.substring(0, 5); // Extracts from index 0 to 5 (not inclusive)
console.log(substring);

// e. Find the index of a specific character in a string.
const findChar = "N";
const textIndex = firstName.indexOf(findChar);
console.log(textIndex);
