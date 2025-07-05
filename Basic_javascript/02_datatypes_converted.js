// This file explains how to convert variables from one data type to another in JavaScript.
// It includes examples of converting between strings, numbers, booleans, and other types and also find the variables datatypes.


// -----------------------------
// String Conversion
// -----------------------------
let num = 123; // This is number datatype
let boolVal = true; // This is boolean datatype
let strFromNum = String(num);     // "123"
let strFromBool = String(boolVal); // "true"
console.log("String from number:", strFromNum , " & TypeOf function Result: ", typeof(strFromNum));
console.log("String from boolean:", strFromBool, " & TypeOf function Result: ", typeof(strFromBool));



// -----------------------------
// Number Conversion
// -----------------------------
let strNum = "456";
let strBool = "true";
let numFromStr = Number(strNum);  // 456
let numFromBool = Number(boolVal); // 1 (true is 1, false is 0)
let invalidNum = Number(strBool); // NaN
console.log("Number from string:", numFromStr ," & TypeOf function Result: ", typeof(numFromStr));
console.log("Number from boolean:", numFromBool," & TypeOf function Result: ", typeof(numFromBool));
console.log("Number from invalid string:", invalidNum ," & TypeOf function Result: ", typeof(invalidNum));


// -----------------------------
// Boolean Conversion
// -----------------------------
let zero = 0;
let emptyStr = "";
let nonEmptyStr = "hello";
let boolFromZero = Boolean(zero);       // false
let boolFromEmptyStr = Boolean(emptyStr); // false
let boolFromStr = Boolean(nonEmptyStr);   // true
console.log("Boolean from 0:", boolFromZero , "& Typeof() is result is: ",typeof(boolFromZero));
console.log("Boolean from empty string:", boolFromEmptyStr, "& Typeof() is result is: ",typeof(boolFromEmptyStr));
console.log("Boolean from non-empty string:", boolFromStr, "& Typeof() is result is: ",typeof(boolFromStr));






// -----------------------------
// Summary
// -----------------------------
// - Use String() to convert to string
// - Use Number(), parseInt(), parseFloat() to convert to number
// - Typeof() This is used for find the datatype   
// - Use Boolean() to convert to boolean