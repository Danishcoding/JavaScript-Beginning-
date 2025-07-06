// 04_comparison_operators.js
// Demonstrates comparison operations in JavaScript

// - Equal (==)
// - Not Equal (!=)
// - Strict Equal (===)
// - Strict Not Equal (!==)
// - Greater than (>)
// - Less than (<)
// - Greater than or equal to (>=) 
// - Less than or equal to (<=)


let a = 10;
let b = 20;
let c = "10";

console.log("a =", a);  // 10
console.log("b =", b);  // 20
console.log("c =", c);  // "10" (string)

// ------------------------------------
// Equal (==): compares value only
// ------------------------------------
console.log("a == c:", a == c); // true (value is same, type is different)

// ------------------------------------------
// Strict Equal (===): compares value and type
// ------------------------------------------
console.log("a === c:", a === c); // false (type is different)

// -------------------------------------
// Not Equal (!=): compares value only
// -------------------------------------
console.log("a != b:", a != b); // true

// -------------------------------------------
// Strict Not Equal (!==): value and type check
// -------------------------------------------
console.log("a !== c:", a !== c); // true

// --------------------------------------
// Greater Than (>): checks if left > right
// --------------------------------------
console.log("b > a:", b > a); // true

// -------------------------------------------
// Less Than (<): checks if left < right
// -------------------------------------------
console.log("a < b:", a < b); // true

// ------------------------------------------------
// Greater Than or Equal To (>=): left ≥ right
// ------------------------------------------------
console.log("a >= 10:", a >= 10); // true

// ------------------------------------------------
// Less Than or Equal To (<=): left ≤ right
// ------------------------------------------------
console.log("b <= 15:", b <= 15); // false

// ----------------------------
// Type Check using typeof
// ----------------------------
console.log("typeof a:", typeof a); // number
console.log("typeof c:", typeof c); // string
