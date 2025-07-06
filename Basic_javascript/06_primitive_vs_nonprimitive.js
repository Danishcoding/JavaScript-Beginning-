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


// ==============================
// 📌 STACK vs HEAP in JavaScript
// ==============================

// ==========================================
// ✅ STACK MEMORY (Primitive Data Types)
// ==========================================

// 📌 Points:
// - Used for storing primitive data types (String, Number, Boolean, etc.)
// - Stored in fixed-size memory blocks
// - Fast access
// - Data is copied by value (not by reference)

let userName = "Danish";
let userAge = 25;

let anotherAge = userAge; // Copy by value
anotherAge = 30;

console.log("Original Age:", userAge);     // 25
console.log("Copied and Modified Age:", anotherAge); // 30

// Explanation:
// userAge and anotherAge are stored in stack separately.
// Changing one does not affect the other.

// ==========================================
// ✅ HEAP MEMORY (Non-Primitive Data Types)
// ==========================================

// 📌 Points:
// - Used for storing non-primitive/reference types (Object, Array, Function)
// - Allocated dynamically
// - Data is copied by reference (not by value)

let person1 = {
  name: "Danish",
  age: 25
};

let person2 = person1; // Copy by reference
person2.age = 30;

console.log("Person 1:", person1); // { name: 'Danish', age: 30 }
console.log("Person 2:", person2); // { name: 'Danish', age: 30 }

// Explanation:
// Both person1 and person2 point to the same object in the heap.
// Changing one affects the other.

// ==========================================
// 🧠 Summary:
// ==========================================

/*
STACK:
- Stores primitive types
- Data is copied by value
- Faster and smaller memory
- Examples: string, number, boolean

HEAP:
- Stores non-primitive types
- Data is copied by reference
- Slower but flexible memory
- Examples: object, array, function
*/
