/***************************************/
//               Number in JavaScript
/***************************************/

// A number has only one number type : "Number" it includes both integers and floating point (decimal) value

// There are two types of declear the Number

// 01-  Number() function use
let num1 = Number(10)


// 02- Without Number() function use
let num2 = 10

console.log(`with number function is value ${num1} and without number function is value ${num2}`)

console.log(`----------------------------------------------------------`)

// There following of number 
// - Interger Or Number
// - Float
// - Negitive number
// - Infinity
// - NaN  ->Not a number Invalid math operation 


let age = 21 ;
let price = 99.9
let nagitive = -10
let ininity = Infinity // this object for infinity 
let not_number = NaN // It's is not a number invalid math operation

console.log(`Interger = ${age} , Float = ${price} , Negitive Integer = ${nagitive} , Infinity = ${Infinity} and NaN = ${not_number}`)

console.log(`----------------------------------------------------------`)

// ============================
// Math Functions / Methods
// ============================

// 01 - isNaN()
// Description: return boolean value and Check if Value is Not a Number

let text = "Hello"
let num3 = 123

let check_string = text.isNaN() 
let check_number = num3.isNaN()

console.log(`This text is number check ${check_string}`)
console.log(`This number is number check ${check_number}`)

console.log(`----------------------------------------------------------`)

// 03 - parseInt()
// Description: Converts String to Integer

let str = "120.23"
let str2 = `abc`

let str_into_int = str.parseInt()
let str2_into_int = str2.parseInt()

console.log(`The return on this parseInt() of string value of the 123.12 ${str_into_int} and the return on this parseInt() of string value is abc ${str2_into_int} `)

console.log(`----------------------------------------------------------`)

// 03 - parseFloat()
// Description: Converts String to Float

let str_into_float = str.parseFloat()
let str2_into_float = str2.parseFloat()

console.log(`The return on this parseFloat() of string value of the 123.12 ${str_into_float} and the return on this parseFloat() of string value is abc ${str2_into_float} `)

console.log(`----------------------------------------------------------`)

// 03 - parseFloat()
// Description: Converts String to Float
