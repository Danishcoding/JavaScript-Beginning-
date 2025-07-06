// ------------------------------------
// ✅ Primitive Data Types
// ------------------------------------
// These are basic data types. They store a single value and are immutable.

// There are main 8 datatypes in Primitive datatypes.
// - String
// - Number
// - Boolean
// - Undefined
// - Null
// - Symbol
// - BigInt

let name = "Danish";         // String
let age = 25;                // Number
let isStudent = true;        // Boolean
let unknown = undefined;     // Undefined
let nothing = null;          // Null
let symbolId = Symbol("id"); // Symbol
let bigIntValue = 1234567890123456789012345678901234567890n; // BigInt

console.log("Name:", name);               // "Danish"
console.log("Age:", age);                 // 25
console.log("Is Student:", isStudent);    // true
console.log("Undefined Value:", unknown); // undefined
console.log("Null Value:", nothing);      // null
console.log("Symbol:", symbolId);         // Symbol(id)
console.log("BigInt:", bigIntValue);      // BigInt value

// ------------------------------------
// ✅ Non-Primitive (Reference) Data Types
// ------------------------------------
// These store multiple values and are mutable. Stored by reference.

// There three main Non-Primitive datatypes.
// - Object
// - Function 
// - Array 

let person = {
  name: "Danish",
  age: 25
}; // Object

let colors = ["Red", "Green", "Blue"]; // Array

function greet() {
  console.log("Hello from function!");
} // Function

console.log("Person Object:", person);
console.log("Colors Array:", colors);
greet(); // Calling the function
