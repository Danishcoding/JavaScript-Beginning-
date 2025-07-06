/*****************************************
Basic Arithmetic Operations in JavaScript
******************************************/

// Operators Covered:
// - Addition (+)
// - Subtraction (-)
// - Multiplication (*)
// - Division (/)
// - Modulus (%)
// - Exponentiation (**)
// - Increment (++) and Decrement (--) With Prefix and Postfix


let num1 = 300;
let num2 = 400;

// ----------------------
// Addition Operation (+) 
// ----------------------
let sum = num1 + num2;
console.log("The sum of two numbers is:", sum);

// -------------------------
// Subtraction Operation (-)
// -------------------------
let difference = num1 - num2;
console.log("The difference of two numbers is:", difference);

// ----------------------------
// Multiplication Operation (*)
// ----------------------------
let product = num1 * num2;
console.log("The product of two numbers is:", product);

// -------------------------
// Division Operation (/)
// -------------------------
let quotient = num1 / num2;
console.log("The quotient of two numbers is:", quotient);

// -----------------------------
// Modulus Operation (%)
// -----------------------------
let remainder = num1 % num2;
console.log("The remainder of num1 divided by num2 is:", remainder);

// -----------------------------
// Exponentiation Operation (**)
// -----------------------------
let power =  2**2;
console.log("num1 raised to the power of 2 is:", power);
// -----------------------------
// Increment and Decrement
// -----------------------------
let value = 10;
console.log("Original value:", value); // Output: 10

// Postfix Increment (value++)
// First use the value, then increase it
console.log("Postfix Increment (value++):", value++); // Output: 10
console.log("Value after Postfix Increment:", value); // Output: 11

// Prefix Increment (++value)
// First increase the value, then use it
console.log("Prefix Increment (++value):", ++value); // Output: 12

// Postfix Decrement (value--)
// First use the value, then decrease it
console.log("Postfix Decrement (value--):", value--); // Output: 12
console.log("Value after Postfix Decrement:", value); // Output: 11

// Prefix Decrement (--value)
// First decrease the value, then use it
console.log("Prefix Decrement (--value):", --value); // Output: 10