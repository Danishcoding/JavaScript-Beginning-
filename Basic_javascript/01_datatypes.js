/* There are few methods for declaring variables
1- Old Ways
2- Modern Ways
*/ 

var account_name = "Danish";  
// Old method to declare variables. It is function-scoped, 
// allows re-assignment and re-declaration.

const account_no = 123122121213313;  
// Declares a constant value. It is block-scoped and 
// does not allow re-declaration or re-assignment.

let account_type = "Current Account"; 
// Modern way to declare a variable. It is block-scoped.

/******************************* Data Types ******************************/

/* There are two types of data types:
1- Primitive Data Types 
2- Non-Primitive Data Types
*/

// Primitive Data Types

// 01 - Number 
let account_balance = 50000.0;

// 02 - String 
let bank_name = "HBL Habib Bank Limited";

// 03 - Boolean 
let account_status = true; // This status means account is Active

// 04 - Undefined 
let account_currency; // No need to assign undefined manually

// 05 - Null 
let account_email = null;

// ✅ Fixed console.table() usage — pass an object or array
console.table({
  Account_No: account_no,
  Account_Name: account_name,
  Account_Email: account_email,
  Account_Type: account_type,
  Account_Status: account_status,
  Account_Currency: account_currency,
  Account_Balance: account_balance
});

// ❌ This was invalid:
// console.lo("Account Balance: " account_balance)

// ✅ Correct:
console.log("Account Balance:", account_balance);

// NOTICE 
/* The Non-Primitive Data Types are not defined now */

// Examples:
// 01 - Object
// 02 - Array 
// 03 - Function 
// 04 - Date
// 05 - RegExp
