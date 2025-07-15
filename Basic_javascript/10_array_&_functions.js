/**************************************************************
 *              JavaScript: Array Functions (No Loops)
 *  Description:
 *  Demonstrates useful JavaScript Array methods with real-life examples
 *  WITHOUT using any loops.
 **************************************************************/

// ✅ 1. push() – Add item to the end
let tasks = ["Study", "Gym"];
tasks.push("Dinner");
console.log("push():", tasks); // ["Study", "Gym", "Dinner"]

// ✅ 2. pop() – Remove last item
tasks.pop();
console.log("pop():", tasks); // ["Study", "Gym"]

// ✅ 3. unshift() – Add item to the beginning
tasks.unshift("Wake up");
console.log("unshift():", tasks); // ["Wake up", "Study", "Gym"]

// ✅ 4. shift() – Remove first item
tasks.shift();
console.log("shift():", tasks); // ["Study", "Gym"]

// ✅ 5. includes() – Check if item exists
let shoppingList = ["milk", "bread", "eggs"];
console.log("includes('bread'):", shoppingList.includes("bread")); // true

// ✅ 6. indexOf() – Find index of item
console.log("indexOf('eggs'):", shoppingList.indexOf("eggs")); // 2

// ✅ 7. join() – Convert array to string
let nameParts = ["Danish", "Ahmed"];
let fullName = nameParts.join(" ");
console.log("join():", fullName); // "Danish Ahmed"

// ✅ 8. slice() – Copy part of array
let fruits = ["apple", "banana", "mango", "grapes"];
let tropical = fruits.slice(1, 3);
console.log("slice(1, 3):", tropical); // ["banana", "mango"]

// ✅ 9. splice() – Insert or remove items
let items = ["a", "b", "d"];
items.splice(2, 0, "c"); // insert "c" at index 2
console.log("splice():", items); // ["a", "b", "c", "d"]

// ✅ 10. map() – Apply function to each element
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
console.log("map() doubled:", doubled); // [2, 4, 6]

// ✅ 11. filter() – Keep only matching elements
let marks = [45, 82, 33, 90];
let passed = marks.filter(mark => mark >= 50);
console.log("filter() passed:", passed); // [82, 90]

// ✅ 12. sort() – Sort numbers
let scores = [90, 70, 100, 60];
scores.sort((a, b) => a - b);
console.log("sort():", scores); // [60, 70, 90, 100]

// ✅ 13. reverse() – Reverse array
scores.reverse();
console.log("reverse():", scores); // [100, 90, 70, 60]

