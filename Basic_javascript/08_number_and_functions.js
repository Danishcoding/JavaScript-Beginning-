/**************************************************************
 *                 JavaScript: Numbers & Math Functions
 *  Description:
 *  This file demonstrates various number types, methods,
 *  and math-related functions in JavaScript, along with
 *  descriptions and examples for each.
 **************************************************************/

// ✅ JavaScript has a single number type: `Number`
// It includes integers, floating-point numbers, special values like Infinity and NaN.

// ✅ Declaring Numbers
// Method 1: Using Number() constructor
let num1 = Number(10);

// Method 2: Direct number assignment
let num2 = 10;

console.log(`Using Number(): ${num1}, Direct assignment: ${num2}`);
console.log("----------------------------------------------------------");

// ✅ Types of Numbers
let integer = 21;
let float = 99.9;
let negative = -10;
let infinity = Infinity;
let notNumber = NaN;

console.log(`Integer: ${integer}, Float: ${float}, Negative: ${negative}, Infinity: ${infinity}, NaN: ${notNumber}`);
console.log("----------------------------------------------------------");

// ================================
// 🔢 JavaScript Number Functions
// ================================

// 1️⃣ isNaN()
// Description: Checks if a value is Not-a-Number (NaN)
let text = "Hello";
let number = 123;

console.log(`isNaN('Hello'): ${isNaN(text)}`);  // true
console.log(`isNaN(123): ${isNaN(number)}`);    // false
console.log("----------------------------------------------------------");

// 2️⃣ parseInt()
// Description: Converts a string to an integer
let str1 = "120.23";
let str2 = "abc";

console.log(`parseInt("120.23"): ${parseInt(str1)}`);  // 120
console.log(`parseInt("abc"): ${parseInt(str2)}`);    // NaN
console.log("----------------------------------------------------------");

// 3️⃣ parseFloat()
// Description: Converts a string to a floating-point number
console.log(`parseFloat("120.23"): ${parseFloat(str1)}`);  // 120.23
console.log(`parseFloat("abc"): ${parseFloat(str2)}`);     // NaN
console.log("----------------------------------------------------------");

// 4️⃣ toFixed()
// Description: Rounds a number to a fixed number of decimal places (returns string)
let price = 200;
let fixedPrice = price.toFixed(2);

console.log(`Original Price: ${price}, Fixed (2 decimal places): ${fixedPrice}`);
console.log("----------------------------------------------------------");

// 5️⃣ Math.floor()
// Description: Rounds a number down to the nearest integer
let age = 21.6;
let roundedDown = Math.floor(age);

console.log(`Before: ${age}, After floor(): ${roundedDown}`);
console.log("----------------------------------------------------------");

// ✅ Precision in JavaScript
// Due to binary representation, some decimals are not exact
let a = 0.1;
let b = 0.2;
let result = a + b;

console.log(`0.1 + 0.2 = ${result}`);  // 0.30000000000000004 (not exactly 0.3)
console.log("----------------------------------------------------------");

// 6️⃣ toPrecision()
// Description: Formats a number to a specified number of significant digits
let value = 123.456;

console.log(`toPrecision(2): ${value.toPrecision(2)}`);  // "1.2e+2"
console.log(`toPrecision(4): ${value.toPrecision(4)}`);  // "123.5"
console.log(`toPrecision(6): ${value.toPrecision(6)}`);  // "123.456"
console.log("----------------------------------------------------------");

// 7️⃣ toLocaleString()
// Description: Formats number with region-specific separators
let rupees = 1000000000;

let localized = rupees.toLocaleString('en-PK');
console.log(`Standard: ${rupees}, Localized (PK): ${localized}`);
console.log("----------------------------------------------------------");

// 8️⃣ Math.abs()
// Description: Returns the absolute (positive) value of a number
let negativeValue = -200;
console.log(`Math.abs(-200): ${Math.abs(negativeValue)}`);
console.log("----------------------------------------------------------");

// 9️⃣ Math.round()
// Description: Rounds to the nearest integer
console.log(`Math.round(4.5): ${Math.round(4.5)}`);  // 5
console.log(`Math.round(4.3): ${Math.round(4.3)}`);  // 4
console.log("----------------------------------------------------------");

// 🔟 Math.ceil()
// Description: Rounds a number UP to the nearest integer
let numCeil = 4.2;
console.log(`Math.ceil(4.2): ${Math.ceil(numCeil)}`);
console.log("----------------------------------------------------------");

// 1️⃣1️⃣ Math.random()
// Description: Generates a random number between 0 (inclusive) and 1 (exclusive)
let randomNum = Math.random();
console.log(`Math.random(): ${randomNum}`);

// Generate a random number between a min and max value (inclusive)
const min = 10;
const max = 20;

let randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Random number between ${min} and ${max}: ${randomInRange}`);
console.log("----------------------------------------------------------");





