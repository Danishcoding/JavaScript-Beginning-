// Demonstrates Logical Operations in JavaScript

// there are three main logical operators:

// -  AND (&&)
// -  OR (||)
// -  NOT (!)


let x = 10;
let y = 20;

// --------------------------
// Logical AND (&&)
// --------------------------
console.log(x > 5 && y > 15); // true && true => true
console.log(x > 5 && y < 10); // true && false => false

// --------------------------
// Logical OR (||)
// --------------------------
console.log(x < 5 || y > 15); // false || true => true
console.log(x < 5 || y < 10); // false || false => false

// --------------------------
// Logical NOT (!)
// --------------------------

let isLoggedIn = false;
console.log(!isLoggedIn); // true (because not false = true)
